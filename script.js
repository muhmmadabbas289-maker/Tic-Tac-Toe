let modeBtn = document.querySelector("#mode");
let currentMode ="dark"
modeBtn.addEventListener("click",()=>{
    if(currentMode === "dark"){
        currentMode = "#548687";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";

    }
    else{
        currentMode = "dark";
        document.querySelector("body").style.backgroundColor = "#548687";
        document.querySelector("body").style.color = "dark";
    }
    console.log(currentMode);
});




let boxes = document.querySelectorAll(".box");
let btn =document.querySelector("#btn");
let newbtn = document.querySelector("#new-btn");
let msgContiner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");





let turn0 = true;
const winPatterns =[
    [0, 1, 2], 
    [0, 3, 6],
    [0, 4, 8],
    [1, 4 , 7],
    [2, 5, 8],
    [2 , 4, 6],
    [3, 4, 5],
    [6, 7 ,8],
];
const resetGame =()=>{
    turn0 = true;
    enabledBoxes();
    msgContiner.classList.add("hide")
    }

boxes.forEach((box) => {
    box.addEventListener("click",()=>{

        if(turn0){
            box.innerText= "0";
            turn0 =false;
        } else{
            box.innerText ="X";
            turn0 = "false";
        }
    box.disabled = "true";

    checkWinner();

    });
});
const disabledBoxes =()=>{
    for(let box of boxes ){
        box.disabled = true;
    }
};
const enabledBoxes =()=>{
    for(let box of boxes ){
        box.disabled = false;
        box.innerText ="";
    }
}
const showWinner =(Winner)=>{
    msg.innerText = `Congratutlations,Winner is ${Winner}`;
    msgContiner.classList.remove("hide");
    disabledBoxes();
}

const checkWinner =()=>{

    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;    

            if(pos1Val != "" &&pos2Val != "" && pos3Val != ""){
                if(pos1Val===pos2Val && pos2Val === pos3Val){
                    showWinner(pos1Val);
                }
            }
    }
};   
newbtn.addEventListener("click",resetGame);
btn.addEventListener("click",resetGame);


