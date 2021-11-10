import express from 'express';
import { validateToken } from '../middleware/authenticationMiddleware.js';
import { createReview, getReviews, getAllReviews } from '../controllers/reviewController.js';

const router = express.Router();

router.get('/all', getAllReviews);
router.get('/:slugname', getReviews);
router.route('/new').post(validateToken, createReview);

export default router;