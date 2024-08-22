// click button
// from input field fetch value
// get diye ene value ta fetch korbo 
// parsefloat diye float value kore nibo karon amader float value thakte pare
// same vabe height ke o fetch korbo
// 




function caltriArea(){
    // get base value
    const triB = document.getElementById('tri-b');
    const triBtext = triB.value;
    const base = parseFloat(triBtext);

    // get height value
    const triH = document.getElementById('tri-h');
    const triHtext = triH.value;
    const height = parseFloat(triHtext);
    
    // calculate area
    const area = 0.5 * base * height;

    // show area
    // const triArea = document.getElementById('tri-area');
    // triArea.innerText = area;
}