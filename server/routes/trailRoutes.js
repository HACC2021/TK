import express from 'express';
import { getAllTrails, getTrail, newTrail, getTraffic } from '../controllers/trailController.js';

const router = express.Router();

router.get('/all', getAllTrails);
router.get('/:slugname', getTrail);
router.get('/traffic/:slugname', getTraffic);
router.post('/new', newTrail);


export default router;