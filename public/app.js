const board=document.getElementById("board");
const buttons=document.querySelectorAll(".btn");
const resultText=document.getElementById("result");
const resetBtn=document.getElementById("resetBtn");
let currentPlayer="X";
let gameBoard=["","","","","","","","",""];
let gameActive=true;
const winCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
function checkWinner(){
    for(let combo of winCombos){
        const[a,b,c]=combo;
        if(gameBoard[a] && gameBoard[a]===gameBoard[b])
    }
}