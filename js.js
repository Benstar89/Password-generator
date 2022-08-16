const passwordInput = document.querySelector(".password-input");
const passwordLength = document.querySelector(".password-length-input");
const useUpper = document.querySelector(".useUpper");
const useNumber = document.querySelector(".useNumber");
const useSymbols = document.querySelector(".useSymbols");
const useLower = document.querySelector(".useLower");


const upper = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "K" , "J" , "L" , "M" , "N" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z" ,];
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ,];
const symbols = ["!" , '@' , "#" , "%" , "^" , "&" , "*" , "(" , ")" , "-" , "=" , "+" , "_" , "~" , "`",];
const numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0 ,];

let thePassword = ""; 
let whatUserWant = [];

const generate = () => {
    if(useLower.checked){
        whatUserWant = [...lower]
    }
    if(useUpper.checked){
        whatUserWant = [...whatUserWant,...upper];
    }
    if(useSymbols.checked){
        whatUserWant = [...whatUserWant,...symbols]
    }
    if(useNumber.checked){
        whatUserWant = [...whatUserWant , ...numbers];
    }
    for(let i = 0; i < passwordLength.value; i++){
        thePassword += whatUserWant[Math.floor(Math.random() * whatUserWant.length)]
    }
    if(passwordLength.value == "" || passwordInput.value == String){
        alert("Pleas enter the length of the password in Password length Input !!! ")
    }
    if((!useLower.checked && !useNumber.checked) && (!useSymbols.checked && !useUpper.checked)){
        alert("Choose Atleast one types of Character !!!")
        thePassword = "";
    }
    passwordInput.value = thePassword; 
    whatUserWant = "";
    thePassword = "";
}

const copy = () => {
    passwordInput.select()
    passwordInput.setSelectionRange(0 , 99999);
    navigator.clipboard.writeText(passwordInput.value);
    alert("the password is copeid in keyboard")
}

document.querySelector(".copy-btn").addEventListener("click" , copy);
generateBtn = document.querySelector(".generateBtn").addEventListener("click",generate);