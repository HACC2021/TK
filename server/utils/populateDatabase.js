import fs from 'fs';
import faker from 'faker';
import Trail from '../models/Trail.js';
import User from '../models/User.js';
import { nameToSlug } from './nameToSlug.js';
import { parseTags } from './parseTags.js';
import Review from '../models/Review.js';

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