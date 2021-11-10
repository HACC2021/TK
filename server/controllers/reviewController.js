import asyncHandler from "express-async-handler";
import Review from '../models/Review.js';

//@route    POST /review/new
//@desc     Create a new review of a given trail
//@access   Private
const createReview = asyncHandler(async (req, res) => {
    const {trailSlug, rating, review} = req.body;

    const review = await Review.create({
        trailSlug,
        userId: req.user._id,
        rating,
        review
    });

    if (review) {  
        res.status(201).json({
            _id: review._id,
            trailSlug: review.trailSlug,
            userId: review.userId,
            rating: review.rating,
            review: review.review
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
    const reviews = await Review.findMany(req.params.slugname);

    if (reviews) {
        res.json(reviews);
    } else {
        res.status(404);
        throw new Error("Reviews not found based on given trail.");
    }

});

export { createReview, getReviews }; 