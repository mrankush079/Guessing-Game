// //user enters a max number & then tries to guess a random generated number between 1 to max.
//  const max = prompt("enter the max number");
 
//  const random = Math.floor(Math.random() * max) +1;
// let guess = prompt ("guess the number ");

// while(true){
//     if (guess ==  "quit " ){
//         console.log("user quit");
//         break;
//     }

//     if (guess == random ){
//         console.log("you are right ! congrats!! random number was", random);
//         break;   
//     } 
//     else if (guess < random) {
//         guess = prompt(" Hint : your guess was too small. please try again")
//     }
//     else {
//         guess = prompt(" Hint : your guess was too large. please try again")
//     }
//     //else{
//     //    guess = prompt ("your guess was wrong. please try again ");
//     //}
// }


let randomNumber;
let max;
let attempts = 0;

const startBtn = document.getElementById("startBtn");
const guessBtn = document.getElementById("guessBtn");
const playAgainBtn = document.getElementById("playAgainBtn");
const toggleDark = document.getElementById("toggleDark");
const htmlRoot = document.getElementById("htmlRoot");

const maxInput = document.getElementById("maxInput");
const guessInput = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");
const gameArea = document.getElementById("gameArea");
const loader = document.getElementById("loader");

toggleDark.addEventListener("click", () => {
  htmlRoot.classList.toggle("dark");
});

startBtn.addEventListener("click", () => {
  max = parseInt(maxInput.value);
  if (!max || max < 1) return alert("Enter a valid max number");

  loader.classList.remove("hidden");
  feedback.textContent = "";
  attempts = 0;
  attemptsDisplay.textContent = "";

  setTimeout(() => {
    loader.classList.add("hidden");
    randomNumber = Math.floor(Math.random() * max) + 1;
    gameArea.classList.remove("hidden");
  }, 1000);
});

guessBtn.addEventListener("click", () => {
  const guess = parseInt(guessInput.value);
  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if (guess === randomNumber) {
    feedback.textContent = `🎉 Correct! The number was ${randomNumber}`;
    feedback.classList.add("text-green");
    playAgainBtn.classList.remove("hidden");
    guessBtn.disabled = true;
    confetti();
  } else if (guess < randomNumber) {
    feedback.textContent = "📉 Too low! Try again.";
    feedback.classList.add("text-orange");
  } else {
    feedback.textContent = "📈 Too high! Try again.";
    feedback.classList.add("text-orange");
  }
});

playAgainBtn.addEventListener("click", () => {
  gameArea.classList.add("hidden");
  playAgainBtn.classList.add("hidden");
  guessBtn.disabled = false;
  maxInput.value = "";
  guessInput.value = "";
  feedback.textContent = "";
  attemptsDisplay.textContent = "";
});

function confetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}