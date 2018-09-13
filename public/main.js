let p1choice = "";
let p2choice = "";

const detectWinner = () => {
  //if players 1 choice is not a blank string and players 2 choice is not a blank string
  if (p1choice !== "" && p2choice !== "") {
    let footer = document.querySelector("footer");
    //   if player one chose rock and player two chose paper then the winner is player two
    if (p1choice === "rock" && p2choice === "paper") {
      footer.textContent = "player 2 wins";
    }
    //   if player one chose rock and player two chose rock then there is a tie
    if (p1choice === "rock" && p2choice === "rock") {
      footer.textContent = "tie";
    }
    //   if player one chose rock and player two chose scissors then the winner is player one
    if (
      (p1choice === "rock" && p2choice === "scissors") ||
      (p1choice === "paper" && p2choice === "rock")
    ) {
      footer.textContent = "player 1 wins";
    }
    //   if player one chose paper and player two chose rock then the winner is player one
    if (p1choice === "paper" && p2choice === "rock") {
      footer.textContent = "player 1 wins";
    }
    //   if player one chose paper and player two chose paper then there is a tie
    if (p1choice === "paper" && p2choice === "paper") {
      footer.textContent = "tie";
    }
    //   if player one chose paper and player two chose scissors then the winner is player two
    if (p1choice === "paper" && p2choice === "scissors") {
      footer.textContent = "player 2 wins";
    }
    //   if player one chose scissors and player two chose rock then the winner is player two
    if (p1choice === "scissors" && p2choice === "rock") {
      footer.textContent = "player 2 wins";
    }
    //   if player one chose scissors and player two chose paper then the winner is player one
    if (p1choice === "scissors" && p2choice === "paper") {
      footer.textContent = "player 1 wins";
    }
    //   if player one chose scissors and player two chose scissors then there is a tie
    if (p1choice === "scissors" && p2choice === "scissors") {
      footer.textContent = "tie";
    }
  }
};

const clickedOnPlayerOne = event => {
  document.querySelector(".player-1").classList.add("choice-made");

  // Somehow remember that player 1 chose "rock"
  p1choice = "rock";
  // log what player one choice is
  console.log(p1choice);

  // log what player two choice is
  console.log(p2choice);
  // Check if both players have made a choice

  // comparison operators
  // ===    equal to
  // !==    not equal to
  // >      great than
  // <      less than
  // >=     greater than or equal to
  // <=     less than or equal to

  // AND    &&
  // OR     ||

  detectWinner();
};
let clickedOnPlayerOnePaper = event => {
  document.querySelector(".player-1").classList.add("choice-made");

  p1choice = "paper";
  detectWinner();
};

let clickedOnPlayerOneScissors = event => {
  document.querySelector(".player-1").classList.add("choice-made");

  p1choice = "scissors";
  detectWinner();
};

const clickedOnPlayerTwo = event => {
  document.querySelector(".player-2").classList.add("choice-made");

  // Somehow remember that player 1 chose "rock"
  p2choice = "rock";
  detectWinner();
};
let clickedOnPlayerTwoPaper = event => {
  document.querySelector(".player-2").classList.add("choice-made");

  p2choice = "paper";
  detectWinner();
};

let clickedOnPlayerTwoScissors = event => {
  document.querySelector(".player-2").classList.add("choice-made");

  p2choice = "scissors";
  detectWinner();
};

const main = () => {
  let player1rock = document.querySelector(".player-1 .rock");

  player1rock.addEventListener("click", clickedOnPlayerOne);

  let player1paper = document.querySelector(".player-1 .paper");

  player1paper.addEventListener("click", clickedOnPlayerOnePaper);

  let player1scissors = document.querySelector(".player-1 .scissors");

  player1scissors.addEventListener("click", clickedOnPlayerOneScissors);

  let player2rock = document.querySelector(".player-2 .rock");

  player2rock.addEventListener("click", clickedOnPlayerTwo);

  let player2paper = document.querySelector(".player-2 .paper");

  player2paper.addEventListener("click", clickedOnPlayerTwoPaper);

  let player2scissors = document.querySelector(".player-2 .scissors");

  player2scissors.addEventListener("click", clickedOnPlayerTwoScissors);
};

document.addEventListener("DOMContentLoaded", main);
