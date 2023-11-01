const totalBill = (bill,person)=>
{
    cost = bill.reduce((accumulator, currentValue) => accumulator+currentValue, 
    0);

    splitCost = cost/person;
    return splitCost;
    
}



bill=[500,400,100,200,800];
person = 2;
kharcha =  totalBill(bill,person);
console.log("Everyone had to pay: " +kharcha);