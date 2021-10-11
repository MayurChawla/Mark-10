const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const nextButton = document.querySelector("#next-button");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelector(".no-of-notes");

const availableNotes = [2000,500,100,20,10,5,1];

nextButton.addEventListener("click", function validateBillAmount(){
    hideMessage();
    if(billAmount.value>0)
    {
        if(cashGiven.value>= billAmount.value) {
            const amountToBeReturned = cashGiven - billAmount;
            calculateChange(amountToBeReturned);
        }
        else {
            showMessage(
                "Do you wanna wash plates.?"
            );
        }
    }
    else {
        showMessage(
            "Invalid Bill Amount"
        );
    }
});
function hideMessage(){
    errorMessage.style.display = "none";
}
function calculateChange(returnAmount){
    console.log(noOfNotes);
    for(let i=0;i<availableNotes.length;i++)
    {
        const numberofNotes = Math.trunc (
            returnAmount / availableNotes[i]
        );
        returnAmount %= availableNotes[i];
        noOfNotes[i].innerText = numberofNotes;
    }
}

function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}