class TeamMamber {
    name;
    designation ='support web dev';
    address ='BD';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
}


class Support extends TeamMamber {
 groupSupportTime;
 constructor(name, address ,time){
     super(name, address)
     this.groupSupportTime = time;
 }
    // name;
    // designation ='support web dev';
    // address ='BD';
    // constructor(name,address){
    //     this.name = name;
    //     this.address = address;
    // }

    startSession(){
        console.log('start a sesson');
    }
}


class StudentCare extends TeamMamber {
    
    buildRoutin(student){
        console.log(this.name, 'Buid a routine for' , student);
    }
}


class NeptuneDev extends TeamMamber {
    codeEditor;
    constructor(name,address, editor){
        super(name,address)
        this. codeEditor = editor;
    }
    
    releaseApp(version){
        console.log(this.name, 'release app version ' , version);
    }
}


const aamir = new Support('aamir','usa',11);
const salman = new Support('salman khan', 'dubai',4);
const rohit = new Support('solaiman khan', 'US');

const alia = new StudentCare('alia','Mumbai')
// console.log(aamir);
// console.log(salman);


const ash = new NeptuneDev('asriya', 'mumbai','Nep Develop')
ash.releaseApp('1.5.6');
console.log(ash);