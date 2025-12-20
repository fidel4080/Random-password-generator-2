const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");
const input = document.getElementById("input");
const submitBtn = document.getElementById("submit");

//Random password Generator
function generatePassword(length, includeNumbers, includeUppercase, includeLowercase, includeSymbols){
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolchars = "!#$%^&*()?";

    let allowedChars = "";
    let password = "";

    //Allowed Characters
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeSymbols ? symbolchars : "";

    if(length <= 0){
        display.innerHTML = "Password required";
        return `(passwords must be atleast 1)`;
    }
    
    if(allowedChars.length === 0){
        display.innerHTML = "Password must be atleast one character";
        return `(At least 1 set of character needs to be selected!)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

const passwordLength = 10;
const includeNumbers = true;
const includeUppercase = true;
const includeLowercase = true;
const includeSymbols = true;

function password(){ return generatePassword(passwordLength, 
                                  includeNumbers, 
                                  includeUppercase, 
                                  includeLowercase, 
                                  includeSymbols);
}
  
submitBtn.addEventListener("click",()=>{
    const newPass= password();
    input.value= newPass;
    console.log(newPass);
    display.style.color = "green";
});
clearBtn.addEventListener("click",()=>{
    input.value = "";
    
});
