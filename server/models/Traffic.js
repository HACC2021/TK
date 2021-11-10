import mongoose from 'mongoose';

const trafficSchema = mongoose.Schema({
    trailSlug: String,
    traffic: [Number]
});

const Traffic = new mongoose.model('Traffic', trafficSchema);
export default Traffic;
