const express = require('express');
const { verifyToken } = require('../middleware/checkAuth');
const { login, createUser, viewUser } = require('../controllers/userController');
const { createRole, viewRole, updateRole } = require('../controllers/roleController');
const router = express.Router();

router.get('/login', login)
router.post('/hrms/user', createUser)
router.get('/hrms/user',verifyToken,  viewUser)

router.post('/hrms/role', createRole);
router.get('/hrms/role', viewRole);
router.put('/hrms/role', updateRole);

module.exports = router