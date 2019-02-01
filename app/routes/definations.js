/**
 * @swagger
 * definition:
 *   Clients:
 *     properties:
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       phone:
 *         type: string
 *       providers:
 *         type:  array
 *         items:
 *             $ref: '#/definitions/Providers'
 *       _id:
 *         type: string
 *       updated:
 *         type: date
 *       created:
 *         type: date
 *   Providers:
 *     properties:
 *       name:
 *         type: string
 *       _id:
 *         type: string
 *       updated:
 *         type: Date
 *       created:
 *         type: Date
 */
