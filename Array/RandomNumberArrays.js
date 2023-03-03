let randomArray = new Array();
for(let i = 0; i < 10; i++) {
    randomArray.push(Math.floor(Math.random()*1000));
}
console.log(randomArray);
function getMinMax(numbers) {
    let temp = 0;
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            if(numbers[i] > numbers[j]) {
                temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return "Second largest number is "+numbers[8]+" and the second smallest number is "+numbers[1];
}
console.log(getMinMax(randomArray));