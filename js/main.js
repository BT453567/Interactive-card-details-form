const cardholderName = document.getElementById("cardholder-name");
const cardholderNameError = document.getElementById("cardholder-name-error");

const cardNumber = document.getElementById("card-number");
const cardNumberError = document.getElementById("card-number-error");

const expMonth = document.getElementById("exp-month");
const expYear = document.getElementById("exp-year");
const expiryDateError = document.getElementById("expiry-date-error");

const cvc = document.getElementById("cvc");
const cvcError = document.getElementById("cvc-error");

// credit card graphic elements 
const cardImageNumber = document.getElementById("card-img-number");
const cardImageName = document.getElementById("card-img-name");
const cardImageMonth = document.getElementById("card-img-month");
const cardImageYear = document.getElementById("card-img-year");
const cardImageCvc = document.getElementById("card-img-cvc");

const form = document.getElementById("form");
const formSuccess = document.getElementById("form-success");

const successButton = document.getElementById("success-button");

function handleSubmit(e) {
    e.preventDefault();

    let errorsDetected = false;

    // reset all errors and borders to default
    cardholderName.classList.remove('error-border');
    cardNumber.classList.remove('error-border');
    expMonth.classList.remove('error-border');
    expYear.classList.remove('error-border');
    cardholderNameError.classList.add('hidden');
    cardNumberError.classList.add('hidden');
    expiryDateError.classList.add('hidden');
    cvc.classList.remove("error-border");
    cvcError.classList.add("hidden");

    // obtain value and remove any whitespace
    // check if value blank
    // check if value all numbers if applicable
    if (cardholderName.value.trim() === "") {
        cardholderNameError.classList.remove('hidden');
        cardholderNameError.textContent = "Can't be blank";
        cardholderName.classList.add('error-border');
        errorsDetected = true;
    }

    if (cardNumber.value.trim() === "") {
        cardNumberError.classList.remove('hidden');
        cardNumberError.textContent = "Can't be blank";
        cardNumber.classList.add('error-border');
        errorsDetected = true;
    } 

    if (expMonth.value.trim() === "" || expYear.value.trim() === "") {
        expiryDateError.classList.remove('hidden');
        expiryDateError.textContent = "Can't be blank";
        if (expMonth.value.trim() === "") {
            expMonth.classList.add('error-border');
        }
        if (expYear.value.trim() === "") {
            expYear.classList.add('error-border');
        }
        errorsDetected = true;
    } 

    if (cvc.value.trim() === "") {
        cvcError.classList.remove('hidden');
        cvcError.textContent = "Can't be blank";
        cvc.classList.add('error-border');
        errorsDetected = true;
    }

    if(!errorsDetected) {
        form.classList.add("hidden");
        formSuccess.classList.remove("hidden");
    }
}

function handleCardNumberInput(event) {
    const input = event.target;
    digitsOnly = input.value.replace(/\D/g, '');
    removeSpaces = digitsOnly.replace(/\s+/g, '');
    maxDigits = removeSpaces.slice(0, 16);
    addSpaces = maxDigits.replace(/(\d{4})(?=\d)/g, '$1 ');
    input.value = addSpaces;
    cardImageNumber.textContent = addSpaces;
}

function handleCardholderNameInput(event) {
    const input = event.target;
    maxCharacters = input.value.slice(0,22).toUpperCase();
    input.value = maxCharacters;
    cardImageName.textContent = maxCharacters;
}

function handleExpiryMonthInput(event) {
    const input = event.target;
    digitsOnly = input.value.replace(/\D/g, '');
    maxCharacters = digitsOnly.slice(0,2);
    input.value = maxCharacters;
    cardImageMonth.textContent = maxCharacters;
}

function handleExpiryYearInput(event) {
    const input = event.target;
    digitsOnly = input.value.replace(/\D/g, '');
    maxCharacters = digitsOnly.slice(0,2);
    input.value = maxCharacters;
    cardImageYear.textContent = maxCharacters;
}

function handleCvcInput(event) {
    const input = event.target;
    digitsOnly = input.value.replace(/\D/g, '');
    maxCharacters = digitsOnly.slice(0,3);
    input.value = maxCharacters;
    cardImageCvc.textContent = maxCharacters;
}

function clearSuccess(event) {
    form.reset();
    form.classList.remove("hidden");
    formSuccess.classList.add("hidden");
    cardImageNumber.textContent = "0000 0000 0000 0000";
    cardImageName.textContent = "";
    cardImageMonth.textContent = "00";
    cardImageYear.textContent = "00";
    cardImageCvc.textContent = "000";
}

document.addEventListener('submit', handleSubmit);

cardNumber.addEventListener("input", handleCardNumberInput);
cardholderName.addEventListener("input", handleCardholderNameInput);
expMonth.addEventListener("input", handleExpiryMonthInput);
expYear.addEventListener("input", handleExpiryYearInput);
cvc.addEventListener("input", handleCvcInput);

successButton.addEventListener("click", clearSuccess);