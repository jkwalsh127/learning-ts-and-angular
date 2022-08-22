

// with so many properties, these parameters should be encapsulated in a single object
let drawPoint0 = (x, y, a, b, c, d) => {
    // ...
}

// "in-line" annotation
let drawPoint1 = (point: { x: number, y: number}) => {
    // ...
};

drawPoint1({
    x: 1,
    y: 2,
})

// above is a little verbose, and if the point object is reused elsewhere, that is inefficient. Instead, use an "interface" (an object-oriented concept). 
interface Point {
    x: number,
    y: number
}

let drawPoint2 = (point: Point) => {
    // ...
}

// Cohesion - another object-oriented principle that says, things that are related should be part of one unit. In the above example, the interface and standalone function violates this principle. This unit is usually called a "Class", which groups properties and functions that are highly related. functions cannot be included within interfaces, which are just for declaration, not implementation. Instead:

interface Point2 {
    x: number,
    y: number,
    draw: () => void // because part of the same unit, the x and y props do not need to be passed as parameters. This fxn can now be implemented elsewhere
}

// Functions defined within classes are called "methods"
// use camel case notation when defining fields
class Point3 {
    x: number;
    y: number;
    draw2() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    getDistance(another: Point) { // Can find the distance between this Point and another Point
        // ...
    }
}

let point10: Point3;
// point10.draw2(); throws an error because point10 is not assigned if memory isn't allocated to it

// When defining an object of a custom type, we must explicitly allocate memory to it
// let point2: Point3 = new Point3(); TS can infer the type when declaring a new object
let point2 = new Point3(); // note that "point2" here is an instance of an object, while "Point3" is an instance of a class
point2.x = 1;
point2.y = 2;
point2.draw2(); 
