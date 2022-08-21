const express = require('express');
const app = express();
const { creatTables } = require('./config/DBConfig');
const bodyparser = require('body-parser')
const usersRoutes = require("./src/users/routes/user.routes");
require('dotenv/config');
const port = process.env.PORT || 8080;

app.use(express.json());
creatTables();
app.use(express.static("./public"));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(usersRoutes);

app.listen(port, () => {
    console.log("server run");
})