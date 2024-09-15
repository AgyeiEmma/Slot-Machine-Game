const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS =3 ;

const SYMBOLS_COUNT={
    A:2,
    B:4,
    c:6,
    D:8,
}

const SYMBOL_VALUES={
    A:5,
    B:4,
    c:3,
    D:2

}

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

const spin =() =>{
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for(let i =0 ; i< count ; i++){
            symbols.push(symbol);
        }
}
const reels =[[],[],[]];
for(let i=0;i<COLS;i++){
    for(let j=0; j<ROWS; j++){
        const randomIndex= Math.floor(Math.random()*reelSymbols.length);
        const selectedSymbol = reelSymbols[randomIndex];
        reels[i].push(selectedSymbol);
        reelSymbols.splice(randomIndex,1);

    }
};
spin();

let balance = deposit(); 
const numberOfLines = getNumberOfLines();
const bet=getBet(balance,numberOfLines);
}
