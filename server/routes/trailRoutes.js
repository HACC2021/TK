import express from 'express';
import { getAllTrails, getTrail, newTrail } from '../controllers/trailController.js';

const router = express.Router();

router.get('/all', getAllTrails);
router.get('/:slugname', getTrail);
router.post('/new', newTrail);


export default router;