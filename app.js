const express=require("express");
const bodyParser=require("body-parser");
const user=require("./router/user")
var app=express();
app.listen(3000,()=>{console.log("服务器创建成功")});
//1.托管静态资源
app.use(express.static(__dirname+"/public"));
//2.配置bordParser
app.use(bodyParser.urlencoded({
    extended:false
}));
//3.挂载路由
app.use('/user',user);


