let numberOfUser = prompt("Bonjour ! Combien d'étages veux tu ?");

function generatePyramid(num){
    for (let i = 1; i <= num; i++)
    {
        console.log(("#").repeat(i));
    }
}

generatePyramid(numberOfUser)