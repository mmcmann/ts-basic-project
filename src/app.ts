// /// <reference path="../typings/tsd.d.ts" />
// import http = require('http');

// var server: http.Server = http.createServer((request: http.ServerRequest, response: http.ServerResponse) => {  
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write('Hello World from our TypeScript app');
//     response.end();
// });
// var port = process.env.port || 1337;  
// server.listen(port);  
// console.log('Running server at http://localhost:' + port);

// pop has the full function type
var pop = function(str: string): void {
    console.log(str)
}

// The parameters 'x' and 'y' have the type number
var myAdd: (baseValue:number, increment:number)=>number = 
    function(x, y) { return x+y; };

var ping: number;

class ToDo {
    root: HTMLObjectElement;
    private me: string;
    constructor(root: HTMLObjectElement) {
        this.root = root;
        this.me = "For Real Tho?";
    }
}