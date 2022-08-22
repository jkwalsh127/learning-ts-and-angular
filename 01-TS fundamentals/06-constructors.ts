//In Object-oriented programming, every class can have a constructor, which is a method that is called when we create an instance of the class:


class Point {
    x: number;
    y: number;

    // because only one constructor is allowed, there may be times when we dont want or cannot declare parameter values, so we need to make them optional. '?' is added so that we do not need to declare these parameters each time we create a new instance of the class. If one parameter is optional, all to the right of it should be as well. Means the variables can be of either type number or undefined.
    constructor(x?: number, y?: number) {
        // declaring these variables will expect a number, and so throw an error since we declared they could be undefined. to avoid:
        this.x = x!; // the non-null assertion (!) says the value will never be null or undefined
        this.y = y as number; // type assertion
        this.y !== undefined ? y : 0; // or ternary operator
        this.y = y ?? 0; // or nullish coalescing operator (??) specifies a fallback if value is either null or undefined
        this.y = y || 0; // or or operator, which also includes "false", "0", "", "NaN"
        if( this.y !== undefined){ y }; // if statement

    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

let newPoint = new Point(1, 2);
newPoint.draw();

// with the above implementation, we can always alter parameter values by entering, for example, point.x = 3;
// preventing the parameter values on this object from changing after initialization is done using "access modifiers" (another OO concept). In TS we have public, private, and protecte (public is default, and so redundant if used)
// In the Point class, we have 3 members, two fields and one method. 

class Point2 {
    private x: number;
    private y: number;
    constructor(x?: number, y?: number) {
        this.x = x!;
        this.y = y!;
    }
    draw1() {
        // ...
    } 
}
// now intellisense will show that the "x" field is not accessible
let newPoint2 = new Point2(1, 2);
//newPoint2.y = 3 // throws an error