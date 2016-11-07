function Bowling() {
    this._frames = [];
}

Bowling.prototype.addFrame = function(frame){
  this._frames.push(frame);
};

Bowling.prototype.roll = function(pins) {
    this.rolls[this.currentRoll++] = pins;
};

Bowling.prototype.turn = function(roll1, roll2) {
  var frame = new Frame();
  frame.roll(roll1);
  if (roll1 != 10){
  frame.roll(roll2);
  }
  this.addFrame(frame);
};

Bowling.prototype.lastTurn = function(roll1, roll2, roll3) {
  var frame = new Frame();
  frame.lastRoll(roll1);
  frame.lastRoll(roll2);
  if (roll2 === 10){
    frame.lastRoll(roll3);
  }
  this.addFrame(frame);
};

Bowling.prototype.score = function() {
    var score = 0;

    for (var frame = 0; frame < 9; frame++) {
      if (this.isStrike(frame) && this.isStrike(frame + 1) && frame === 8) {
         score += 10 + this.strikeBonus(frame);
       }
       else if (this.isConsecutiveStrike(frame)) {
          score += 20 + this.strikeBonus(frame);
        }
        else if (this.isStrike(frame)) {
            score += 10 + this.strikeBonus(frame);
        }
        else if (this.isSpare(frame)) {
            score += 10 + this.spareBonus(frame);
          }
         else {
            score += this.sumOfPinsInFrame(frame);
        }
    }
    score += this.sumOfPinsInLastFrame(9);

    return score;
};

Bowling.prototype.sumOfPinsInFrame = function(frameTurn) {
  return this._frames[frameTurn].rolls[0] + this._frames[frameTurn].rolls[1];
};

Bowling.prototype.sumOfPinsInLastFrame = function(frameTurn) {
  if (frameTurn === 9 && this._frames[frameTurn].rolls[0] === 10 && this._frames[frameTurn].rolls[1] === 10){
    return this._frames[frameTurn].rolls[0] + this._frames[frameTurn].rolls[1] + this._frames[frameTurn].rolls[2];
  }
  else{
    return this._frames[frameTurn].rolls[0] + this._frames[frameTurn].rolls[1];
  }
};

Bowling.prototype.spareBonus = function(frameTurn) {
  return this._frames[frameTurn + 1].rolls[0];
};

Bowling.prototype.strikeBonus = function(frameTurn) {
  return (this._frames[frameTurn + 1].rolls[0] + this._frames[frameTurn + 1].rolls[1]);
};

Bowling.prototype.isStrike = function(frameTurn) {
    return this._frames[frameTurn].rolls[0] === 10;
};

Bowling.prototype.isConsecutiveStrike = function(frameTurn) {
    return this._frames[frameTurn].rolls[0] === 10 && this._frames[frameTurn + 1].rolls[0] === 10;
};

Bowling.prototype.isSpare = function(frameTurn) {
    if (this._frames[frameTurn].rolls[0] + this._frames[frameTurn].rolls[1] === 10 && this._frames[frameTurn].rolls[1] !== 0){
    return true;
  }
  else {
    return false;
  }
};
