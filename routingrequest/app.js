const http=require('http');
const fs =require('fs');
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('<html>')
        return res.end();
    }
    if(url==='/message'&& method==='POST'){
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<HTML>');
    res.write('<head><title>My First Page Response</title></head>');
    res.write('<body>Hello from my first node page</body>');
    res.write('</HTML>');
})
server.listen(3000);