const router = require('express').Router();
const isAuthoraized = require('../../../common/middelware/isAuthoraized');
const validateRequest = require('../../../common/middelware/validateRequest');
const { getUsersHandelr, addUserHandelr, signInHandelr } = require('../controller/user.controller');
const { ADD_USER, GET_ALL_USERS, } = require('../endPoints');
const { signUpSchema, signInSchema } = require('../joi/userValidation');

router.get('/users', isAuthoraized(GET_ALL_USERS), getUsersHandelr);
router.post('/addUser', isAuthoraized(ADD_USER), validateRequest(signUpSchema), addUserHandelr);
router.post('/auth', validateRequest(signInSchema), signInHandelr);

module.exports = router;