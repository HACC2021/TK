import mongoose from 'mongoose';

const trailSchema = mongoose.Schema({
    title: String,                  //name of trail
    description: String,            //description of trail
    tags: [String],                 //tags: difficulty, kid-friendly, pet-friendly, etc
    images: [String],               //images of trail
    rating: {                       //average rating
        type: Number,
        default: 0
    },
    createdAt: {                
        type: Date,
        default: new Date()
    }
});

const Trail = new mongoose.model('Trail', trailSchema);
export default Trail;