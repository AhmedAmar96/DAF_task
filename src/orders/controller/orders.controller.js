const { StatusCodes } = require("http-status-codes");
const Order = require("../../orders/model/orders.model");
const crtp = require('crypto');

//get all orders
exports.getOrderHandelr = async (req, res, next) => {
    try {
        const orderData = await Order.findAll(
            {
                attributes: [
                    'id', 'total_price', 'status'
                ],
                include: [{
                    model: Users,
                    attributes: ['id', 'first_name', 'last_name', 'email']
                }]
            }
        );
        res.json({ message: "inner order success", data: orderData });
    } catch (err) {
        res.json({ message: "error in join", data: err });
    }
}

//Add order
exports.addOrderHandelr = async (req, res) => {
    try {
        const { userId } = req.params;
        const { total_price } = req.body;
        const addOrderData = await Order.create(total_price, userId);
        if (addOrderData != 0) {
            res.json({ message: "add order success" });
        } else {
            res.json({ message: "order not add" });
        }
    } catch (error) {
        res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "error", error: error.message });
    }
}


//update status order to accept by id
exports.acceptOrderHanddelr = async (req, res, next) => {
    const { id } = req.params;
    try {
        const status = "Accept"
        const acceptOrderData = await Order.update(
            { status },
            { where: { id } }
        );

        if (acceptOrderData != 0) {
            res.json({ message: "update order success" });
        } else {
            res.json({ message: "order not update" });
        }

    } catch (err) {
        res.json({ message: "error in update", data: err });
    }
}

//update status order to reject by id
exports.rejectOrderHanddelr = async (req, res, next) => {
    const { id } = req.params;
    try {
        const status = "Reject"
        const rejectOrderData = await Order.update(
            { status },
            { where: { id } }
        );

        if (rejectOrderData != 0) {
            res.json({ message: "update order success" });
        } else {
            res.json({ message: "order not update" });
        }

    } catch (err) {
        res.json({ message: "error in update", data: err });
    }
}