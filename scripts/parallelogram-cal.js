function calparaArea(){
    // get base value
    const paraB = document.getElementById('para-b');
    const paraBtext = paraB.value;
    const base = parseFloat(paraBtext);
    paraB.value = '';

    // get height value
    const paraH = document.getElementById('para-h');
    const paraHtext = paraH.value;
    const height = parseFloat(paraHtext);
    paraH.value = '';

     // Validate input values
     if (isNaN(base) || base <= 0) {
        alert("Please enter a valid positive number for the base.");
        return;
    }
    if (isNaN(height) || height <= 0) {
        alert("Please enter a valid positive number for the height.");
        return;
    }
    
    // calculate area
    const area = base * height;

    // Show area
    const areaCal = document.getElementById('area-cal');
    areaCal.innerHTML = `
        <p>Parallelogram: ${area} cm<sup>2</sup></p>
    `;
}