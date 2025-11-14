//DESCRIPTION:

// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
//
// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
//
//EXAMPLE:
// ball1 = new Ball();
// ball2 = new Ball("super");
//
// ball1.ballType     ==> "regular"
// ball2.ballType     ==> "super"v

var Ball = function(ballType) {

    this.ballType = ballType || 'regular';

    //
    // class Temp {
    //     constructor(ballType = 'regular') {
    //         this.ballType = ballType;
    //     }
    // }
    // return new Temp(ballType)
};

const ball1 = new Ball('super')
const ball2 = new Ball()

console.log(ball1.ballType)
console.log(ball2.ballType)
