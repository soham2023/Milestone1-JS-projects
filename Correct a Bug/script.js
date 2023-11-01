const total_items = (cart) =>
{
        const correct = cart.map((item)=>
        {
            const total = item.quantity * 2;
            return { ...item, quantity: total };

        });
    return correct;

}
const cart =[
    {item: 'a', quantity : 100 },
    {item: 'b', quantity : 50 },
    {item: 'c', quantity : 300 },
    {item: 'd', quantity : 200 }
];

const correctedCart = total_items(cart);

console.log(correctedCart);
