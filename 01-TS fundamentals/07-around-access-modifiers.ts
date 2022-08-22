

class Point10 {
    private x: number;
    private y: number;
    constructor(x?: number, y?: number) {
        this.x = x!;
        this.y = y!;
    }
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

//The above code is redundant:

class Point11 {
    // prefix parameters with an access modifier within the constructor
    // access modifiers will allow TScompiler to generate a field with the exact same name, and initialize them with the value of the argument
    constructor(private x?: number, private y?: number) {}
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}
