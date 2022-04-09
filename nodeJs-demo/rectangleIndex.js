

const rect = require("./rectangle.js");
const http = require("http");
const fs = require("fs");

// create server
const server = http.createServer((req, res) =>{
// for request the server
    // console.log("req",req);
    // console.log("req.url",req.url);
    // console.log("req.method",req.method);
    // console.log("req.headers",req.headers);

    // response by it's URL
    const url = req.url;
    const method = req.method;
    if(url === "/"){
        // res.setHeader('Content-Type','text/html');
        // res.write("<html>");
        // res.write("<head><title>enter message</title></head>");
        // res.write("<body><form action='/message' method='POST'><input type='text' name='message'></input><button type='submit'>Send</button></form></body>");
        // res.write("</html>"); 

        // res.setHeader('Content-Type','application/json');
        // res.setHeader('X-Powered-By','Node.js');

        res.writeHead(200,{'Content-Type':'application/json','X-Powered-By':'Node.js'})

        return res.end(JSON.stringify({
            success:true,
            data:[{id:1,text:"Todo one"},{id:2, text:"Todo two"},{id:3,text:"Todo three"}]
        }));    
    }
    if(url === "/message" && method === 'POST'){
       fs.writeFileSync('message.txt','DUMMY');
       res.statusCode = 302;
       res.setHeader('Location','/');
       return res.end();    
    }
// respose the server
    res.setHeader('Content-Type','text/html');
    res.write("<html>");
    res.write("<head><title>my first page</title></head>");
    res.write("<body><h1>Hello from node.js!</h1></body>");
    res.write("</html>");
 
// we must have to end the response
    res.end();
//  for exit from all the req it means that stop the project
// process.exit();
});

server.listen(3000);

const solveRect = (l,b) =>{
    console.log("solving for rect with l = " + l + "and b =" + b);
    if(l <= 0 || b<= 0){
        console.log("dimenstion should be greater then zero: l = " + l +" b ="+ b);
    }else{
        console.log("area of rect is" + rect.area(l,b));
        
        console.log("perimeter of rect is" + rect.perimeter(l,b));

    }

}
solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);