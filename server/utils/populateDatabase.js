import fs from 'fs';
import Trail from '../models/Trail.js';
import { nameToSlug } from './nameToSlug.js';
import { parseTags } from './parseTags.js';

export async function populateDatabase() {
    const hasData = await Trail.find();
    if (hasData.length === 0) {
        const data = JSON.parse(fs.readFileSync("/app/utils/trailData.geojson", "utf-8"));
        data.features.forEach( async (trail) => {
            const name = trail.properties.trailname;
            const slugName = nameToSlug(name);
            const tags = parseTags(trail.properties.features);
            Trail.create({
                name,
                slugName,
                description: trail.properties.comments,
                tags,
            });
        });
    }
}