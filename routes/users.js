const { Router } = require('express');
const { getUser, postUser } = require('../controllers/users');

const router = Router();

router.get('/', getUser);

router.post('/', postUser)

module.exports = router;