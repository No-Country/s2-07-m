const { Sequelize } = require("sequelize")


const database = process.env.DB_NAME_MYSQL
const host = process.env.DB_HOST_MYSQL
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const port = process.env.DB_PORT


const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host,
        dialect: "mysql"
    }

)

const dbConnectMySql = async () => {
    try {
        await sequelize.authenticate();
        console.log('++++ CONEXION CORRECTA a la BD ++++');
        
    } catch (error) {
        console.log('MYSQL Error de Conexion', error);
    } 
};

module.exports = { sequelize, dbConnectMySql}