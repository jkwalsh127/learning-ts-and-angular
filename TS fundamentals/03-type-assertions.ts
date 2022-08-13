
// This way, intellisense will know to suggest "endsWith" after typing the period because it knows this method is used with strings
let message = 'abc';
let endsWithC = message.endsWith('c');

// If the variable is given a type of "any", we must use "type assertions" to inform intellisense
let messageTwo;
messageTwo = 'abcd';
let endsWithD = (<string>messageTwo).endsWith('d'); // more common
// Can also use type assertions by:
let alternativeWay = (message as String).endsWith('d');