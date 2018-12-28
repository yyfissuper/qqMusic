$(function(){
    $(`<link rel="stylesheet" href="css/header.css"></link>`).appendTo("head");
   $.ajax({
       url:"header.html",
       type:"get",
       success: function(res) {
           //console.log(res);
           $(res).replaceAll("#header")
       }
   })

   var vm=new Vue({
       el:"#header",
       data:{
           keywords:"",
       },
       methods:{
           search(){
               console.log("关键词是:"+this.keywords)
           }
       }
   })

})