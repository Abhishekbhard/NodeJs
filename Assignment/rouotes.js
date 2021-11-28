const requestHandler=((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.setHeader('Content-Type','text/html');

        res.write('<html>');
        res.write('<head><title>Hello There</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button>Send</button></form></body>');
        res.write('<html>');
        res.end();
    }if(url==='/users'){
        res.setHeader('Content-Type','text/html');

        res.write('<html>');
        res.write('<head><title>Hello There</title></head>');
        res.write('<body><ul><li>Abhi</li><li>Abhi</li><li>Abhi</li></ul></body>');
        res.write('<html>');
        res.end();
    }if(url==='/create-user'){
        const data=[];
        req.on('data',(chunk)=>{
            data.push(chunk);

        })
        req.on('end',()=>{
          const  parseData=Buffer.concat(data).toString();
          console.log(parseData.split('=')[1])
        });
        res.statusCode=308;
        res.setHeader('Location','/');
        res.end();
    }
})

module.exports=requestHandler;