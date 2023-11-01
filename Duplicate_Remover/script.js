const productList = (cart)=>
{
    const productCart =[];
    cart.forEach(item => 
        {
            const pro_id = item.p_id;
            const pro_name = item.p_name;

            const duplicateProduct = productCart.find(product => product.p_id === pro_id);
            if(!duplicateProduct)
            {
                productCart.push({p_id: pro_id , p_name:pro_name})
            }
        });
        return productCart;       
}
let cart = [
    {p_id: 1, p_name:'product1'},
    {p_id: 2, p_name:'product2'},
    {p_id: 1, p_name:'product1'},
    {p_id: 4, p_name:'product4'}
]
const uniqueCart =productList(cart);
console.log(uniqueCart); 