ARN = prompt("Quel est l'ARN que tu souhaites transfomer en protéines ?")

codonsArray = ARN.match(/.{1,3}/g);

for(let i in codonsArray){
    switch (codonsArray[i]){
        case "UCU": case "UCC": case "UCA": case "UCG": case "AGU": case "AGC" :
            codonsArray[i] = "Sérine";
            break;
        case "CCU": case "CCC": case "CCA": case "CCG":
            codonsArray[i] = "Proline";
            break;
        case "UUA": case "UUG":
            codonsArray[i] = "Leucine";
            break;
        case "UUU": case "UUC":
            codonsArray[i] = "Phénylalanine";
            break;
        case "CGU": case "CGC": case "CGA": case "CGG": case "AGA": case "AGG":
            codonsArray[i] = "Arginine";
            break;
        case "UAU": case "UAC":
            codonsArray[i] = "Tyrosine";
            break;
        default:
            console.log("Cette entrée n'est pas reconnue");
        break;
    }
}

console.log("Voici la séquence de protéines correspondante: ");
console.log(codonsArray)