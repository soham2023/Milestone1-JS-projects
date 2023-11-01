let heading = document.getElementById("heading");
let  btn = document.getElementById("btn");
let textVal =  ["The most affordable learning platfrom", "PW Skills"];
let index = 0 ;
btn.addEventListener("click",()=>
{
  heading.textContent= textVal[index]
  index = (index+1) % textVal.length
})