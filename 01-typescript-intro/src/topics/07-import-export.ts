import { Product, taxCalculation } from './06-function-destructure';


const shoppingCart:Product[]=[
{
    description:'nokia',
    price:100

},
{
    description:'ipad',
    price:100
}
]

const [total,tax]= taxCalculation({
    products:shoppingCart,
    tax:0.15


})

console.log('total', total)
console.log('tax', tax)
