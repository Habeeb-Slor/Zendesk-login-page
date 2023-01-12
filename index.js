const express = require("express");
const app = express();

app.set("view engine","ejs");

app.get("/home", (req,res)=>{
  const user = {
    name:"Habib",
    school:"Lautech",
    age:"19"
  }
  res.render("home", {user});
})

app.get("/contact", (req, res)=>{
  res.render("contact");
})

app.get("/about", (req, res)=>{
  res.render("about");
})

app.listen(3200, ()=>{
  console.log('server is running')
})