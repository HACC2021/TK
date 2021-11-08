import mongoose from 'mongoose';

const ratingSchema = mongoose.Schema({
    trail: Number,
    user: Number,
    rating: Number,
    review: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Rating = new mongoose.model('Rating', ratingSchema);
export default Rating;