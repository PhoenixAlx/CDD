var quotes=require("./quotes.json").quotes;

module.exports=function(){
return quotes[Math.floor(Math.random() * quotes.length)];
}
