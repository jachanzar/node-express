const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express(); //returns express server app available through this variable

/*middleware; configures morgan to use morgan function with arugment of dev
this configures morgan to log using dev version which prints additional
info to the screen */

app.use(morgan('dev'));

/* _ _ is a special varaible in node that refers to the absolute path of the
current directory its in. This single line is the only line we need for
express to serve static files*/
app.use(express.static(__dirname + '/public'));

/*setup server to return same response for any request...
We do this with the use method...
which takes a callback function (aka middleware function in express)...
has access to 3 parameters: req, res, function; we are leaving out function here*/

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an express server</h1></body></html>')
})

//set up app to listen
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})





