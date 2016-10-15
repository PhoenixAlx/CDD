var quotes=require("./quotes.json").quotes;

var quote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(quote);
