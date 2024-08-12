const express = require("express");
const app = express();
const fs = require("fs"); //this fs module help us to read the file
// fs.readFile("middleware.js","utf-8",(err,data)=>{
// console.log(data);

// })//first parameter is the filename second parameter is the encoder
//and the third one it will take is the call back funtion

fs.writeFile("calc.js", 'console.log("this is the calc file ")', (err) => {
  
 return console.log("Data saved successfully.");
});

const middlewareFunction = require("./middleware");

app.listen(8080, (req, res) => {
  console.log("app is listening on the port 8080");
});

app.use((req, res, next) => {
  console.log("i will not going to do anything in this file");
  req.userShubham = "shubham ranjane";
  res.sendResponse = "middleware 1 is sending the response";
  next();
});
app.use((req, res, next) => {
  console.log(req.userShubham);
  return next();
});
//it is is funtion which we are using to check whether the user have correct token or
app.use("/api", (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    return next();
  }
  res.send("wrong token");
});

app.get("/api", (req, res) => {
  console.log(`am in the get request and am `, req.userShubham);
  res.send(`you are allow to see the data,${req.userShubham}`);
});
