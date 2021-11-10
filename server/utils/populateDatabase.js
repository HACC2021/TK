import fs from 'fs';
import faker from 'faker';
import Trail from '../models/Trail.js';
import User from '../models/User.js';
import { nameToSlug } from './nameToSlug.js';
import { parseTags } from './parseTags.js';
import Review from '../models/Review.js';
import Traffic from '../models/Traffic.js';

export async function populateTrailsDatabase() {
    const trailsLength = await Trail.count();
    if (trailsLength === 0) {
        const data = JSON.parse(fs.readFileSync("/app/utils/trailData.geojson", "utf-8"));
        data.features.forEach( async (trail) => {
            const name = trail.properties.trailname;
            const slugName = nameToSlug(name);
            const tags = parseTags(trail.properties.features);
            await Trail.create({
                name,
                slugName,
                description: trail.properties.comments,
                tags,
            });
        });
    }
}

export async function populateUsersDatabase() {
    const hasUser = await User.findOne({username: "username"});

    if (!hasUser) {
        await User.create({
            username: "username",
            email: "email@gmail.com",
            password: "password"
        });
    }

    let length = await User.count();

    while (length < 20) {
        await User.create({
            username: `${faker.name.firstName()}${faker.name.lastName()}`,
            email: faker.internet.email(),
            password: "password"
        });
        length++;
    }
}

export async function populateReviewsDatabase() {
    const user = await getRandomUser();
    const trail = await getRandomTrail();

    let reviewsCount = await Review.count();

    while (reviewsCount < 30) {
        await Review.create({
            trailSlug: trail.slugName,
            userId: user._id,
            rating: Math.floor((Math.random() * 5) + 1),
            review: faker.lorem.paragraph()
        });
        reviewsCount++;
    }
}

export async function populateTrafficDatabase() {
    const trails = await Trail.find();
    const trafficLength = await Traffic.count();

    if (trafficLength === 0) {
        trails.forEach(trail => {
            const traffic = [];
            for (let i = 0; i < 12; i++) {
                traffic.push(Math.floor((Math.random() * 3) + 1));
            }
            Traffic.create({
                trailSlug: trail.slugName,
                traffic
            })
        });
    }
}

async function getRandomUser() {
    const userCount = await User.count();

    const random = Math.floor(Math.random() * userCount);
    
    const user = await User.findOne().skip(random);
    return user;
}

async function getRandomTrail() {
    const trailCount = await Trail.count();

    const random = Math.floor(Math.random() * trailCount);
    
    const trail = await Trail.findOne().skip(random);
    return trail;
}