const arr = [60, 90, 70, 40, 50]
let marks = arr[0];
for (i = 0; i < arr.length; i++) {
    marks = (arr[i] > marks ? arr[i] : marks)
}
console.log("The highest marks scored in the class is: " + marks)
