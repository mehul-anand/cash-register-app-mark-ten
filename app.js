var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const nextButton = document.querySelector("#next-button")
const cashDiv = document.querySelector(".cash-given-div")
const dispMessage = document.querySelector("#error-message");
const notes = document.querySelectorAll(".no-of-notes")
const tableDiv = document.querySelector("#change-table")
const denominations = [2000, 500, 100, 20, 10, 5, 1]

nextButton.addEventListener("click", function next() {
    hideMessage()
    if (Number(billAmount.value) > 0) {
        nextButton.style.display = "none";
        cashDiv.style.display = "flex";
        cashDiv.style.flex - direction == "column";
        cashDiv.style.width = "50vh";
    } else if (Number(billAmount.value) === 0) {
        showMessage("Bill Amount can't be zero (0)");
    } else {
        showMessage("Bill Amount can't be negative");
    }
})


checkButton.addEventListener("click", function cash() {
    hideMessage()
    if  (Number(billAmount.value) > 0) {
        if (Number(cashGiven.value > 0)) {
            if (Number(cashGiven.value) > Number(billAmount.value)) {
                var diff = Number(cashGiven.value) - Number(billAmount.value)
                calculateChange(diff)
            } else if (Number(cashGiven.value) === Number(billAmount.value)) {
                showMessage("No change is to be returned")
                cashDiv.style.display = "none";
                tableDiv.style.display = "none";
                nextButton.style.display = "block"
            } else {
                showMessage("Bill ammount is bigger than the cash given by the customer")
                cashDiv.style.display = "none";
                tableDiv.style.display = "none";
                nextButton.style.display = "block"
            }
        } else {
            cashDiv.style.display = "none";
            tableDiv.style.display = "none";
            nextButton.style.display = "block"
            showMessage("Cash can't be negative")
        }
    }else if (Number(billAmount.value) === 0){
        showMessage("Bill Amount can't be zero (0)");
        cashDiv.style.display = "none";
        tableDiv.style.display = "none";
        nextButton.style.display = "block";
    }else{
        showMessage("Bill Amount can't be negative");
        cashDiv.style.display = "none";
        tableDiv.style.display = "none";
        nextButton.style.display = "block";
    }
});


function calculateChange(diff) {
    for (i = 0; i < denominations.length; i = i + 1) {
        var noOfNotes = Math.trunc(diff / denominations[i]);
        diff = diff % denominations[i];
        notes[i].innerText = noOfNotes;
        tableDiv.style.display = "block";
    }

}

function hideMessage() {
    dispMessage.style.display = "none";
}

function showMessage(message) {
    dispMessage.style.display = "block";
    dispMessage.innerText = message;
}