/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).*/

//first solution: works but can be better

for (let counter = 1; counter <= 100; counter = counter + 1) {
  if (counter % 3 === 0) {
    console.log("Fizz");
  }
  if (counter % 5 === 0) {
    console.log("Buzz");
  }
  if (counter % 5 === 0 && counter % 3 === 0) {
    console.log("FizzBuzz");
  } else console.log(counter);
}

//second solution: using short-circuiting of logical operators

for (let counter = 1; counter <= 100; counter++) {
  let answer = ""; // defining a binding for the printed value
  if (counter % 3 === 0) {
    answer = answer + "Fizz";
  }
  if (counter % 5 === 0) {
    answer = answer + "Buzz";
  }
  console.log(answer || counter); //if the 'answer' binding is empty the program will print 'counter' and if the 'answer' binding has any value it will be printed. that happens because the logical operator OR convert the value on the left to a boolean value to decide what to do next, print the left value or the right one.
}
