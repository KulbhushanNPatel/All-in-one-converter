function kiltg(){
    let kilval = document.getElementById('kil').value;
    let formula = kilval * 1000;
    let gval = document.getElementById('g').value = formula;
}

function gtkil(){
    let gval = document.getElementById('g').value;
    let formula = gval / 1000;
    let kilval = document.getElementById('kil').value = formula;
}

function ptkil(){
    let pval = document.getElementById('p').value;
    let formula = pval / 2.205;
    let kilval = document.getElementById('kil2').value = formula;
}

function kiltp(){
    let kilval = document.getElementById('kil2').value;
    let formula = kilval * 2.205;
    let pval = document.getElementById('p').value = formula;
}

function ttkil(){
    let tonval = document.getElementById('ton').value;
    let formula = tonval * 1000;
    let kilval = document.getElementById('kil3').value = formula;
}

function kiltton(){
    let kilval = document.getElementById('kil3').value;
    let formula = kilval / 1000;
    let tonval = document.getElementById('ton').value = formula;
}

