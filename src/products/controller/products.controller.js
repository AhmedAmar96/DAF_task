const { StatusCodes } = require("http-status-codes");
const Product = require("../../products/model/products.model");
const fs = require('fs');
const path = require('path');
const crtp = require('crypto');

exports.getCsvFile = async (req, res) => {
    try {
        res.sendFile(__dirname + '/uploads/prodcuts.csv');
        res.json({ message: "success" });
    } catch (error) {
        res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "error", error: error.message });
    }
};

exports.uploadCsvFile = async (req, res) => {
    try {
        uploadCsv(__dirname + '/uploads/' + req.file.filename);
        res.json({ message: "success" });
    } catch (error) {
        res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "error", error: error.message });
    }
};