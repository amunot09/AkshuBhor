const express=require("express");
const app=express();

app.get("/",function(req,resp){
    resp.send("Well come to cloud computing!!!!!!!!!!");
})
app.listen(3000);
console.log("Server is running at port no 3000");