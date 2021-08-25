const friends = ['tomes koros', 'Tom' , 'tom Solaiman', 'Jerry'];

const friendLanght = friends.map(friend => friend.length)
// console.log(friendLanght);




const prouducts = [
    {name:'mobile phone', price:15000, color:'black'},
    {name:'watch', price:3000, color:'black'},
    {name:'laptop', price:500000, color:'gray'},
    {name:'notebook', price:100, color:'black'}
]

// const prouductItem = prouducts.map(prouduct => prouduct)
// console.log(prouductItem);

const prouductName= prouducts.map(prouduct => prouduct.name)

const prouductPrice = prouducts.map(prouduct => prouduct.price)

const prouductPriceFor = prouducts.forEach(prouduct => prouduct.price)
console.log(prouductPriceFor);