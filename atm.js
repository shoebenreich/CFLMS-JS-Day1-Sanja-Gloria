let sum = 690;
let hundred = 100;
let counterHundred = 0;
let fifty = 50;
let counterFifty = 0;
let twenty = 20;
let counterTwenty = 0;
let ten = 10;
let counterTen = 0;


counterHundred = Math.floor(sum/hundred)

counterFifty = Math.floor((sum%hundred)/fifty)

counterTwenty = Math.floor((sum%fifty)/twenty)

counterTen = (sum - (counterHundred*hundred) - (counterFifty*fifty) - (counterTwenty*twenty))/ten



console.log(counterHundred)
console.log(counterFifty)
console.log(counterTwenty)
console.log(counterTen)