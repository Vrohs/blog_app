const express = require('express')
const router = express.Router()



router.get("/", (req, res) => {
    res.send("visit /blog for the blog page");
  });
  
  router.get("/blog", (req, res) => {
    res.render("homepage");
  });
  
  router.get("/login", (req, res) => {
    res.render("login");
  });
  
  router.get("/signup", (req, res) => {
    res.render("signup");
  });


  module.exports = router;