const { log } = require("console");
const http = require("http");

const server =http.createServer((req , res) => {
    res.write(" <h1>WELCOME TO MY SERVER !!! </h1>");
    res.end();

});

server.listen(12000 ,(err) => {
    if(err)
    {
        console.log("server is not started .!!!!!!" , err);
        return false;
    }

    console.log("server is started .!!!!!!");
    
})