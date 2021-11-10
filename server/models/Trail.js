import mongoose from 'mongoose';


const trailSchema = mongoose.Schema({
    name: String,                  //name of trail
    slugName: String,               //slug name for URL and searching
    description: String,            //description of trail
    tags: [String],                 //tags: difficulty, kid-friendly, pet-friendly, etc
    images: [String],               //images of trail
    rating: {                       //average rating
        type: Number,
        default: 0
    },
    coordinates: [Number],
    createdAt: {                
        type: Date,
        default: new Date()
    }
});

const Trail = new mongoose.model('Trail', trailSchema);
export default Trail;