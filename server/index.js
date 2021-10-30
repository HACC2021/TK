import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import usersRoutes from './routes/users.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Database
mongoose.connect('mongodb://localhost:27017', {
    user: "test",
    pass: "password",
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
	console.log("Connected to MongoDB database...");
});

app.listen(3100, () => console.log("Server is running"));

app.use('/users', usersRoutes);

app.get( '/api',(req, res) => {
    res.send("Hello")
});