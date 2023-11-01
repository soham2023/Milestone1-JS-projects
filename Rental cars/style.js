const cost = (car,day)=>
{
    let result;
    if (car == 'Economy')
    {
        result = 4000*day;
    }
    else if( car == 'Midsize')
    {
        result = 10000*day;
    }
    else if (car == 'Luxury')
    {
        result = 20000*day;
    }
    return result;

}
let day = 3;
let car = 'Economy';
totalCost = cost(car,day);
console.log(totalCost)