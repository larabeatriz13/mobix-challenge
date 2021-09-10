const math = require("mathjs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("digite um calculo matemático: ", (expression)=> 
{
    try 
    {
    const result =  math.evaluate(expression);
    console.log(`O valor de ${expression} é ${result}`);
    rl.close();
    } 
    catch (SyntaxError) 
    {
    console.log("equação inválida!");
    rl.close();
}})

