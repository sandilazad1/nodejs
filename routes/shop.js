const express = require('express');
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('request send for / path');
})


module.exports = router;