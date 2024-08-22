function calrhoArea(){
    // get base value
    const rhoD1 = document.getElementById('rho-d1');
    const rhoD1text = rhoD1.value;
    const D1 = parseFloat(rhoD1text);

    // get height value
    const rhoD2 = document.getElementById('rho-d2');
    const rhoD2text = rhoD2.value;
    const D2 = parseFloat(rhoD2text);
    
    // calculate area
    const area = 0.5 * D1 * D2;
}