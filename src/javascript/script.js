// generate pin script //
// ******************* //
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", function () {

    const generatedPinNumber = document.getElementById("generatedPinNumber");
    generatedPinNumber.value = getPin();
});


function getPin() {

    const randomPin = Math.floor(Math.random() * 10000);
    const pinString = randomPin + "";

    if (pinString.length === 4) {
        return randomPin;
    } else {
        return getPin();
    }
}



// typed pin script //
// **************** //

const calcBody = document.getElementById("calcBody");
calcBody.addEventListener("click", function (e) {
    const pin = e.target.innerText;
    const typedPinNumber = document.getElementById("typedPinNumber");
    if (pin === "<") {
        const splitTypedPinNumber = typedPinNumber.value.split("");
        splitTypedPinNumber.pop();
        const lastTypedPin = splitTypedPinNumber.join("");
        typedPinNumber.value = lastTypedPin;

    } else if (pin === "C") {
        typedPinNumber.value = "";
    } else {
        if (typedPinNumber.value.length === 4) {
            return;
        }
        typedPinNumber.value += pin;
    }
});



// matching pin script //
// ******************* //
// const typedPinNumber = document.getElementById("typedPinNumber");


const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function () {
    const generatedPinNumber = document.getElementById("generatedPinNumber");
    const typedPinNumber = document.getElementById("typedPinNumber");

    if (typedPinNumber.value.length <= 0) {
        return;
    } else {
        if (generatedPinNumber.value === typedPinNumber.value) {
            const succesMessage = document.getElementById("succesMessage");
            succesMessage.classList.replace("hidden", "grid");
            const okBtn = document.getElementById("okBtn");
            okBtn.addEventListener("click", function () {
                succesMessage.classList.replace("grid", "hidden");
            });
        } else {
            const warningMessage = document.getElementById("warningMessage");
            warningMessage.classList.replace("hidden", "grid");
            const okBtn = document.getElementById("okBtn");
            TryAgainBtn.addEventListener("click", function () {
                warningMessage.classList.replace("grid", "hidden");
            });
        }
        generatedPinNumber.value = "";
        typedPinNumber.value = "";
    }
});


