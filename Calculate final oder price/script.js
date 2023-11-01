const finalPrice =(cart)=>
{
    let bill = cart.reduce((total,item) =>{
       total += item.itemPrice*item.quantity;
       return total;
    
    },0);
    return bill;};


let cart = [
    {itemPrice:100, quantity:4},
    {itemPrice:200, quantity:3},
    {itemPrice:300, quantity:2},
    {itemPrice:400, quantity:1}
]

let order = finalPrice(cart);
console.log("Total Bill is : " +order)