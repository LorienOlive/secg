/**
 * Config file
 * @author Lorien Olive
 */

import dotenv from 'dotenv';
dotenv.config();
export default {
    db: process.env.DB,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT,
    allowedOrigins: ['http://localhost:3000', 'http://secg.com', 'http://localhost:4020']
};
