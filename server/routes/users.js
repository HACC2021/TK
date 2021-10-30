import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.find();

    res.json(users);
});

router.post('/new', async (req, res) => {
	const newUser = new User(req.body);
	
	const savedUser = await newUser.save();

	res.json(savedUser);
});

export default router;