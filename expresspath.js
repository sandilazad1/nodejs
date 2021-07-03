const http = require('http');
const express = require('express');
const app = express();
// please use / path in last on the code 
app.use('/add',(req,res,next)=>{
    res.send('request send for add path');
    })

app.use('/',(req,res,next)=>{
res.send('request send for / path');
})

const server = http.createServer(app);
server.listen(3000)