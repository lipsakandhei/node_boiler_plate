const express = require('express');
const router = express.Router();

const { getUsers, createUser, deleteUser } = require('../controllers/userController');

router.post('/', createUser);
router.get('/', getUsers);
router.delete('/:userId', deleteUser);


module.exports = router;
