import asyncHandler from "express-async-handler";
import Review from '../models/Review.js';

//@route    POST /review/new
//@desc     Create a new review of a given trail
//@access   Private
const createReview = asyncHandler(async (req, res) => {
    const {trailSlug, rating, review} = req.body;

    const newReview = await Review.create({
        trailSlug,
        userId: req.user._id,
        rating,
        review
    });

    if (newReview) {  
        res.status(201).json({
            _id: newReview._id,
            trailSlug: newReview.trailSlug,
            userId: newReview.userId,
            rating: newReview.rating,
            review: newReview.review
        });
    } else {
        res.status(404);
        throw new Error("Error has occured.");
    }
});


//@route    GET /reviews/:slugname
//@desc     Get all reviews for given trail
//@access   Public
const getReviews = asyncHandler(async (req, res) => {
    console.log(req.params.slugname);
    const reviews = await Review.find({trailSlug: req.params.slugname});

    if (reviews) {
        res.json(reviews);
    // } else {
    //     res.status(404);
    //     throw new Error("Reviews not found based on given trail.");
    // }

    }});

export { createReview, getReviews }; 