import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    trailSlug: String,
    userId: String,
    rating: Number,
    review: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Review = new mongoose.model('Rating', reviewSchema);
export default Review;