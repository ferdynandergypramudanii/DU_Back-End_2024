const express = require('express');
const { getAllUsers, getUserById, addUser, updateUser, deleteUser } = require('../controllers/users');
const router = express.Router();

// get users
router.route('/getAllUser').get(getAllUsers);

router.route('/getUserById/:id').get(getUserById);

router.route('/addUser').post(addUser);

router.route('/updateUser/:id').put(updateUser);

router.route('/deleteUser/:id').delete(deleteUser);

module.exports = router;