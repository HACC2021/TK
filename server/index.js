import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import usersRoutes from './routes/users.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.API_PORT;
console.log("Port is: " + PORT);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Database
mongoose.connect(`mongodb://${process.env.MONGO_ROOT_USERNAME}:${process.env.MONGO_ROOT_PASSWORD}@mongodb`, {
    // user: process.env.MONGO_ROOT_USERNAME,
    // pass: process.env.MONGO_ROOT_PASSWORD,
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
	console.log("Connected to MongoDB database...");
});

app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on ${PORT}`));

app.use('/users', usersRoutes);

app.get( '/api',(req, res) => {
    res.send("Hello")
});