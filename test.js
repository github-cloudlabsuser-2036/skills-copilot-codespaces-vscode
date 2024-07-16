



const readline = require ('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Enter the first number:' , (firstNumber) => {
    rl.question ('Enter the second number:' , (secondNumber) => {
        rl.question ('Enter the operation (+, -, *, /):', (operation) )
    } )
    let result;

    switch (operation) {
        case '+':
            result = Number(firstNumber) + Number(secondNumber);
            break;
        case '-':
            result = Number(firstNumber) - Number(secondNumber);
            break;
        case '*':
            result = Number(firstNumber) * Number(secondNumber);
            break;
        case '/':
            result = Number(firstNumber) / Number(secondNumber);
            break;
        default:
            console.log('Invalid operation');
            break;
    }

    console.log('Result:', result);
    rl.close();
})
