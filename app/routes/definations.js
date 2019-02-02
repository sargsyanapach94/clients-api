/**
 * @swagger
 * definition:
 *   Clients:
 *     properties:
 *       _id:
 *         # Returned by GET, not used in POST/PUT/PATCH
 *         type: string
 *         readOnly: true
 *       name:
 *         type: string
 *         required: true
 *       email:
 *         type: string
 *         required: true
 *       phone:
 *         type: string
 *       providers:
 *         type:  array
 *         items:
 *             $ref: '#/definitions/Providers'
 *       updated:
 *         type: date
 *       created:
 *         type: date
 *   Providers:
 *     properties:
 *       _id:
 *         # Returned by GET, not used in POST/PUT/PATCH
 *         type: string
 *         readOnly: true
 *       name:
 *         type: string
 *         required: true
 *       updated:
 *         type: date
 *       created:
 *         type: date
 */
