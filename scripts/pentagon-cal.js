function calpenArea(){
    const p = getInputValueById('pen-p');
    p.value = '';

    const b = getInputValueById('pen-b');
    b.value = '';

     // Validate input values
     if (isNaN(p) || p <= 0) {
        alert("Please enter a valid positive number for the base.");
        return;
    }
    if (isNaN(b) || b <= 0) {
        alert("Please enter a valid positive number for the height.");
        return;
    }

    const area = 0.5 * p * b;
    
    // Show area
    const areaCal = document.getElementById('area-cal');
    areaCal.innerHTML = `
        <p>Pentagon: ${area} cm<sup>2</sup></p>
    `;
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    inputField.value = '';
    return inputValue;
}