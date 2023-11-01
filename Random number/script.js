const random = (number)=>
{
     number = Math.floor(Math.random()*100)+1;
     return number;
}

let randomNumber = random();
console.log("The random Number between 1 to 100 is :"+randomNumber);