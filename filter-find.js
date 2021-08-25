//filter on an array of objects

const  numbers = [5,10,20,50,70,90,100,2,9]

const bigNumbers = numbers.filter(number => number > 20);

const smallNumbers = numbers.filter(number => number < 50);
// console.log(smallNumbers);




const prouducts = [
    {name:'mobile phone', price:15000, color:'black'},
    {name:'watch', price:3000, color:'black'},
    {name:'laptop', price:500000, color:'gray'},
    {name:'notebook', price:100, color:'black'}
]
const exprensive = prouducts.filter(x => x.price > 500);
// console.log(exprensive);

const black = prouducts.filter(x => x.color == 'black');
// console.log(black);


//find on an array of objects
// ফাইন্ড হচ্চে পথম জা
const prouducts = [
    {name:'mobile phone', price:15000, color:'black'},
    {name:'watch', price:3000, color:'black'},
    {name:'laptop', price:500000, color:'gray'},
    {name:'notebook', price:100, color:'black'}
]
const blackIteim = prouducts.find( x => x.color == 'black')
console.log(blackIteim);