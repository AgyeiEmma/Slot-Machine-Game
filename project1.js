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
const reels =[];
for(let i=0;i<COLS;i++){
        reels.push([]);
    const reelSymbols=[...symbols];
    for(let j=0; j<ROWS; j++){
        const randomIndex= Math.floor(Math.random()*reelSymbols.length);
        const selectedSymbol = reelSymbols[randomIndex];
        reels[i].push(selectedSymbol);
        reelSymbols.splice(randomIndex,1);

    }
}
return reels;}

const transpose=(reels) =>{
    const rows=[];
    for(let i= 0; i< ROWS; i ++){
        rows.push([]);
        for(let j=0; j< COLS; j++){
            rows[i].push(reels[j][i])
        }
    }
    return rows;
}
const printRows=(rows)=>{
    for (const row of rows){
        let rowString ="";
        for(const [i, symbol] of row.entries()){
            rowString += symbol
            if(i!= row.length-1){
                rowString += " | ";
        }
    }
    console.log(rowString);
}
};
const getWinnigs =(rows, bet,lines)=>{
let winnings=0;
for(let row=0; row<lines; row ++){
    const symbols= rows[row];
    let allSame=true;

    for (const symbol of symbols){
        if(symbol!=symbol[0]){
            allSame=false;
            break;
        }
    }
    if(allSame){
        winnings += bet* SYMBOL_VALUES[symbols[0]]
    }
}

}

const game=()=>{
print("you have a balance of $"+ balance);
let balance = deposit(); 
while(true){
const numberOfLines = getNumberOfLines();
const bet=getBet(balance,numberOfLines);
balance -= bet * numberOfLines;
const reels = spin();
const rows = transpose(reels);
printRows(rows);
const winnings = getWinnigs(rows, bet, numberOfLines);
console.log("you won, $" + winnings.toString())
if(balance<=0){
    console.log("you have no money left")
    break;
}
const playAgain = prompt("Do you want to play again? (yes/no)");
if(playAgain !="yes") break;

}
}

