function calrecArea(){
    // get rec base
    const recW = document.getElementById('rec-w');
    const recWtext = recW.value;
    const width = parseFloat(recWtext);

    // get rec height
    const recL = document.getElementById('rec-l');
    const recLtext = recL.value;
    const length = parseFloat(recLtext);

    // calculate area
    const area = width * length;
}