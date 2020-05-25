let sentence = 'Hey there, i am a javascript developer, and i live in vienna';
let newsentence = sentence.slice(11, 39);
document.write(sentence);
document.write('<br>');
document.write(newsentence);
document.write('<br>');
newsentence = newsentence.replace('i', 'I');
newsentence = newsentence.replace(',', '.');
document.write(newsentence);
document.write('<br>');

let fruit = [ 'apple', 'banana', 'kiwi' ];
fruit.splice(2, 0, 'orange', 'strawberry');
document.write(fruit);
