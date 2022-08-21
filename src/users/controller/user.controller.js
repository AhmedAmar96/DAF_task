const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const User = require("../model/user.model");

//get all users
const getUsersHandelr = async (req, res) => {
    try {
        const data = User.findAll();
        res.json({ message: "success", data });
    } catch (error) {
        res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "error", error: error.message });
    }
};

//Add user
const addUserHandelr = async (req, res) => {
    try {
        const { first_name, middle_name, last_name, email, password, phone_number } = req.body;
        const addData = await User.create(first_name, middle_name, last_name, email, password, phone_number);
        let token = jwt.sign({ _id: addData._id }, process.env.SECRET_KEY);
        res.json({ message: "add user success", addData });

    } catch (error) {
        res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "error ؟..", error: error.message });
    }
}

//sign in
const signInHandelr = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ message: "email not found" });
        } else {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                let token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: "5h" });
                res
                    .status(StatusCodes.OK)
                    .json({ message: "login success", token, data });

            } else {
                res
                    .status(400)
                    .json({ message: "password is not correct" });
            }
        }
    } catch (error) {
        res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "error", error: error.message });
    }
};


module.exports = {
    getCsvFile,
    uploadCsvFile,
    getUsersHandelr,
    addUserHandelr,
    signInHandelr,
}
