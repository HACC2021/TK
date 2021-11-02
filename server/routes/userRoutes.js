import express from 'express';
import { registerUser } from '../controllers/userController.js';
import User from '../models/User.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.find();

    res.json(users);
});

router.post('/new', registerUser);

export default router;