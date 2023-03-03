let numberArray = new Array();
for(let i = 1; i < 100; i++) {
    if(i % 11 == 0) {
        numberArray.push(i);
    }
}
console.log(numberArray);