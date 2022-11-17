function factoriel(num)
{
    let f = 1;
    for(let i = 1; i <= num; i++)
    {
        f = f* i;

    }
    return(f);
}

let userNumber = prompt("Ton numéro ?");
console.log(factoriel(userNumber));