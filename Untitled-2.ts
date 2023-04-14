//If a number is divisible by three, say "Fizz!" instead
//If a number is divisible by five, say "Buzz!" instead
//If a number is divisible by three and by five, say "Fizz-Buzz!"
//Otherwise, just say the number as you would normally
let num1: number ;
function Fizzbuzz(num1){
    if (num1%3==0 && num1%5==0) {
        return console.log("Fizz-Buzz!")
    
    }
    else if (num1%5==0){
        return console.log("Buzz!")
    }
    else if((num1%3==0 )){
        return console.log("Fizz!")
    }
    else{
        return console.log("It is just a number")
    }
    
}
Fizzbuzz(3);
