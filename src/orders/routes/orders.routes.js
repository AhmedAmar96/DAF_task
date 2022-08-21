const router = require('express').Router();
const isAuthoraized = require('../../../common/middelware/isAuthoraized');
const { GET_ALL_ORDERS, ADD_ORDER, } = require('../endPoints');
const { getOrderHandelr, addOrderHandelr, acceptOrderHanddelr, rejectOrderHanddelr } = require('../controller/orders.controller');

router.get("/order", isAuthoraized(GET_ALL_ORDERS), getOrderHandelr);
router.post("/order", isAuthoraized(ADD_ORDER), addOrderHandelr);
router.patch("/acceptOrder/:_id", isAuthoraized(UPDATE_ORDER), acceptOrderHanddelr);
router.patch("/rejectOrder/:_id", isAuthoraized(UPDATE_ORDER), rejectOrderHanddelr);

module.exports = router;