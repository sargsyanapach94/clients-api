import express from 'express';
const { query, check, validationResult, sanitizeBody } = require( 'express-validator/check' );
import ClientsHandler from './clientsHandler';

const router = express.Router();

/**
* @swagger
* /clients:
*   get:
*     tags:
*       - Clients
*     description: Returns client items.
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
*         description: A Array of clients
*         schema:
*           type: array
*           items:
*             $ref: '#/definitions/Clients'
*/

router.get( '/clients', [
    query( 'limit' ).toInt(), query( 'skip' ).toInt()
], function( req, res, next ) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return res.status( 422 ).json( { errors: errors.array() } );
    }

    return next();
}, ClientsHandler.getList )

/**
* @swagger
* /clients:
*   post:
*     tags:
*       - Clients
*     description: Creates a client
*     produces:
*       - application/json
*     parameters:
*       - name: email
*         description: Client object
*         in:  body
*         required: true
*         type: string
*         schema:
*           $ref: '#/definitions/Clients'
*     responses:
*       200:
*         description: clients
*         schema:
*           $ref: '#/definitions/Clients'
*/
router.post( '/clients', ClientsHandler.save )

/**
* @swagger
* /clients/{id}:
*   put:
*     tags:
*       - Clients
*     description: Creates a client
*     produces:
*       - application/json
*     parameters:
*       - name: id
*         description: Client object
*         in:  path
*         required: true
*       - name: email
*         description: Client object
*         in:  body
*         required: true
*         type: string
*         schema:
*           $ref: '#/definitions/Clients'
*     responses:
*       200:
*         description: clients
*         schema:
*           $ref: '#/definitions/Clients'
*/
router.put( '/clients/:_id', ClientsHandler.update )

/**
* @swagger
* /clients/{id}:
*   delete:
*     tags:
*       - Clients
*     description: Remove a client
*     produces:
*       - application/json
*     parameters:
*       - name: id
*         description: Client object
*         in:  path
*         required: true
*     responses:
*       200:
*         description: client
*/
router.delete( '/clients/:_id', ClientsHandler.delete )

export default router;
