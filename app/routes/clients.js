import express from 'express';
import Client from '../models/client';

const router = express.Router();

/**
 * @swagger
 * /api/clients:
 *   get:
 *     tags:
 *       - Clients
 *     description: Returns clients
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A Array of users
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Clients'
 */

router.route('/')
	.get((req, res) => {
		console.log('aaaaaaaaa');
		Client.find({}, (err, users) => {
			if(err)
				res.send(err)
			res.json(users);
		});
	})

export default router;
