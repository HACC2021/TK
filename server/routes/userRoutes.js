import express from 'express';
import { authenticate, getUserProfile, register } from '../controllers/userController.js';
import { validateToken } from '../middleware/authenticationMiddleware.js';
import User from '../models/User.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.find();

    res.json(users);
});

router.post('/register', register);
router.post('/login', authenticate);
router.route('/profile').post(validateToken, getUserProfile);


export default router;