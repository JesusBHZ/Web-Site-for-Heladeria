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
    let valor = document.getElementById('tipoestillo');
    if(tipo.checked==true){
        valor.innerHTML = "Doble"
    }else{
        valor.innerHTML = "Sencillo"
    }
}

function heladosTotal(){
    let tipo = document.getElementById('tipo_helado');
    let estilo = document.getElementById('tipo_tamano');
    let tamano = document.getElementById('tamano').value;
    let sabor = document.getElementById('sabores');
    let saborEspeciales = document.getElementById('sabores2');
    let envase = document.getElementById('envase').value;
    let cobertura = document.getElementById('cobertura').value;
    let total = document.getElementById('helados_total');
    let p = document.getElementById('valorP');
    let p2 = document.getElementById('valorP2');
    var total_final = 48;
    if(tipo.checked==true){
        document.getElementById('option_tamano_2').innerHTML = '1/2 Litro $126';              
        document.getElementById('option_tamano_3').innerHTML = '1 Litro $229';              
    }

    if(tamano == "1"){
        if(tipo.checked==true && estilo.checked==true){
            total_final = 113;
            p.innerHTML = "$113";
            p2.innerHTML = "$113";
            saborEspeciales.style.display = 'block';
            sabor.style.display = 'none';
        }else if(tipo.checked==false && estilo.checked==false){
            total_final = 48;
            p.innerHTML = "$48";
            p2.innerHTML = "$48";
            saborEspeciales.style.display = 'none';
            sabor.style.display = 'block';
        }else if(tipo.checked==true && estilo.checked==false){
            total_final = 67;
            p.innerHTML = "$67";
            p2.innerHTML = "$67";
            saborEspeciales.style.display = 'block';
            sabor.style.display = 'none';
        }else if(tipo.checked==false && estilo.checked==true){
            total_final = 79;
            p.innerHTML = "$79";
            p2.innerHTML = "$79";
            saborEspeciales.style.display = 'none';
            sabor.style.display = 'block';
        }
        

        if(envase == "1"){
            total_final = total_final + 4;
        }else if(envase == "2"){
            total_final = total_final + 10;
        }else if(envase == "3"){
            total_final = total_final + 28;
        }

        if(cobertura == "1"){
            total_final = total_final;
        }else if(cobertura == "2"){
            total_final = total_final + 13;
        }else if(cobertura == "3"){
            total_final = total_final + 26;
        }

    }
    
    else if(tamano == "2"){
        p.style.display = 'none';
        estilo.style.display = 'none';
        document.getElementById('estiloo').style.display = 'none';
        document.getElementById('p_estilo').style.display = 'none';
        document.getElementById('envase').style.display = 'none';
        document.getElementById('cobertura').style.display = 'none';
        if(tipo.checked==true){
            total_final = 126;
            document.getElementById('option_tamano_2').innerHTML = '1/2 Litro $126';              
        }else{
            total_final = 107;
        }
    }else if(tamano == "3"){
        p.style.display = 'none';
        estilo.style.display = 'none';
        document.getElementById('estiloo').style.display = 'none';
        document.getElementById('p_estilo').style.display = 'none';
        document.getElementById('envase').style.display = 'none';
        document.getElementById('cobertura').style.display = 'none';   
        if(tipo.checked==true){
            total_final = 229;
            document.getElementById('option_tamano_3').innerHTML = '1 Litro $229';              
        }else{
            total_final = 194;

        }
    }
    console.log(total_final)
    total.innerHTML = "Helados: $"+total_final;
}

function listo(){
    let tipo = document.getElementById('tipo_helado');
    let estilo = document.getElementById('tipo_tamano');
    let tamano = document.getElementById('tamano').value;
    let sabor = document.getElementById('sabores').value;
    let envase = document.getElementById('envase').value;
    let cobertura = document.getElementById('cobertura').value;
    let total = document.getElementById('total');

    if(tamano == "0" || sabor == "0" || envase == "0" || cobertura == "0"){
        alert("Debes seleccionar todas las opciones")
    }
}