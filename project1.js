const prompt = require("prompt-sync")();

const deposit= () =>{
    while(true){
    const depositAmount = prompt("Enter a deposit Amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount) || numberDepositAmount <=0){
        console.log("invalid amount; please try again later");
    }
    else{
        return depositAmount;
    }
};
}


const getNumberOfLines = () =>{
    while(true){
        const lines = prompt("Enter the number of lines: (1-3 )");
        const numberOfLines = parseFloat(lines);
        if (isNaN(numberOfLines) || numberOfLines <=0 || numberOfLines>3){
            console.log("invalid number of lines, try again ");
        }
        else{
            return numberOfLines;
        }
    };
}

const getBet=(balance,lines)=>{
    while(true){
        const bet = prompt("Enter the bet per line: ");
        const numberOfBet = parseFloat(bet);
        if (isNaN(numberOfBet) || numberOfBet <=0 || numberOfBet > balance / lines){
            console.log("invalid Bet, try again ");
        }
        else{
            return numberOfBet;
        }
    };
}




let balance = deposit(); 
const numberOfLines = getNumberOfLines();
const bet=getBet(balance,numberOfLines);



