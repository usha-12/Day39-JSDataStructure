let primefactorArray = new Array();
let number = 24;
for(let i = 2; i < number; i++) {
    while(number%i == 0) {
        console.log(i+" ");
        number = number / i;
    }
    if(number > 2) {
        console.log(number);
    }
}