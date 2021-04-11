function parenthesesAreBalanced(string) {
    let parentheses = "[]{}()",
        stack = [], i, character, bracePosition; // creating array and variables 

    for (i = 0; character = string[i]; i++) {
        bracePosition = parentheses.indexOf(character);
        //Checking position of braces
        if (bracePosition === -1) {
            continue;
        }

        //Checking position of braces
        //if positions are correct we are pushing it to array else returning false
        if (bracePosition % 2 === 0) {
            stack.push(bracePosition + 1); // push next expected brace position
        } else {
            if (stack.length === 0 || stack.pop() !== bracePosition) {
                return false;
            }
        }
    }

    return stack.length === 0;
}


console.log("Please enter your line of ASCII symbols")

// Simply taking input from terminal and passing it to above written function
process.stdin.on('data', (chunk) => {
    let inputFromUser = chunk.toString().trim();
    console.log(parenthesesAreBalanced(inputFromUser));
});
