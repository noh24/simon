export function Simon() {
  this.colors = ["red", "blue", "green", "yellow"];
  this.sequence = [];
  this.round = 1;
}

Simon.prototype.generateSequence = function() {
  for (let i = 0; i < this.round; i++) {
    if (this.sequence.length < this.round) {
      this.sequence.push(this.colors[Math.floor(Math.random() * 4)]);
    }
  }
  this.round++;
  return this.sequence;
}
export function Player() {
  this.input = [];
  this.index = 0;
}

Player.prototype.checkMatch = function(simon) {
  if (simon.sequence[this.index] === this.input[this.index]) {
    return true;
  } else {
    return false;
  }
};

