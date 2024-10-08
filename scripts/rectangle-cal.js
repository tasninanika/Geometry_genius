function calrecArea(){
    // get rec base
    const recW = document.getElementById('rec-w');
    const recWtext = recW.value;
    const width = parseFloat(recWtext);
    recW.value = '';

    // get rec height
    const recL = document.getElementById('rec-l');
    const recLtext = recL.value;
    const length = parseFloat(recLtext);
    recL.value = '';

    if (isNaN(width) || width <= 0) {
        alert("Please enter a valid positive number for the base.");
        return;
    }
    if (isNaN(length) || length <= 0) {
        alert("Please enter a valid positive number for the height.");
        return;
    }

    // calculate area
    const area = width * length;

    // Show area
    const areaCal = document.getElementById('area-cal');
    areaCal.innerHTML = `
        <p>Rectangle: ${area} cm<sup>2</sup></p>
    `;

    
}