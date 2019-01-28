import express from 'express';
import userRoutes from './clients';

const router = express.Router();

router.use('/clients', userRoutes);

export default router;
