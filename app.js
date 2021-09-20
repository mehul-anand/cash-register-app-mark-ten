const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
errorMessage= document.querySelector("#error-message");
checkButton.addEventListener("click",function cash (){
    errorMessage.style.display="none";
    if (billAmount.value > 0){
        if (cashGiven.value >= billAmount.value){
        }else{
            errorMessageShow("Bill Amount cannot be greater than the cash given")
        }
    }else{
        errorMessageShow("Bill Amount can't be negative")
    }
});

function errorMessageShow(message){
    errorMessage.style.display="block";
    errorMessage.innerText=message;
}