function maxNumber()
{
    let max = -Infinity;
    for(let i=0; i<=arguments.length; i++)
        {
            if (arguments[i]> max)
            {
                max = arguments[i]
            }
        } 
    return max;

}

let number  = maxNumber(10,20,2,47,58,44,1,547,0);
console.log(number)