const express = require("express");
const path = require("path");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  // console.log("products:", adminData.products);
  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: "Shop", path: '/' });
});

module.exports = router;
