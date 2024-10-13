var express=require('express');

app=express();

app.get("/",function(req,res){
    res.send("Home Page");
});
app.post('/about', function(req,res){
    res.send("About Page")

});
app.put('/contact',function(req,res){
    res.send("Contact page")
});
app.delete("/terms",function(req,res){
    res.send("Terms-page")
});
app.listen(8080,function(){
    console.log('Server Run Success')

})