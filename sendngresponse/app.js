const http= require('http');
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<HTML>');
    res.write('<head><title>My First Page Response</title></head>');
    res.write('<body>Hello from my first node page</body>');
    res.write('</HTML>');
  
})
server.listen(3000);