
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
            

            //revisamos si hay errores
            // const errors = validationResult(req);
            // if (!errors.isEmpty()) {
            //     return res.status(404).json({ errors: errors.mapped() });
            // }
             //extrae el mail y el password
            const { email, password } = req.body;
            console.log(email);
            console.log(password);


            const user = await modelUser.findOne({ email });
            if (user) {
               return res.status(400).json({ msg: "El usuario ya existe" });
             }
             user = new modelUser(req.body);


            // //hashear el password
            // const salt = await bcrypt.genSalt(10);
            // user.password = await bcrypt.hash(password, salt);

            // //guarda el usuario
            // await user.save();

            // //crear y firmar el jwt
            // const payload = {
            //     user: {
            //     id: user.id,
            //     },
            // };

            // //firmar el token
            // jwt.sign(
            //     payload,
            //     process.env.SECRET,
            //     {
            //     expiresIn: 3600,
            //     },
            //     (error, token) => {
            //     if (error) throw error;

            //     //mensaje de confirmación
            //     res.json({ token });
            //     }
            // );

            //     res.status(200).json({
            //         msg: "Usuario creado exitosamente",
            //     });

            return res.send('Agregando usuario')
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