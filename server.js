const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter= require('./routes/promotionRouter');
const partnerRouter= require('./routes/partnerRouter')


const hostname = 'localhost';
const port = 3000;

const app = express(); //returns express server app available through this variable

/*middleware; configures morgan to use morgan function with arugment of dev
this configures morgan to log using dev version which prints additional
info to the screen */

app.use(morgan('dev'));

/* When the server reserves requests with JSON data, this function will 
handle parsing the JSON data into JS properties so we can use that data 
in JS */
app.use(express.json());

/*We specify the path here which is why we dont need to use the path in
campsiteRouter.js*/
app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionRouter);
app.use('/partners', partnerRouter);


//Rest API endpoints; used to set default properties on response objects


/*COMMENTED OUT. Below we are adding a route parameter; /:campsiteId
This allows us to store whatever the client sends as a route parameter
called campsiteId. Now, if we get a get request with a specific website, 
I want to respond with 'I will send details of this site, 
with the campsiteId requested...*/

// app.get('/campsites/:campsiteId', (req, res) => {
//     res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
// });

// app.post('/campsites/:campsiteId', (req, res) => {
//     res.statusCode = 403;
//     res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
// });

// app.put('/campsites/:campsiteId', (req, res) => {
//     res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
//     res.end(`Will update the campsite: ${req.body.name}
//         with description: ${req.body.description}`);
// });

// app.delete('/campsites/:campsiteId', (req, res) => {
//     res.end(`Deleting campsite: ${req.params.campsiteId}`);
// });


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
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

//set up app to listen
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})





