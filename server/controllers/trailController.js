import asyncHandler from "express-async-handler";
import Trail from '../models/Trail.js';

//Function that converts given text into a slug text
function nameToSlug(Text) {
    return Text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

const newTrail = asyncHandler(async (req, res) => {
    const {name, description, tags, coordinates} = req.body;

    const slugName = nameToSlug(name);
    const trailExists = await Trail.findOne({slugName});

    if (trailExists) {
        res.status(404);
        throw new Error("Trail already exists");
    }

    const trail = await Trail.create({
        name,
        slugName,
        description,
        tags,
        coordinates
    });

    if (trail) {
        res.status(201).json({
            _id: trail._id,
            name: trail.name,
            slugName: trail.slugName,
            description: trail.description,
            tags: trail.tags,
            // rating: trail.rating,
            coordinates: trail.coordinates,
        })
    } else {
        res.status(400);
        throw new Error("Error occured");
    }
});

const getAllTrails = asyncHandler(async (req, res) => {
    const trails = await Trail.find();
    console.log(trails);
    res.json(trails);
});

export {getAllTrails, newTrail};