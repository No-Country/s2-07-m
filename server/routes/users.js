var express = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
/**
 * Obtener todos los usuarios
 */
router.get('/', getUsers);
/**
 * Obtener un usuario
 */
router.get('/:id', getUser);
/**
 * Agregar un usuario
 */
router.post('/', createUser);
/**
 * Actualizar un usuario
 */
router.put('/:id', updateUser);
/**
 * Borrar un usuario
 */
router.delete('/:id', deleteUser);
//router.get('/', detail);

module.exports = router;
