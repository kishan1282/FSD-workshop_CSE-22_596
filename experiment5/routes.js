const http = require("http");

const server = http.createServer((req, res) => {

    if (req.method === "GET") {
        res.end("GET request received");
    }

    else if (req.method === "POST") {
        res.end("POST request received");
    }

    else if (req.method === "PUT") {
        res.end("PUT request received");
    }

    else if (req.method === "DELETE") {
        res.end("DELETE request received");
    }

    else {
        res.statusCode = 404;
        res.end("Route not found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});