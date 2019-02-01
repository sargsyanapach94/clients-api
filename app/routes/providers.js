import express from 'express';
const { query, check, validationResult, sanitizeBody } = require( 'express-validator/check' );
import ProvidersHandler from './providersHandler';

const router = express.Router();

/**
 * @swagger
 * /providers:
 *   get:
 *     tags:
 *       - Providers
 *     description: Returns providers
 *     produces:
 *       - application/json
 *     parameters:
 *         - in: query
 *           name: limit
 *           schema:
 *                type: integer
 *           default: 20
 *           description: The numbers of items to return. (def 20)
 *         - in: query
 *           name: skip
 *           schema:
 *                type: integer
 *           default: 0
 *           description: The number of items to skip before starting to collect the result set. (def 0)
 *     responses:
 *       200:
 *         description: A Array of providers
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Providers'
 */

router.get( '/providers', [
    query( 'limit' ).toInt(), query( 'skip' ).toInt()
], function( req, res, next ) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return res.status( 422 ).json( { errors: errors.array() } );
    }

    return next();
}, ProvidersHandler.getList )

/**
 * @swagger
 * /providers:
 *   post:
 *     tags:
 *       - Providers
 *     description: Creates a provider
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: Provider object
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/Providers'
 *     responses:
 *       200:
 *         description: providers
 *         schema:
 *           $ref: '#/definitions/Providers'
 */
router.post( '/providers', ProvidersHandler.save )


/**
* @swagger
* /providers/{id}:
*   put:
*     tags:
*       - Providers
*     description: Creates a provider
*     produces:
*       - application/json
*     parameters:
*       - name: id
*         description: Provider object
*         in:  path
*         required: true
*       - name: email
*         description: Provider object
*         in:  body
*         required: true
*         type: string
*         schema:
*           $ref: '#/definitions/Providers'
*     responses:
*       200:
*         description: provider
*         schema:
*           $ref: '#/definitions/Providers'
*/
router.put( '/providers/:_id', ProvidersHandler.update )

/**
 * @swagger
 * /providers/{id}:
 *   delete:
 *     tags:
 *       - Providers
 *     description: Remove a provider
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Provider object
 *         in:  path
 *         required: true
 *     responses:
 *       200:
 *         description: provider
 */
router.delete( '/providers/:_id', ProvidersHandler.delete )

export default router;
