export function whatsMyType<T>(argunment: T):T{
    return argunment;
}

let amIString = whatsMyType('Hola');
let amINumber = whatsMyType(100);
let amIArray= whatsMyType([1,2,3,4,5]);


console.log(amIArray.join('-'))
console.log(amINumber.toFixed)
console.log(amIString)