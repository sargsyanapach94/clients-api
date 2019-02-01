const { check, validationResult, sanitizeBody  } = require('express-validator/check');
import Client from '../models/client';

export default {
	/**
	 * Get list of clients
	 * @param req
	 * @param res
	 * @param next
	 */
	getList(req, res, next) {
		Client.find({})
            .limit(req.query.limit || 20)
            .skip(req.query.skip || 0)
			.populate('providers')
			.exec((err, users) => {
				if(err) {
					console.log(err);
					return res.status(400).json(err);
				}
				return res.json(users);
			});
	},
	/**
	 * Create new client
	 * @param req
	 * @param res
	 * @param next
	 */
	save(req, res, next) {

		Client.create(req.body, (err, users) => {
			if(err) {
				return res.status(400).send(err);
			}
			return res.json(users);
		});
	},
	/**
	 * Update new client
	 * @param req
	 * @param res
	 * @param next
	 */
	update(req, res, next) {
		delete req.body._id;
		req.body.updated = new Date();

		Client.findByIdAndUpdate(req.params._id, {
			$set: req.body
		}, {
			new: true
		}, (err, data) => {
			if(err) {
				return res.status(400).send(err);
			}

			return res.json(data);
		});
	},
	/**
	 * Remove client object by _id
	 * @param req
	 * @param res
	 * @param next
	 */
	delete(req, res, next) {
		Client.deleteOne({
			_id: req.params._id
		}, (err, data) => {
			if(err) {
				return res.status(400).send(err);
			}
			return res.json(data);
		});
	}
};
