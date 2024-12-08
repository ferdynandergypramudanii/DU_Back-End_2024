const express = require('express');
const { getAllUsers, getUserById, addUser, updateUser } = require('../controllers/users');
const router = express.Router();

// get users
router.route('/getAllUser').get(getAllUsers);

router.route('/getUserById/:id').get(getUserById);

router.route('/addUser').post(addUser);

router.route('/updateUser/:id').put(updateUser);

module.exports = router;