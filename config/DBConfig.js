const Sequelize = require('Sequelize');

const newSequelize = new Sequelize(process.env.DB_NAME, process.env.USER_NAME_DB, process.env.PASS_DB, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
});

newSequelize.connect(function (err) {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to database.');
})

const creatTables = () => {
    newSequelize.sync({ alter: true }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(`error ====> ${err}`);
    })
};

module.exports = {
    newSequelize,
    creatTables
}