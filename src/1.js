
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let randProblem = getRandomInt(1, 10);
switch(randProblem) {
case 1:
  console.log("What is the value of x in the equation 2x + 5 = 11?");
  break;
case 2:
  console.log("If a coin is flipped 10 times, what is the probability that it will land on heads at least once?")
  break;
case 3:
  console.log("What is the value of x in the equation x + 5 = 11?");
  break;
case 4:
  console.log("If a book costs $20 and you have $80, how much would you need to give away to buy 5 books?")
  break;
case 5:
  console.log("What is the value of x in the equation 3x + 2 = 19?");
  break;
case 6:
  console.log("If a pizza costs $10 and you have $40, how much would you need to give away to buy 5 pizzas?")
  break;
case 7:
  console.log("What is the value of x in the equation x - 3 = 9?");
  break;
case 8:
  console.log("If a phone costs $40 and you have $200, how much would you need to give away to buy 5 phones?")
  break;
case 9:
  console.log("What is the value of x in the equation 2x + 6 = 18?");
  break;
case 10:
  console.log("If a computer costs $500 and you have $2000, how much would you need to give away to buy 5 computers?")
  break;
}