//FizzBuzz  function

function fizzBuzz(num){
if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0){
    console.log("Buzz");
  } else if (num % 3 === 0 && num % 5 === 0 ){
    console.log("FizzBuzz");
  } else {
    console.log(num);
  }
}


//Birth Year function
const years = prompt("Please enter your Year of Birth")
const age =2021 - years

if(age < 18) {
    console.log("You are a Minor");
}else if(age >= 18 && age <= 36) {
    console.log("You are a Youth");
}esle; {
     console.log("You are an Adult");
}

console.log(age);
