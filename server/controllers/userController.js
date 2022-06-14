
const modelUser = require('../database/models/usuario')

const userController = {
    /**
     * Obtener lista de usuarios
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    getUsers: async (req, res) => {
        try {
            //const data = modelUser.finn
            return res.send('Todos los usuarios')
            
        } catch (error) {
            res.status(400).send('No se puede acceder a usuarios')
            
        }
    },
    /**
     * Otener un usuario
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    getUser: async (req, res) => {
        try {
            return res.send(`Hola usuario ${req.params.id}`)
            
        } catch (error) {
            res.status(400).send('No se puede acceder al usuario')
            
        }
    },
    createUser: async (req, res) => {
        try {
            return res.send('Agragando usuario')
            
        } catch (error) {
            res.status(400).send('No se puede acceder a usuarios')
            
        }
    },
    updateUser: async (req, res) => {
        try {
            return res.send(`Actualizar un usuario ${req.params.id}`)
            
        } catch (error) {
            res.status(400).send('No se puede acceder a usuarios')
            
        }
    },
    deleteUser: async (req, res) => {
        try {
            return res.send('Borrar un usario')
            
        } catch (error) {
            res.status(400).send('No se puede acceder a usuarios')
            
        }
    }
};

module.exports = { getUsers, getUser, postUser, putUser, deleteUser } = userController;