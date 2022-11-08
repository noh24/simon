//  import example
// import { Whatever } from './example-for-export.js';

// import example for export default
// import Whatever from './example-for-export.js'
import './../css/styles.css';
import { Simon, Player } from './logic.js';

// create Simon

//start button > generateSequence
//every time sequence color is generated, opacity down

//get userInput by click
//if user clicks red div. push 'red' to user input array?
//doesItMatch function every time
  //if false, stop game
  //if true trigger generate sequence
  let simon = new Simon();
  let player = new Player();
  console.log(simon);
  console.log(player);


function startRound() {
  setInterval(simon.generateSequence(), 1000); //returns sequence array 
  setInterval(changeColors(), 1000);
  player.input = [];
  player.index = 0;
  console.log(simon.sequence);
  console.log(simon.round);
}

function colorBoxes(event) {
  let id = event.target.id;
  console.log(id);
  player.input.push(id);
  console.log(player.input);
}

function checkIfMatch() {
  if (player.checkMatch(simon) === true) {
    console.log("yes");
    player.index++;
    newRound();
  } else {
    console.log('fal');
  }
}
function newRound() {
  if (player.input.length === simon.sequence.length) {
    setInterval(startRound(),100);
    setInterval(changeColors(), 2000);
  }
}
function changeColors() {
  if (simon.sequence[player.index] === 'red') {
    document.getElementById('red').style.opacity = .6;
    setTimeout(function() {
      document.getElementById('red').style.opacity = 1;
    }, 1000)
    return;
  } else if (simon.sequence[player.index] === 'blue') {
    document.getElementById('blue').style.opacity = .6;
    setTimeout(function() {
      document.getElementById('blue').style.opacity = 1;
    }, 1000)
    return;
  } else if (simon.sequence[player.index] === 'green') {
    document.getElementById('green').style.opacity = .6;
    setTimeout(function() {
      document.getElementById('green').style.opacity = 1;
    }, 1000)
    return;
  } else if (simon.sequence[player.index] === 'yellow') {
    document.getElementById('yellow').style.opacity = .3;
    setTimeout(function() {
      document.getElementById('yellow').style.opacity = 1;
    }, 1000)
    return;
  }
}

// switch (simon.sequence[player.this.index]) {
//   case ("red"):
//     console.log("Red!");
//     break;
//   case ("green"):
//     console.log("Green!");
//     break;
//   case ("blue"):
//     console.log("Blue!");
//     break;
//   case ("yellow"):
//     console.log("Blue!");
//     break;
// }

// document.getElementById('blue').style.opacity = .6;
// document.getElementById('blue').style.opacity = 1;
// document.getElementById('green').style.opacity = .6;
// document.getElementById('green').style.opacity = 1;
// document.getElementById('yellow').style.opacity = .6;
// document.getElementById('yellow').style.opacity = 1;

document.getElementById("start").addEventListener("click", startRound);
document.getElementById("color-boxes").addEventListener("click", colorBoxes);
document.getElementById("color-boxes").addEventListener("click", checkIfMatch);