import mongoose from 'mongoose';
import { addListener } from 'nodemon';

const trailSchema = mongoose.Schema({
    name: String,                  //name of trail
    description: String,            //description of trail
    tags: [String],                 //tags: difficulty, kid-friendly, pet-friendly, etc
    images: [String],               //images of trail
    rating: {                       //average rating
        type: Number,
        default: 0
    },
    coordinates: 
    createdAt: {                
        type: Date,
        default: new Date()
    }
});

const Trail = new mongoose.model('Trail', trailSchema);
export default Trail;