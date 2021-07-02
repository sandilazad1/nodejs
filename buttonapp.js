const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;

    if(url === '/')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<form action="/massage" method="POST"><input type="text" name="massage"/> <button type="submit">send</button></form>')
        res.end();
        return res.end();
    }

    res.setHeader('Content-Type','text/html')
    res.write('<html>');
    res.write('<head><title>Title of the document</title></head>');
    res.write('<body>Hello iam sandil azad</body>');
    res.write('</html>');
    return res.end();
})

server.listen(3000);