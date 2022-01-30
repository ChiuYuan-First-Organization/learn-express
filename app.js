const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(shopRoutes);

app.use(adminRoutes);


// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
