function showTipo(){
    let tipo = document.getElementById('tipo_helado');
    let valor = document.getElementById('tipo');
    if(tipo.checked==true){
        valor.innerHTML = "Especial"
    }else{
        valor.innerHTML = "Clasico"
    }
}

function showTama(){
    let tipo = document.getElementById('tipo_tamano');
    let valor = document.getElementById('tipotama');
    if(tipo.checked==true){
        valor.innerHTML = "Doble"
    }else{
        valor.innerHTML = "Sencillo"
    }
}
