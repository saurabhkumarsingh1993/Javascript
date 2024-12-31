// sum of all these numbers [10, 20, 30,55]
function sum()
{
    let sum = 0;
    for(let i=0; i<arguments.length; i++)
    {
        sum = sum + arguments[i];
    }
    return sum;
}

let sumOfAllNumbers = sum(10,10,10,10,100);
console.log(sumOfAllNumbers)