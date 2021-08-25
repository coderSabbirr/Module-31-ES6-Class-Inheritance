// class Support {
//     name;
//     designation ='support web dev';
//     address ='BD';
//     startSession(){
//         console.log('start a sesson');
//     }
// }

// const aamir = new Support()
// console.log(aamir);


class Support {
    name;
    designation ='support web dev';
    address ='BD';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log('start a sesson');
    }
}

const aamir = new Support('aamir','usa');
const salman = new Support('salman khan', 'dubai');
// console.log(aamir);
// console.log(salman);