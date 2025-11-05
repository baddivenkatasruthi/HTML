const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Workflow of JavaScript in Node.js:\n\n" +
            "1. Client sends a request\n" +
            "2. Server receives the request\n" +
            "3. JavaScript code is executed by Node.js\n" +
            "4. Server sends a response back to the client\n");
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});
