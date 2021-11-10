import express from 'express';
import { getAllTrails, newTrail } from '../controllers/trailController.js';

const router = express.Router();

router.get('/all', getAllTrails);
router.post('/new', newTrail);

export default router;