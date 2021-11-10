import e from "express";
import asyncHandler from "express-async-handler";
import Trail from '../models/Trail.js';
import Traffic from '../models/Traffic.js';
import { nameToSlug } from "../utils/nameToSlug.js";

//@route    POST /trails/new
//@desc     Createes a new trail
//@access   Private
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

//@route    GET /trails/all
//@desc     Get all trails
//@access   Public
const getAllTrails = asyncHandler(async (req, res) => {
    const trails = await Trail.find();
    console.log(trails);
    res.json(trails);
});

//@route    GET /trails/:slugname
//@desc     Get details of specified trail
//@access   Public
const getTrail = asyncHandler(async (req, res) => {
    const trail = await Trail.findOne({slugName: req.params.slugname});
    console.log(trail);
    if (trail) {
        res.json(trail);
    }
});

//@route    GET /trails/traffic/:slugname
//@desc     Get traffic of specified trail
//@access   Public
const getTraffic = asyncHandler(async (req, res) => {
    const traffic = await Traffic.findOne({trailSlug: req.params.slugname});
    if (traffic) {
        res.json(traffic);
    }
});

export {getAllTrails, newTrail, getTrail, getTraffic};