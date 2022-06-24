document.addEventListener("DOMContentLoaded", function () {
  var isPlaying = false;
  var numbersInterval;
  var fruitsInterval;
  var shapesInterval;
  var coloursInterval;
  var playPauseButton = document.querySelector(
    ".game-area-controls-play-pause"
  );
  var gamesDropdown = document.querySelector(".game-area-select-game .games");
  var gameAreaContent = document.querySelector(".game-area-content");
  var colours = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "brown",
    "lightblue",
    "cyan",
    "pink",
  ];
  var currentGameSelected = document.querySelector("#games").value;

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function controlGameplay() {
    switch (currentGameSelected) {
      case "numbers":
        console.log("currentGameSelected: numbers");
        if (isPlaying) {
          isPlaying = false;
          playPauseButton.style.backgroundColor = "#7ac37a";
          clearInterval(numbersInterval);
        } else {
          isPlaying = true;
          playPauseButton.style.backgroundColor = "red";
          numbersInterval = setInterval(function () {
            var randomNumber = randomIntFromInterval(0, 10);
            gameAreaContent.textContent = randomNumber;
          }, 1000);
        }
        break;
      case "colours":
        console.log("currentGameSelected: colours");
        if (isPlaying) {
          isPlaying = false;
          playPauseButton.style.backgroundColor = "#7ac37a";
          clearInterval(coloursInterval);
        } else {
          isPlaying = true;
          playPauseButton.style.backgroundColor = "red";
          coloursInterval = setInterval(function () {
            var randomNumber = randomIntFromInterval(0, 9);
            var randomColour = colours[randomNumber];
            // gameAreaContent.textContent = randomColour;
            // gameAreaContent.style.color = randomColour;
            gameAreaContent.textContent = "";
            gameAreaContent.style.backgroundColor = randomColour;
          }, 1000);
        }
        break;
      case "fruits":
        console.log("currentGameSelected: fruits");
        break;
      case "shapes":
        console.log("currentGameSelected: shapes");
        break;
      default:
        break;
    }
  }

  gamesDropdown.addEventListener("input", function (e) {
    console.log("currentGameSelected:", currentGameSelected);
    console.log("new value:", e.target.value);
    var gameSelected = e.target.value;

    if (currentGameSelected === "numbers") {
      clearInterval(numbersInterval);
    } else if (currentGameSelected === "fruits") {
      clearInterval(fruitsInterval);
    } else if (currentGameSelected === "shapes") {
      clearInterval(shapesInterval);
    } else if (currentGameSelected === "colours") {
      clearInterval(coloursInterval);
    }

    playPauseButton.style.backgroundColor = "#7ac37a";
    currentGameSelected = gameSelected;
    gameAreaContent.textContent = gameSelected;
    isPlaying = false;
  });

  playPauseButton.addEventListener("click", function () {
    controlGameplay();
  });
});
