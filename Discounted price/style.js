const discountPercentage=(originalPrice,discountedPrice)=>
{
    const discountAmount = originalPrice - discountedPrice;
    const finalPercentage = (discountAmount/originalPrice)*100;

    return Math.floor(finalPercentage);
};

let originalPrice = 1600;
let discountedPrice = 799;

let percentage = discountPercentage(originalPrice,discountedPrice);

console.log("Discount percentage is : "+percentage+"%");