const { DataTypes } = require("sequelize/dist");
const { newSequelize } = require("../../../config/DBConfig");
const Users = require("../../users/model/user.model");


//create orders table
const Orders = newSequelize.define(
    "orders",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        total_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "pending",
        }
    },
    {
        timeStamps: true,
    }
);

//relate table posts with table users 
Users.hasMany(Orders);
Orders.belongsTo(Users);

module.exports = Orders;
