let p1choice = "";

const clickedOnPlayerOne = event => {
  document.querySelector(".player-1").classList.add("choice-made");

  // Somehow remember that player 1 chose "rock"
  p1choice = "rock";
  // log what player one choice is
  console.log(p1choice);
  // log what player two choice is

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

  // if both players have made a choice
  //   if player one chose rock and player two chose paper then the winner is player two
  //   if player one chose rock and player two chose rock then there is a tie
  //   if player one chose rock and player two chose scissors then the winner is player one
  //   if player one chose paper and player two chose rock then the winner is player one
  //   if player one chose paper and player two chose paper then there is a tie
  //   if player one chose paper and player two chose scissors then the winner is player two
  //   if player one chose scissors and player two chose rock then the winner is player two
  //   if player one chose scissors and player two chose paper then the winner is player one
  //   if player one chose scissors and player two chose scissors then there is a tie

  document.querySelector("footer").textContent = "Winner";
};
let clickedOnPlayerOnePaper = event => {
  document.querySelector(".player-1").classList.add("choice-made");

  p1choice = "paper";
};

let clickedOnPlayerOneScissors = event => {
  document.querySelector(".player-1").classList.add("choice-made");

  p1choice = "scissors";
};

const main = () => {
  let player1rock = document.querySelector(".player-1 .rock");

  player1rock.addEventListener("click", clickedOnPlayerOne);

  let player1paper = document.querySelector(".player-1 .paper");

  player1paper.addEventListener("click", clickedOnPlayerOnePaper);

  let player1scissors = document.querySelector(".player-1 .scissors");

  player1scissors.addEventListener("click", clickedOnPlayerOneScissors);
};

document.addEventListener("DOMContentLoaded", main);
