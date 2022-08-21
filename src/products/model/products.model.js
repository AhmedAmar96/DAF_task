const { DataTypes } = require("sequelize/dist");
const { newSequelize } = require("../../../config/DBConfig");

//create product table
const Products = newSequelize.define(
    "products",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        timeStamps: true,
    }
);

module.exports = Products;
