let nam = "Aabrcakadebra";
let vowel = "aeiouAEIOU";
let count = 0
for (let i = 0;i<nam.length;i++)
{
    if(vowel.includes(nam[i]))
    {
        count = count+1; 
    }
}
if(count === 0)
{
    console.log("No vowel is present!")
}
else
{
    console.log(" Number of vowels are "+count);
}