function calpenArea(){
    const p = getInputValueById('pen-p');

    const b = getInputValueById('pen-b');

    const area = 0.5 * p * b;
    console.log(area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}