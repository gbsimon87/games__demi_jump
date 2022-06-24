// the objective of the game is to get the highest score
// we have a surface that keeps moving left
// on the surface, there are random obstacles that appear
// if the player touches one of these obstacles, the game is over
// there is a score that keeps going up as the user is playing

document.addEventListener("DOMContentLoaded", function () {
  var character = document.getElementById("character");
  var block = document.getElementById("block");
  var counter = 0;
  function jump() {
    if (character.classList == "animate") {
      return;
    }
    character.classList.add("animate");
    setTimeout(function () {
      character.classList.remove("animate");
    }, 300);
  }
  var checkDead = setInterval(function () {
    let characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    let blockLeft = parseInt(
      window.getComputedStyle(block).getPropertyValue("left")
    );
    if (blockLeft < 80 && blockLeft > -80 && characterTop >= 420) {
      block.style.animation = "none";
      alert("Game Over. score: " + Math.floor(counter / 100));
      counter = 0;
      block.style.animation = "block 1s infinite linear";
    } else {
      counter++;
      document.getElementById("scoreSpan").innerHTML = Math.floor(
        counter / 100
      );
    }
  }, 10);

  document.addEventListener("keyup", function (event) {
    if (event.key === " ") {
      jump();
    }
  });
});
