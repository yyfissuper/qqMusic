new Vue({
    el:"#main",
    data:{
        res:[
            {paimin:1,i:"260",music:"沙漠骆驼",name:"罗罗与展展",time:"04:12",img:"img/icon_rank.png"},
            {paimin:2,i:"210",music:"沙漠骆驼",name:"罗罗与展展",time:"05:12",img:"img/icon_rank.png"},
            {paimin:3,i:"200",music:"沙漠骆驼",name:"罗罗与展展",time:"04:12",img:"img/icon_rank.png"},
            {paimin:4,i:"200",music:"沙漠骆驼",name:"罗罗与展展",time:"04:12",img:"img/icon_rank.png"},
            {paimin:5,i:"200",music:"沙漠骆驼",name:"罗罗与展展",time:"04:12",img:"img/icon_rank.png"},
            {paimin:6,i:"200",music:"沙漠骆驼",name:"罗罗与展展",time:"04:12",img:"img/icon_rank.png"},
            {paimin:7,i:"200",music:"沙漠骆驼",name:"罗罗与展展",time:"04:12",img:"img/icon_rank.png"},
            {paimin:8,i:"200",music:"沙漠骆驼",name:"罗罗与展展",time:"04:12",img:"img/icon_rank.png"},
            {paimin:9,i:"200",music:"沙漠骆驼",name:"罗罗与展展",time:"04:12",img:"img/icon_rank.png"},
           
        ]
    }
})





$("div>div:first-child>ul:first-child>li:not(:first-child)").click(function(e){
e.preventDefault();
var $li=$(this); 
$li.addClass("bgC").siblings().removeClass("bgC"); 
$li.children().addClass("fontC");
$li.siblings().children().removeClass("fontC");
})
