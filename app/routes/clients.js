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
*     description: Creates new client item
*     produces:
*       - application/json
*     parameters:
*       - name: Request payload
*         description: Client object
*         in:  body
*         required: true
*         type: Object
*         schema:
*            properties:
*              name:
*                type: string
*              email:
*                type: string
*              phone:
*                type: string
*              providers:
*                type:  array
*                items:
*                    type: string
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
*     description: Updates a client item
*     produces:
*       - application/json
*     parameters:
*       - name: id
*         description: Client _id
*         in:  path
*         type: String
*         required: true
*       - name: Request payload
*         description: Client object
*         in:  body
*         required: true
*         type: Object
*         schema:
*            properties:
*              name:
*                type: string
*              email:
*                type: string
*              phone:
*                type: string
*              providers:
*                type:  array
*                items:
*                    type: string
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
*     description: Removes a client
*     produces:
*       - application/json
*     parameters:
*       - name: id
*         description: Client _id
*         in:  path
*         required: true
*     responses:
*       200:
*         description: client
*/
router.delete( '/clients/:_id', ClientsHandler.delete )

export default router;
