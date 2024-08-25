function calellArea(){
    const ellA = document.getElementById('ell-a');
    const ellAtext = ellA.value;
    const a = parseFloat(ellAtext);
    ellA.value = '';

    const ellB = document.getElementById('ell-b');
    const ellBtext = ellB.value;
    const b = parseFloat(ellBtext);
    ellB.value = '';

    // Validate input values
    if (isNaN(a) || a <= 0) {
        alert("Please enter a valid positive number for the base.");
        return;
    }
    if (isNaN(b) || b <= 0) {
        alert("Please enter a valid positive number for the height.");
        return;
    }

    const area = 3.1416 * a * b;

    const areaCal = document.getElementById('area-cal');
    areaCal.innerHTML = `
        <p>Ellipse: ${area} cm<sup>2</sup></p>
    `;
}