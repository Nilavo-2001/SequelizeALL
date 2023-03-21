const express = require('express');
const router = express.Router();
const {
    createWithAttributes,
    create,
    showFirst,
    showCount,
    excludeLastName,
    firstTwo,
    orderByAge,
    getUser } = require('../controllers/queries');

router.post('/createUser', create);
router.post('/createUserWithAttributes', createWithAttributes);
router.get('/showFirstName', showFirst);
router.get('/showCount', showCount);
router.get('/excludeLastName', excludeLastName);
router.get('/firstTwo', firstTwo);
router.get('/order', orderByAge);
router.get('/getUser', getUser);
module.exports = router;
