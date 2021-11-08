import express from 'express';
import { getAllTrails } from '../controllers/trailController.js';

const router = express.Router();

router.get('/', getAllTrails);

export default router;