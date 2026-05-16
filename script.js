
let submitButton = document.querySelector(".email-btn")
let errorButton = document.querySelector(".error-btn")
let emailInput = document.querySelector(".email-input")
let emailWrapper = document.querySelector(".email-wrapper")
let errorText = document.querySelector(".error-text")

function checkEmail(email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email !== " " && emailRegex.test(email)){
            return true;
        }
        else {return false}
    }


submitButton.addEventListener("click", ()=>{
    let userEmail = emailInput.value;


    let correctEmail = checkEmail(userEmail)

    if (!correctEmail){
        errorButton.classList.add("show-error")
        emailWrapper.classList.add("border-color")
        errorText.textContent = "Please provide a valid email"
    }
    else {
        errorButton.classList.remove("show-error")
        emailWrapper.classList.remove("border-color")
        errorText.textContent = " "
    }
  
})



