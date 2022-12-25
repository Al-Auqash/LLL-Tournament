import express from 'express';
import * as authentication from '../controllers/authentication';
import protect from '../middleware/authMiddleware';

const router = express.Router();

const bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/register', jsonParser, authentication.registerUser);
router.post('/login', jsonParser, authentication.loginUser);
router.get('/me', protect, authentication.getMe);

// router.post("/signUp", authentication.checkNotAuthenticated, authentication.register);
// router.post("/signUp", authentication.register);
// router.delete("/signOut", authentication.logout);

export default router;
