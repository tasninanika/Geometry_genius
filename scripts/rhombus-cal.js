function calrhoArea(){
    // get base value
    const rhoD1 = document.getElementById('rho-d1');
    const rhoD1text = rhoD1.value;
    const D1 = parseFloat(rhoD1text);

    // get height value
    const rhoD2 = document.getElementById('rho-d2');
    const rhoD2text = rhoD2.value;
    const D2 = parseFloat(rhoD2text);

     // Validate input values
     if (isNaN(D1) || D1 <= 0) {
        alert("Please enter a valid positive number for the base.");
        return;
    }
    if (isNaN(D2) || D2 <= 0) {
        alert("Please enter a valid positive number for the height.");
        return;
    }
    
    // calculate area
    const area = 0.5 * D1 * D2;

    const areaCal = document.getElementById('area-cal');
    areaCal.innerHTML = `
        <p>Rohmbus: ${area} cm<sup>2</sup></p>
    `;

}