function centmet(){
    let celval = document.getElementById('cen').value;
    let formula = celval / 100;
    let meval = document.getElementById('me').value = formula;
}


function metcen(){
    let meval = document.getElementById('me').value;
    let formula = meval * 100;
    let celval = document.getElementById('cen').value = formula;
}

function kiltcen(){
    let kilval = document.getElementById('kil').value;
    let formula = kilval * 100000;
    let cenval  = document.getElementById('cen2').value = formula;
}

function centkil(){
    let cenval = document.getElementById('cen2').value;
    let formula = cenval / 100000;
    let kilval = document.getElementById('kil').value = formula;
}

function kiltmil(){
    let kilval = document.getElementById('kil2').value;
    let formula = kilval / 1.609;
    let milval = document.getElementById('mil').value = formula;
}

function miltkil(){
    let milval = document.getElementById('mil').value;
    let formula = milval * 1.609;
    let kilval = document.getElementById('kil').value = formula;
}

function ytmet(){
    let yval = document.getElementById('y').value;
    let formula = yval / 1.094;
    let metval = document.getElementById('met3').value = formula;
}

function metty(){
    let metval = document.getElementById('met3').value;
    let formula = metval * 1.094;
    let yval = document.getElementById('y').value = formula;
}