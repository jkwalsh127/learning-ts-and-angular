
// declaring a variable using var will scope the variable to the nearest function, making i available throughout this function.
// if let is used, i is not available to the second console.log, as let scopes to the nearest block, rather than nearest function. This is the best way to declare variables.
// using let will produce an error ahead of compile time, but will be translated into var in the compiled js file, correcting the ineffective scope.
function something() {
    for(var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log('Finally: ' + i)
}

something();