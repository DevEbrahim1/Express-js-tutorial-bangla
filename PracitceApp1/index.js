var express=require('express');

app=express();

app.get("/",function(req,res){
    res.send("Hello Express Js");
});
app.listen(8080,function(){
    console.log('Server Run Success')

})