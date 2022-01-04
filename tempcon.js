function celtkel(){
    let celval = document.getElementById('cel').value;
    let formula = Number(celval) + 273.15;
    let kelval = document.getElementById('kel').value = formula;
}

function keltcel(){
    let kelval = document.getElementById('kel').value;
    let formula = kelval - 273.15;
    let celval = document.getElementById('cel').value = formula;
}


function celtfar(){
    let celval = document.getElementById('cel2').value;
    let formula = celval * 9 / 5 + 32;
    let farval = document.getElementById('far').value = formula;
}

function fartcel(){
    let farval = document.getElementById('far').value;
    let formula = (farval - 32) * 5 / 9 ;
    let celval = document.getElementById('cel2').value = formula;
}

function keltfar(){
    let kelval = document.getElementById('kel2').value;
    let formula = (kelval - 273.15) * 9 / 5 + 32;
    let farval = document.getElementById('far2').value = formula;
}

function fartkel(){
    let farval = document.getElementById('far2').value;
    let formula = (farval - 32) * 5 / 9 + 273.15;
    let kelval = document.getElementById('kel2').value = formula;
}