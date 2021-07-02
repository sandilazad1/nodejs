const http = require('http')

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.write('<html>');
    res.write('<head><title>Title of the document</title></head>');
    res.write('<body>Hello iam sandil azad</body>');
    res.write('</html>');
    res.end();

});

server.listen(3000);