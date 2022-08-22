
// since the fields are private, we cannot display them to a user, unless defining a method within the class, where access to all members is complete
class Point12 {
    constructor(private x?: number, private y?: number) {}
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    getX() {
        return this.x;
    }
}

let newPoint11 = new Point12(1, 2);
let x = newPoint11.getX();


class Point13 {
    constructor(private x?: number, private y?: number) {}
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    getX() {
        return this.x;
    }
    setX(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0');

        this.x = value;
    }
}

let newPoint22 = new Point13(1, 2);
let x2 = newPoint22.getX();
newPoint22.setX(10);


class Point14 {
    constructor(private x?: number, private y?: number) {}
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    // "Properties" are defined with a keyword ("get" or "set"), and then the name of the prop, and then followed by parentheses, much like a method.
    get X() {
        return this.x;
    }
    set X(value) {
        if (value! < 0)
            throw new Error('value cannot be less than 0');

        this.x = value;
    }
}
// The difference between properties and methods is that methods can be used like fields
let newPoint33 = new Point14(1, 2);
let x3 = newPoint33.X;
newPoint33.X = 10;

// so, use properties when you want there to be read-only access to private fields outside of a class, or to be able to set values but with some basic validation. Note, these methods are referred to as Setters and Getters.

class Point15 {
    // We use camel notation to name fields. To use camel case with our properties, we should prefix the underlying field with an underline. Now, our props can be used and look like fields from the outside, but are of course are really methods within a class, or, more specifically, a getter/setter method
    constructor(private _x?: number, private _y?: number) {}
    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    get x() {
        return this._x;
    }
    set x(value) {
        if (value! < 0)
            throw new Error('value cannot be less than 0');

        this._x = value;
    }
}

let newPoint34 = new Point15(1, 2);
let x4 = newPoint34.x;
newPoint34.x = 10;
