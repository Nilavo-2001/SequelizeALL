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
    getUser,
    all,
    safeCreate } = require('../controllers/queries');

router.post('/createUser', create);
router.post('/createUserSafe', safeCreate);
router.post('/createUserWithAttributes', createWithAttributes);
router.get('/showFirstName', showFirst);
router.get('/showCount', showCount);
router.get('/excludeLastName', excludeLastName);
router.get('/firstTwo', firstTwo);
router.get('/order', orderByAge);
router.get('/getUser', getUser);
router.get('/all', all);
module.exports = router;
