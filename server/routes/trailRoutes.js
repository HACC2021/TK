import express from 'express';
import { getAllTrails, newTrail } from '../controllers/trailController.js';

const router = express.Router();

router.get('/', getAllTrails);
router.post('/new', newTrail);

export default router;