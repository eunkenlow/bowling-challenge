describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  function rollMany (n, pins) {
        for (var i = 0; i < n; i++) {
            bowling.roll(pins);
        }
    }

  function rollSpare() {
      bowling.roll(5);
      bowling.roll(5);
  }

  function rollStrike() {
    bowling.roll(10);
  }

    it("handle gutter bowling", function() {
          rollMany(20, 0);
          expect(bowling.score()).toEqual(0);
      });

      it("should handle all ones", function() {
          rollMany(20, 1);
          expect(bowling.score()).toEqual(20);
      });

      it("should handle one spare", function() {
          rollSpare();
          bowling.roll(3);
          rollMany(17, 0);
          expect(bowling.score()).toEqual(16);
      });

      it("should handle a strike", function() {
          rollStrike();
          bowling.roll(3);
          rollMany(17, 0);
          expect(bowling.score()).toEqual(16);
      });

      it("should handle one strike", function() {
        rollStrike();
        bowling.roll(3);
        bowling.roll(4);
        rollMany(16, 0);
        expect(bowling.score()).toEqual(24);
    });

    it("should handle a perfect bowling", function() {
        rollMany(12, 10);
        expect(bowling.score()).toEqual(300);
    });

});
