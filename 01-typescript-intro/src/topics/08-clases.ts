export class Person{
// public name?:string;
// public address?:string;

constructor( public lastName:string, private firstName:string='no address'){

   
}
}
// export class Hero extends Person{
// constructor(
//     public alteEgo:string,
//     public age:number,
//     public realName:string,


// ){
//     super(realName, 'new yol');
// }
// }

// const ironman =new Hero('ironMan',45,"tony");
export class Hero {
    // public person:Person;

    constructor(
        public alteEgo:string,
        public age:number,
        public realName:string,
        public person:Person
    
    ){
        // this.person = new Person(realName);

    }
    }

    const tony= new Person('Tony Stark', 'new York');
    
    const ironman =new Hero('ironMan',45,"tony",tony);
console.log(ironman) 