import express from 'express';
import userRoutes from './clients';
import providersRoutes from './providers';

const router = express.Router();

router.use( '/', userRoutes ).use( '/', providersRoutes );

export default router;
