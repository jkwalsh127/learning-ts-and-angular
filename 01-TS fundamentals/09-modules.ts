
// Appropriate file structure would have you name this file "point.ts". For now, understand modules as typescript files. However, to be a module, its contents (like a class, in this case) would be accessible outside the file. When there are not any external files (modules) used, we say that this file defines its own scope. The "export" is added to make this class modular.
export class Point200 {
    constructor(private x?: number, private y?: number) {}

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y); 
    }
}

let point200 = new Point200(1, 2);
point200.draw();