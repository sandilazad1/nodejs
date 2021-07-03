const http = require('http');
const express = require('express');
const app = express();
app.use((req,res,next)=>{
    console.log("hello am response 1");
    next();
})
app.use((req,res,next)=>{
    console.log("hello am response 2");
    res.send('<h1>Hello am sandil azad</h1>')
})
const server = http.createServer(app);
server.listen(3000);