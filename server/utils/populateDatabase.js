import fs from 'fs';
import faker from 'faker';
import Trail from '../models/Trail.js';
import User from '../models/User.js';
import { nameToSlug } from './nameToSlug.js';
import { parseTags } from './parseTags.js';

export async function populateTrailsDatabase() {
    const hasData = await Trail.find();
    if (hasData.length === 0) {
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

    const users = await User.find();
    let length = users.length;

    while (length < 20) {
        await User.create({
            username: `${faker.name.firstName()}${faker.name.lastName()}`,
            email: faker.internet.email(),
            password: "password"
        });
        length++;
    }
}