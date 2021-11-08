import mongoose, { Schema } from 'mongoose';

const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

const trailSchema = mongoose.Schema({
    name: String,                  //name of trail
    description: String,            //description of trail
    tags: [String],                 //tags: difficulty, kid-friendly, pet-friendly, etc
    images: [String],               //images of trail
    rating: {                       //average rating
        type: Number,
        default: 0
    },
    coordinates: GeoSchema,
    createdAt: {                
        type: Date,
        default: new Date()
    }
});

const Trail = new mongoose.model('Trail', trailSchema);
export default Trail;