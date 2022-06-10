
const dbMysql = require('../database/models/usuario')

const userController = {
    detail: async (req, res) => {
        try {
            return res.send('Todos los usuarios')
            
        } catch (error) {
            res.status(400).send('No se puede acceder a usuarios')
            
        }
    }
};

module.exports = {detail} = userController;