//Creating an instance of process.stdin with core module
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Please enter the length of fibonacci sequence", input => {
    console.log(`This is ${input} length fibonacci sequence`);

    // Finding Out Fibonacci Numbers sequence
    const findFibonacci = (num) => {
        let fib = []; // Initialize array!

        //Defining first 2 numbers of Fibonacci sequence
        fib[0] = 0;
        fib[1] = 1;
        for (let i = 2; i <= num; i++) {
            // Next fibonacci number = previous + one before previous
            fib[i] = fib[i - 2] + fib[i - 1];
        }
        return fib
    }


    //Calling finfFibonacci function to list numbers
    let findedFibonacciNumbers = findFibonacci(input)

    console.log(findedFibonacciNumbers + "\n")


    //Finding Last number of array in findedFibonacciNumbers
    const lastItem = findedFibonacciNumbers[findedFibonacciNumbers.length - 1]


    //Looping through normal numbers
    let findNonFibonacci = () => {
        let arr = [];
        for (let i = 0; i < lastItem + 1; i++) {
            arr.push(i)
        }
        return arr;
    }

    //Finding differance between normal numbers and fibonacci numbers in array
    const unCommonArray = (first, second) => {
        const res = [];
        for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                res.push(first[i]);
            }
        };
        for (let j = 0; j < second.length; j++) {
            if (first.indexOf(second[j]) === -1) {
                res.push(second[j]);
            };
        };
        return res;
    };

    console.log(`This are first ${input} non-fibonacci numbers`)

    let done = unCommonArray(findedFibonacciNumbers, findNonFibonacci()).slice(0, input);
    console.log(done);

    readline.close();
});

