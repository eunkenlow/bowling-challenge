function Frame() {
  this.rolls = [];
  this.currentRoll = 0;
}

Frame.prototype.roll = function(pins){
  if (pins === 10)
  {
    this.rolls = [10, 0];
    this.currentRoll = 2;
  }
  else{
  this.rolls[this.currentRoll++] = pins;
  }
};

function sum(arr) {
  var sum;
  for (var i = 0; i <= arr.length; i++){
    sum += arr[i];
  }
}
