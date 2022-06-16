
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
            let users = await modelUser.findAll();
            return res.status(200).json({
              total: users.length,
              users,
            });
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
            //return res.send(`Hola usuario ${req.params.id}`)
            const { id } = req.params
            const user = await modelUser.findByPk(id);
            
            if (!user) {
                return res.status(400).json({
                    msg :"Usuario no encontrado"
                });
            }
            return res.status(200).json({
                user,
            });
            
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
            
            // const errors = validationResult(req);
            // if (!errors.isEmpty()) {
            //     return res.status(400).json({ errors: errors.mapped() });
            // }
            
             //extrae el mail y el password
            const { nombre, apellido, email, password } = req.body;

            

            await modelUser.findOne({ email });
            if (email) {
                return res.status(400).json({ msg: "El usuario ya existe" });
              }
              
            const user = await modelUser.create(req.body);


            console.log(user);

            //guarda el usuario
            await user.save();

            res.status(200).json({
                msg: "Usuario creado exitosamente",
              });
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