const { check, validationResult, sanitizeBody } = require( 'express-validator/check' );
import Provider from '../models/provider';

export default {
    /**
	 * Get list of providers
	 * @param req
	 * @param res
	 * @param next
	 */
    getList( req, res, next ) {
        Provider.find( {} ).limit( req.query.limit || 20 ).skip( req.query.skip || 0 ).exec( ( err, data ) => {
            if ( err ) {
                return res.status( 400 ).send( err );
            }

            return res.json( data );
        } );
    },
    /**
	 * Create new provider
	 * @param req
	 * @param res
	 * @param next
	 */
    save( req, res, next ) {
        Provider.create( req.body, ( err, data ) => {
            if ( err ) {
                return res.status( 400 ).send( err );
            }

            return res.json( data );
        } );
    },
    /**
	 * Update new provider
	 * @param req
	 * @param res
	 * @param next
	 */
    update( req, res, next ) {
        delete req.body._id;
        req.body.updated = new Date();

        Provider.findByIdAndUpdate( req.params._id, {
            $set: req.body
        }, {
            new: true
        }, ( err, data ) => {
            if ( err ) {
                return res.status( 400 ).send( err );
            }

            return res.json( data );
        } );
    },
    /**
	 * Remove provider object by _id
	 * @param req
	 * @param res
	 * @param next
	 */
    delete( req, res, next ) {

        Provider.deleteOne( {
            _id: req.params._id
        }, ( err, data ) => {
            if ( err ) {
                return res.status( 400 ).send( err );
            }

            return res.json( data );
        } );
    }
};
