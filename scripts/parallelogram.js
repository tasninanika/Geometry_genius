function calparaArea(){
    // get base value
    const paraB = document.getElementById('para-b');
    const paraBtext = paraB.value;
    const base = parseFloat(paraBtext);

    // get height value
    const paraH = document.getElementById('para-h');
    const paraHtext = paraH.value;
    const height = parseFloat(paraHtext);
    
    // calculate area
    const area = base * height;
}