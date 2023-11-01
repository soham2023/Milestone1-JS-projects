
const converter =  (cel =>
{ 
let f =  (9/5 * cel)+32
return f
});
let celsius = 30
let fharenheit =  converter(celsius)
console.log(fharenheit);