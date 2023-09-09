function classDecorator<T extends {new (...args:any[]): {} }>(
    constructor: T

){
return class extends constructor{
 newProperty = 'new Property';
 hello='override'   ;
}
}

@classDecorator
class SuperClass{
    public myProperty: string= 'Abc123';

    print(){
        console.log('hola mundo')
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass)