
// error occurs since the variable is assigned to number types. JS variables can change on the fly (note, this can still be compiled into effective JS code)
// This is why we use "let" in ts, because code written like this will likely break at some point, so using let allows us to catch these errors ahead of time
let count = 5;
count = 'a';

// declaring a variable without initializing it will have a type of "any", just like in JS.
let a;
// if you dont know the type of a variable ahead of time, use type annotation
let b: number;
b = 1;
b = 'a';
b = true;

// Types:
let c: number;
let d: boolean;
let e: string;
let f: any;
let g: number[] = [1, 2, 3];
let h: any[] = [1, true, 'a']; //Not the best appraoch, but possible with TS

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
// With the above being a little verbose, we can use the object-oriented concept "enum" to put all related constants into a container
enum Color { Red = 0, Green = 1, Blue = 2 }; // Explicitly set values so that they can remain constant over time (no accidental insertion of another color, accidentally changing other values)
let backgroundColor = Color.Red