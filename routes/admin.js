const express = require('express');
const router = express.Router()

router.get('/add-product', (req, res, next) => {
    res.send(`<form action="/product" method="POST"><label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"><br><br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"><br><br>
    <input type="submit" value="Submit">
    </form>`);
})



router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;