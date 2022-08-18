// ** getTextInput

const getTextInput = (id)=>{

    const textInputField = document.getElementById(id);
    const textInputString = textInputField.innerText;
    const value = parseFloat(textInputString);

    return value;
}

const discountedAmount = (totalAmountGiven)=> totalAmountGiven * 30/100;

// ** setTheAmount

const setTheAmount = (id,amount)=>{
    const displayField = document.getElementById(id);
    displayField.innerText = amount;
}