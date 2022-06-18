
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

            

            let emailBD = await modelUser.findOne({ email });
            if (emailBD) {
                return res.status(400).json({ msg: "El email ya existe" });
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
            //return res.send(`Actualizar un usuario ${req.params.id}`)
            const user = await modelUser.findByPk(req.params.id);
            const bodyUser = req.body
            const userUpdate = await user.save();
            // return res.send("movies update")
            return res.status(200).json({
              userUpdate
            });
            
        } catch (error) {
            res.status(400).send('No se puede acceder a usuarios')
            
        }
    },
    deleteUser: async (req, res) => {

        const id = req.params.id;
        try {
            const user = await modelUser.findByPk(id);
            console.log('====================================');
            console.log("user en delete ",user);
            console.log('====================================');
            if (!user) 
                return res.status(400).json({msg: 'Id no encotrada'});

            user.destroy()
            res.status(200).send("¡Usuario eliminado con un exito rotundo!");
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
            res.status(400).send('No se puede acceder a usuarios')
            
        }
    },

    login: async (req, res, next) => {
        // console.log('en el logi iin');
        // res.status(200).json({msg: 'en el login'})
        // revisamos si hay errores
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //   return res.status(400).json({ errors: errors.array() });
        // }
    
        //extrae el mail y el password
        const { email, password } = req.body;
        // console.log(req.body);
        // console.log(email);
        // console.log(password);
        //const   body  = req.body.email;
    
        try {
         //   console.log("body.email: ",body);
           //return res.status(200).json({body})
          // const {email, password} = req.body;
          const user = await modelUser.findOne({where: {email}})
          
        //   console.log('====================================');
        //   console.log(user);
        //   console.log('====================================');
          //console.log("dataValues!: ", user.dataValues.email);
          //console.log("emailCheck: ", user);
        //   console.log("typeof: ", typeof(user) );

          if (!user)
            return res.status(400).json({ error: "Usuario no encontrado" });
    
          const validPassword = user.dataValues.password;
        //   console.log("validPasse: ",validPassword);
        //   console.log('====================================');
        //   console.log({password});
        //   console.log('====================================');
        //   console.log("typeof: ", typeof(validPassword) );

          if (validPassword != password)
            return res.status(400).json({ error: "contraseña no válida" });
        } catch (error) {
            console.log(error);
            res.status(404).send("Credenciales inválidas");
          }
        res.status(200).json({msg: 'exito'})

        },
};

module.exports =  userController;