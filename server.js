const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const esiMiddleware = require('nodesi').middleware;

const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'build'));
app.engine('html', require('ejs').renderFile);

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// inject the middleware before your route handlers
app.use(esiMiddleware());

app.use(express.static(path.join(__dirname, 'build')));
/* app.use('/nl/nl', express.static(path.resolve(__dirname, 'build'))); */
// app.use("/nl/nl", express.static(path.join(__dirname, "build")));
app.use(
  '/nl/nl/customer-service/support/',
  express.static(path.join(__dirname, 'build')),
);

app.get('*', cors(corsOptions), (req, res) => {
  // res.sendFile(path.join(__dirname, "build", "index.html"));
  res.render('index.html');
});

app.listen(port, () => console.log(`App dev server running on port ${port}`));
