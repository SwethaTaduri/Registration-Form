
let formData = document.querySelector(".form-class");
let submitButton = document.querySelector(".btn-class");
let errorMessages = document.querySelectorAll(".errMsg");
let emptyMessages = document.querySelectorAll(".emptyfield")
let visibility = document.getElementById("button-class");
let enteredField ;
let fName,lName,emailId,passCode;
let fnameTarget ,lnameTarget,emailTarget,passCodeTarget;
let fnameFlag,lnameFlag,emailFlag,passCodeFlag;

let nameRegex = /^[a-z]+$/i;
let emailIdRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let passCodeRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for(let msg of errorMessages){
    msg.classList.add("d-none");
}
for(let errs of emptyMessages){
    errs.classList.add("d-none");
}

formData.addEventListener("keyup",(e)=> {
   e.preventDefault();
   enteredField = e.target.dataset.key;
    
   /* console.log(e.target);               prints <input data-key="firstname" type="text" placeholder="First Name">
   console.log(e.target.dataset.key);      prints the delegation data-key(firstname) where the value is entered
    console.log(e.target.value);           prints the entered value on the screen */

   switch(enteredField){
    case "firstname":
        fName = e.target.value;
        fnameTarget = e.target;
        break;
    case "lastname":
        lName = e.target.value;
        lnameTarget = e.target;
        break;
    case "email":
        emailId = e.target.value;
        emailTarget = e.target;
        break;
    case "password":
        passCode = e.target.value;
        passCodeTarget = e.target;
        break;
    default:
        fName = lName = emailId = passCode = "";
        break;
   }
})

submitButton.addEventListener("click",(e)=> {
    e.preventDefault();
    console.log(fName,lName,emailId,passCode);
    if(fName){
        emptyMessages[0].classList.add("d-none");
        if(!nameRegex.test(fName)){
            fnameTarget.classList.add("error");
            errorMessages[0].classList.remove("d-none");
            fnameFlag = false; 
        }
        else{
            fnameTarget.classList.remove("error");
            errorMessages[0].classList.add("d-none"); 
            fnameFlag = true; 
        }
    }
    else{
        emptyMessages[0].classList.remove("d-none"); 
    }
    if(lName){
        emptyMessages[1].classList.add("d-none");
        if(nameRegex.test(lName)){
            lnameTarget.classList.remove("error");
            errorMessages[1].classList.add("d-none"); 
            lnameFlag = true; 
        }
        else{
            lnameTarget.classList.add("error");
            errorMessages[1].classList.remove("d-none"); 
            lnameFlag = false; 
        }
    }
    else{
        emptyMessages[1].classList.remove("d-none"); 
    }
    if(emailId){
        emptyMessages[2].classList.add("d-none");
        if(emailIdRegex.test(emailId)){
            emailTarget.classList.remove("error");
            errorMessages[2].classList.add("d-none");
            emailFlag= true;
        }
        else{
            emailTarget.classList.add("error");
            errorMessages[2].classList.remove("d-none"); 
            emailFlag= false;
        }
    }
    else{
        emptyMessages[2].classList.remove("d-none"); 
    }
    if(passCode){
        emptyMessages[3].classList.add("d-none");
        if(passCodeRegex.test(passCode)){
            passCodeTarget.classList.remove("error");
            errorMessages[3].classList.add("d-none"); 
            passCodeFlag = true;
        }
        else{
            passCodeTarget.classList.add("error");
            errorMessages[3].classList.remove("d-none"); 
            passCodeFlag = false;
        }
    }
    else{
        emptyMessages[3].classList.remove("d-none"); 
    }

    if(fnameFlag && lnameFlag && emailFlag && passCodeFlag){
        fName = lName = emailId = passCode = "";
        window.location.href="success.html";
    }
});

visibility.addEventListener("click",(e)=> {
    e.preventDefault();
   if(passCodeTarget.getAttribute("type") === "text" ) {
    passCodeTarget.setAttribute("type","password");
   }else{
    passCodeTarget.setAttribute("type","text");
   }
})
