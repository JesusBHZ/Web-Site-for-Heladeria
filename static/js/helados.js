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
    let cantidadH = document.getElementById('cantidadHelados').value;


    var total_final = 48;
    if(tipo.checked==true){
        document.getElementById('option_tamano_2').innerHTML = '1/2 Litro $126';              
        document.getElementById('option_tamano_3').innerHTML = '1 Litro $229';
        document.getElementById('sabores2').style.display = '';
        document.getElementById('sabores').style.display = 'none';
    }else{
        document.getElementById('option_tamano_2').innerHTML = '1/2 Litro $107';              
        document.getElementById('option_tamano_3').innerHTML = '1 Litro $194'; 
        document.getElementById('sabores2').style.display = 'none';
        document.getElementById('sabores').style.display = '';
    }

    if(tamano == "1"){
        p.style.display = '';
        estilo.style.display = '';
        document.getElementById('estiloo').style.display = '';
        document.getElementById('p_estilo').style.display = '';
        document.getElementById('envase').style.display = '';
        document.getElementById('cobertura').style.display = '';
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
    total_final = total_final * cantidadH;
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
        alert("Debes seleccionar todas las opciones");
    }
}




function paletasEspeciales(){
    let total_paletas = document.getElementById('paletas_total');
    var total_paletasEspecial = 0;
    var cantidadE1 = 0;
    var cantidadE2 = 0;
    var cantidadE3 = 0;
    var cantidadE4 = 0;


    // ESPECIALES
    if(document.getElementById('especial_1').checked==true){
        var ate = "Ate";
        cantidadE1 = document.getElementById('numberE1').value;
        if(Math.floor(cantidadE1) < 0 || Math.floor(cantidadE1) > 100){
            alert("La cantidad no puede ser negativa o mas de 100")
        }
    }
    if(document.getElementById('especial_2').checked==true){
        var chocolate= "Chocolate";
        cantidadE2 = document.getElementById('numberE2').value;
        if(Math.floor(cantidadE2) < 0 || Math.floor(cantidadE2) > 100){
            alert("La cantidad no puede ser negativa o mas de 100")
        }
        
    }
    if(document.getElementById('especial_3').checked==true){
        var chocosA = "Choco sin azucar";
        cantidadE3 = document.getElementById('numberE3').value;
        if(Math.floor(cantidadE3) < 0 || Math.floor(cantidadE3) > 100){
            alert("La cantidad no puede ser negativa o mas de 100")
        }
        
    }
    if(document.getElementById('especial_4').checked==true){
        var mazapan = "Mazapan";
        cantidadE4 = document.getElementById('numberE4').value;
        if(Math.floor(cantidadE4) < 0 || Math.floor(cantidadE4) > 100){
            alert("La cantidad no puede ser negativa o mas de 100")
        }
    }


    

    //console.log(especiales)
    total_paletasEspecial = Math.floor(cantidadE1) + Math.floor(cantidadE2) + Math.floor(cantidadE3) + Math.floor(cantidadE4); 
    total_paletasEspecial = total_paletasEspecial * 37;
    total_paletas.innerHTML = "Paletas: $"+total_paletasEspecial;




    /*var paletasEspeciales = paletasEspeciales.push({ 
        "nombre"    : arrayNombres[i],
        "apellido"  : arrayApellido[i],
        "ciudad"    : arrayCiudad[i] 
    });*/

}

function borrarPaletasEspeciales(){
    document.getElementById('especial_1').checked = false;
    document.getElementById('especial_2').checked = false;
    document.getElementById('especial_3').checked = false;
    document.getElementById('especial_4').checked = false;
    document.getElementById('numberE1').value = 1;
    document.getElementById('numberE2').value = 1;
    document.getElementById('numberE3').value = 1;
    document.getElementById('numberE4').value = 1;
}