const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const adminPath = require('./routes/admin.js')
const shopPath = require('./routes/shop.js')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminPath);
app.use(shopPath);





app.listen(3000);