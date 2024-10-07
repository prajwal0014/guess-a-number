let a = Math.random() = 100;

a = Number.parseInt(a)
let inp;
let score = 100;

while (inp != a) {
  score = score - 1;
  inp = 36;
  if (inp == a) {
    console.log("congratulation! you guess the correct numver ")
    console.log('you guess the actual number in ${100 - score} chances.')
  }
  else if (inp > a && inp < 100) {
    console.log("your number is greater than the actual number")
  }
  else if (inp < a && inp > 0) {
    console.log("your number is smaller than the actual number")
  }
  else {
    console.log("enter number between 1 to 100")
  }
}