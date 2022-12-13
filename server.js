const express = require('express');
const hostname = 'localhost';
const port = 3000;

const app = express(); //returns express server app available through this variable

/*setup server to return same response for any request...
We do this with the use method...
which takes a callback function (aka middleware function in express)...
has access to 3 parameters: req, res, function; we are leaving out function here*/

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an express server</h1></body></html>')
})

//set up app to listen
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})





