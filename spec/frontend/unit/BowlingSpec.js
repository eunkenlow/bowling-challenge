describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  function rollMany (n, roll1, roll2) {
        for (var i = 0; i < n; i++) {
            bowling.turn(roll1,roll2);
        }
    }

  function rollPerfect () {
    for (var i = 0; i < 9; i++) {
        bowling.turn(10);
    }
    bowling.lastTurn(10, 10, 10);
  }

  function rollSpare() {
      bowling.turn(5,5);
  }

  function rollStrike() {
    bowling.turn(10);
  }

    it("handle gutter bowling", function() {
          rollMany(10, 0, 0);
          expect(bowling.score()).toEqual(0);
      });

      it("should handle all ones", function() {
          rollMany(10, 1, 0);
          expect(bowling.score()).toEqual(10);
      });

      it("should handle one spare", function() {
          rollSpare();
          bowling.turn(3, 0);
          rollMany(8, 0, 0);
          expect(bowling.score()).toEqual(16);
      });

      it("should handle a strike", function() {
          rollStrike();
          bowling.turn(3, 0);
          rollMany(7, 0, 0);
          bowling.lastTurn(0,0,0);
          expect(bowling.score()).toEqual(16);
      });

      it("should handle one strike", function() {
        rollStrike();
        bowling.turn(3, 3);
        rollMany(8, 0, 0);
        expect(bowling.score()).toEqual(22);
    });

    it("should handle a perfect bowling", function() {
        rollPerfect();
        expect(bowling.score()).toEqual(300);
    });

});
