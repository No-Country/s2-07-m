
const modelUser = require('../database/models/usuario')
//const sequelize = require('sequelize')
const { Sequelize, Model, DataTypes } = require('sequelize');

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

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    createUser: async (req, res) => {
        try {
            

            
             //extrae el mail y el password
            const { nombre, apellido, email, password } = req.body;
            console.log(email);
            console.log(password);

            

            const user = await modelUser.findOne({ email });
            if (user) {
               return res.status(400).json({ msg: "El usuario ya existe" });
             }
             user = new modelUser(req.body);


            console.log(user);

            //guarda el usuario
            await user.save();

            
            //return res.send('Agregando usuario')
        } catch (error) {
            res.status(400).send(`No se puede acceder a usuarios: ${error}`)
            
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