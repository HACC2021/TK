import fs from 'fs';

export function populateDatabase() {
    console.log("Loading data...");
    const data = JSON.parse(fs.readFileSync("/app/utils/trailData.geojson", "utf-8"));
    data.features.forEach( async (trail) => {
    });
}