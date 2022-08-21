const Joi = require("joi");

module.exports = {
    signUpSchema: {
        body: Joi.object().required().keys({
            first_name: Joi.string().required().messages({ "string.empty": "first_name is required" }),
            middle_name: Joi.string().required().messages({ "string.empty": "middle_name is required" }),
            last_name: Joi.string().required().messages({ "string.empty": "last_name is required" }),
            email: Joi.string().required().email().messages({ "string.empty": "email is required" }),
            password: Joi.string().required().messages({ "string.empty": "passwoed is required" }),
            cPassword: Joi.any().valid(Joi.ref('password')).required().messages({ "any.only": "Password must match" }),
            phone: Joi.string().required().regex(/^((\+)[0-9]{1,2})?(01)[0-9]{9}$/)
                .messages({
                    "string.empty": "phone is required",
                    "string.pattern.base": "invalid phone number"
                })
        }) 
    },
    signInSchema: {
        body: Joi.object().required().keys({
            email: Joi.string().required().email().messages({ "any.required": "email is required", }),
            password: Joi.string().required().messages({ "string.empty": "passwoed is required" }),
        }),
    },
}