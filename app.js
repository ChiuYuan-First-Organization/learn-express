const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const adminData = require("./routes/admin");
const shopRoutes = require('./routes/shop');

const app = express();

// tell node to use pug as templating engine
app.set('view engine', 'pug');
// set the value of 'views' to the folder diection which contains the templates
app.set('views', 'views');

// to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));

// to serve the CSS file
app.use(express.static(path.join(__dirname, 'public')));

// Page routes
app.use('/admin', adminData.routes);
app.use(shopRoutes);

// Error page
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.render('404');
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
