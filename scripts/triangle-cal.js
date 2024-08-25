// click button
// from input field fetch value
// get diye ene value ta fetch korbo 
// parsefloat diye float value kore nibo karon amader float value thakte pare
// same vabe height ke o fetch korbo
// 




function caltriArea() {
    // Get base value
    const triB = document.getElementById('tri-b');
    const base = parseFloat(triB.value);

    // Get height value
    const triH = document.getElementById('tri-h');
    const height = parseFloat(triH.value);
    
    // Validate input values
    if (isNaN(base) || base <= 0) {
        alert("Please enter a valid positive number for the base.");
        return;
    }
    if (isNaN(height) || height <= 0) {
        alert("Please enter a valid positive number for the height.");
        return;
    }

    // Calculate area
    const area = 0.5 * base * height;

    // Show area
    const areaCal = document.getElementById('area-cal');
    areaCal.innerHTML = `
        <p>Triangle: ${area} cm<sup>2</sup></p>
    `;
}