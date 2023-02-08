var total_final_helados = 48;
var total_paletasEspecial = 0;
var total_paletasCrema = 0;
var total_paletasAgua = 0;
var total_Frappe_Leche = 0;
var total_Frappe_Agua = 0;
var total_Frappe_Hleado_Clasico = 0;
var total_Frappe_Hleado_Especial = 0;

function showTipo() {
  let tipo = document.getElementById("tipo_helado");
  let valor = document.getElementById("tipo");
  if (tipo.checked == true) {
    valor.innerHTML = "Especial";
  } else {
    valor.innerHTML = "Clasico";
  }
}

function showTama() {
  let tipo = document.getElementById("tipo_tamano");
  let valor = document.getElementById("tipoestillo");
  if (tipo.checked == true) {
    valor.innerHTML = "Doble";
  } else {
    valor.innerHTML = "Sencillo";
  }
}

function heladosTotal() {
  let tipo = document.getElementById("tipo_helado");
  let estilo = document.getElementById("tipo_tamano");
  let tamano = document.getElementById("tamano").value;
  let sabor = document.getElementById("sabores");
  let saborEspeciales = document.getElementById("sabores2");
  let envase = document.getElementById("envase").value;
  let cobertura = document.getElementById("cobertura").value;
  let total = document.getElementById("helados_total");
  let p = document.getElementById("valorP");
  let p2 = document.getElementById("valorP2");
  let cantidadH = document.getElementById("cantidadHelados").value;

  if (tipo.checked == true) {
    document.getElementById("option_tamano_2").innerHTML = "1/2 Litro $126";
    document.getElementById("option_tamano_3").innerHTML = "1 Litro $229";
    document.getElementById("sabores2").style.display = "";
    document.getElementById("sabores").style.display = "none";
  } else {
    document.getElementById("option_tamano_2").innerHTML = "1/2 Litro $107";
    document.getElementById("option_tamano_3").innerHTML = "1 Litro $194";
    document.getElementById("sabores2").style.display = "none";
    document.getElementById("sabores").style.display = "";
  }

  if (tamano == "1") {
    p.style.display = "";
    estilo.style.display = "";
    document.getElementById("estiloo").style.display = "";
    document.getElementById("p_estilo").style.display = "";
    document.getElementById("envase").style.display = "";
    document.getElementById("cobertura").style.display = "";
    if (tipo.checked == true && estilo.checked == true) {
      total_final_helados = 113;
      p.innerHTML = "$113";
      p2.innerHTML = "$113";
      saborEspeciales.style.display = "block";
      sabor.style.display = "none";
    } else if (tipo.checked == false && estilo.checked == false) {
      total_final_helados = 48;
      p.innerHTML = "$48";
      p2.innerHTML = "$48";
      saborEspeciales.style.display = "none";
      sabor.style.display = "block";
    } else if (tipo.checked == true && estilo.checked == false) {
      total_final_helados = 67;
      p.innerHTML = "$67";
      p2.innerHTML = "$67";
      saborEspeciales.style.display = "block";
      sabor.style.display = "none";
    } else if (tipo.checked == false && estilo.checked == true) {
      total_final_helados = 79;
      p.innerHTML = "$79";
      p2.innerHTML = "$79";
      saborEspeciales.style.display = "none";
      sabor.style.display = "block";
    }

    if (envase == "1") {
      total_final_helados = total_final_helados + 4;
    } else if (envase == "2") {
      total_final_helados = total_final_helados + 10;
    } else if (envase == "3") {
      total_final_helados = total_final_helados + 28;
    }

    if (cobertura == "1") {
      total_final_helados = total_final_helados;
    } else if (cobertura == "2") {
      total_final_helados = total_final_helados + 13;
    } else if (cobertura == "3") {
      total_final_helados = total_final_helados + 26;
    }
  } else if (tamano == "2") {
    p.style.display = "none";
    estilo.style.display = "none";
    document.getElementById("estiloo").style.display = "none";
    document.getElementById("p_estilo").style.display = "none";
    document.getElementById("envase").style.display = "none";
    document.getElementById("cobertura").style.display = "none";
    if (tipo.checked == true) {
      total_final_helados = 126;
      document.getElementById("option_tamano_2").innerHTML = "1/2 Litro $126";
    } else {
      total_final_helados = 107;
    }
  } else if (tamano == "3") {
    p.style.display = "none";
    estilo.style.display = "none";
    document.getElementById("estiloo").style.display = "none";
    document.getElementById("p_estilo").style.display = "none";
    document.getElementById("envase").style.display = "none";
    document.getElementById("cobertura").style.display = "none";
    if (tipo.checked == true) {
      total_final_helados = 229;
      document.getElementById("option_tamano_3").innerHTML = "1 Litro $229";
    } else {
      total_final_helados = 194;
    }
  }
  console.log(total_final_helados);
  total_final_helados = total_final_helados * cantidadH;
  total.innerHTML = "Helados: $" + total_final_helados;
}

function heladoAceptado() {
  let tipo = document.getElementById("tipo_helado");
  let estilo = document.getElementById("tipo_tamano");
  let tamano = document.getElementById("tamano").value;
  let envase = document.getElementById("envase").value;
  let cobertura = document.getElementById("cobertura").value;
  let cantidad = document.getElementById("cantidadHelados").value;
  let sabor = "";
  if (tipo.checked == true) {
    sabor = document.getElementById("sabores2").value;
  } else {
    sabor = document.getElementById("sabores").value;
  }

  let total = document.getElementById("total");

  if (tamano == "1") {
    tamano = "Normal";
  } else if (tamano == "2") {
    tamano = "1/2 Litro";
    envase = "Ninguno";
    cobertura = "Ninguna";
  } else if (tamano == "3") {
    tamano = "1 Litro";
    cobertura = "Ninguna";
    envase = "Ninguno";
  }

  total_final_helados = total_final_helados * cantidad;
  // total.innerHTML = total_final_helados;

  if (tipo.checked == true) {
    tipo = "Especial";
    if (sabor == "1") {
      sabor = "Almendra";
    } else if (sabor == "2") {
      sabor = "Ate con queso";
    } else if (sabor == "3") {
      sabor = "Cafe irlandes";
    } else if (sabor == "4") {
      sabor = "Carajillo";
    } else if (sabor == "5") {
      sabor = "Banoffe";
    } else if (sabor == "6") {
      sabor = "Festin";
    } else if (sabor == "7") {
      sabor = "Cafe late";
    } else if (sabor == "8") {
      sabor = "Mditerraneo";
    } else if (sabor == "9") {
      sabor = "Monte blanco";
    } else if (sabor == "10") {
      sabor = "Rocky road";
    } else if (sabor == "11") {
      sabor = "Nieve mezcal";
    } else if (sabor == "12") {
      sabor = "Limon sin azucar";
    } else if (sabor == "0") {
      alert("Elije el sabor");
      return;
    }
  } else {
    tipo = "Clasico";
    if (sabor == "1") {
      sabor = "Arroz con leche";
    } else if (sabor == "2") {
      sabor = "Chcolate";
    } else if (sabor == "3") {
      sabor = "Fresas con crema";
    } else if (sabor == "4") {
      sabor = "Galleta";
    } else if (sabor == "5") {
      sabor = "Gloria";
    } else if (sabor == "6") {
      sabor = "Unicornio";
    } else if (sabor == "7") {
      sabor = "Nuez";
    } else if (sabor == "8") {
      sabor = "Menta con chocolate";
    } else if (sabor == "9") {
      sabor = "Ron con pasas";
    } else if (sabor == "10") {
      sabor = "Palanqueta";
    } else if (sabor == "11") {
      sabor = "Vainilla";
    } else if (sabor == "12") {
      sabor = "Yougurt natural";
    } else if (sabor == "13") {
      sabor = "Sherbet de coco";
    } else if (sabor == "14") {
      sabor = "Nieve de limon";
    } else if (sabor == "15") {
      sabor = "Nieve de mango";
    } else if (sabor == "0") {
      alert("Elije el sabor");
      return;
    }
  }

  if (estilo.checked == true) {
    estilo = "Especial";
  } else {
    estilo = "Clasico";
  }

  if (envase == "1") {
    envase = "Barquillo";
  } else if (envase == "2") {
    envase = "Canasta";
  } else if (envase == "3") {
    envase = "Vaso";
  }

  if (cobertura == "1") {
    cobertura = "Ninguna";
  } else if (cobertura == "2") {
    cobertura = "2 Toppings";
  } else if (cobertura == "3") {
    cobertura = "4 Toppings";
  } else if (cobertura == "0") {
    alert("Elije la cobertura");
    return;
  }

  var producto = "Helado de " + sabor;
  var descripcion =
    "Tipo: " +
    tipo +
    " Tamaño: " +
    tamano +
    " Sabor: " +
    sabor +
    " Estilo: " +
    estilo +
    " Envase: " +
    envase +
    " Cobertura:" +
    cobertura +
    " Cantidad: " +
    cantidad;
  tarjetas(producto, descripcion, total_final_helados);
}

function paletasEspeciales() {
  // traer el texto
  let total_paletas = document.getElementById("paletas_total");
  // ESPECIALES ---------------------------------------- 153 - 203

  // total solo de las especiales

  // cantidad especiales
  var cantidadE1 = 0;
  var cantidadE2 = 0;
  var cantidadE3 = 0;
  var cantidadE4 = 0;
  var descripcion = "";

  if (document.getElementById("especial_1").checked == true) {
    var ate = "Ate";
    cantidadE1 = document.getElementById("numberE1").value;
    if (Math.floor(cantidadE1) < 0 || Math.floor(cantidadE1) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion = descripcion + ate + " Cantidad: " + cantidadE1 + "&#10;";
  }
  if (document.getElementById("especial_2").checked == true) {
    var chocolate = "Chocolate";
    cantidadE2 = document.getElementById("numberE2").value;
    if (Math.floor(cantidadE2) < 0 || Math.floor(cantidadE2) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion =
      descripcion + chocolate + " Cantidad: " + cantidadE2 + "&#10;";
  }
  if (document.getElementById("especial_3").checked == true) {
    var chocosA = "Choco sin azucar";
    cantidadE3 = document.getElementById("numberE3").value;
    if (Math.floor(cantidadE3) < 0 || Math.floor(cantidadE3) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion = descripcion + chocosA + " Cantidad: " + cantidadE3 + "&#10;";
  }
  if (document.getElementById("especial_4").checked == true) {
    var mazapan = "Mazapan";
    cantidadE4 = document.getElementById("numberE4").value;
    if (Math.floor(cantidadE4) < 0 || Math.floor(cantidadE4) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion = descripcion + mazapan + " Cantidad: " + cantidadE4 + "&#10;";
  }

  //console.log(especiales)
  total_paletasEspecial =
    Math.floor(cantidadE1) +
    Math.floor(cantidadE2) +
    Math.floor(cantidadE3) +
    Math.floor(cantidadE4);
  total_paletasEspecial = total_paletasEspecial * 37;

  total_paletas.innerHTML = "Paletas: $" + total_paletasEspecial;

  var producto = "Paletas";

  tarjetas(producto, descripcion, total_paletasEspecial);
}

function paletasCrema() {
  // traer el texto
  let total_paletas = document.getElementById("paletas_total");
  // CREMA---------------------------------------- 153 - 203

  // total solo de las especiales

  // cantidad especiales
  var cantidadC1 = 0;
  var cantidadC2 = 0;
  var cantidadC3 = 0;
  var cantidadC4 = 0;

  var descripcion = "";

  if (document.getElementById("crema_1").checked == true) {
    var yogurt = "Yogurt";
    cantidadC1 = document.getElementById("numberC1").value;
    if (Math.floor(cantidadC1) < 0 || Math.floor(cantidadC1) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion = descripcion + yogurt + " Cantidad: " + cantidadC1 + "&#10;";
  }
  if (document.getElementById("crema_2").checked == true) {
    var fresa = "Fresa";
    cantidadC2 = document.getElementById("numberC2").value;
    if (Math.floor(cantidadC2) < 0 || Math.floor(cantidadC2) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion = descripcion + fresa + " Cantidad: " + cantidadC2 + "&#10;";
  }
  if (document.getElementById("crema_3").checked == true) {
    var nuez = "Nuez";
    cantidadC3 = document.getElementById("numberC3").value;
    if (Math.floor(cantidadC3) < 0 || Math.floor(cantidadC3) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion = descripcion + nuez + " Cantidad: " + cantidadC3 + "&#10;";
  }
  if (document.getElementById("crema_4").checked == true) {
    var menta = "Menta";
    cantidadC4 = document.getElementById("numberC4").value;
    if (Math.floor(cantidadC4) < 0 || Math.floor(cantidadC4) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion = descripcion + menta + " Cantidad: " + cantidadC4 + "&#10;";
  }

  //console.log(especiales)
  total_paletasCrema =
    Math.floor(cantidadC1) +
    Math.floor(cantidadC2) +
    Math.floor(cantidadC3) +
    Math.floor(cantidadC4);
  total_paletasCrema = total_paletasCrema * 32;

  total_paletas.innerHTML = "Paletas: $" + total_paletasCrema;
  var producto = "Paletas";

  tarjetas(producto, descripcion, total_paletasCrema);
}

function paletasAgua() {
  // traer el texto
  let total_paletas = document.getElementById("paletas_total");
  // CREMA---------------------------------------- 153 - 203

  // total solo de las especiales

  // cantidad especiales
  var cantidadA1 = 0;
  var cantidadA2 = 0;
  var cantidadA3 = 0;
  var cantidadA4 = 0;
  var descripcion = "";

  if (document.getElementById("agua_1").checked == true) {
    var limon = "Limon";
    cantidadA1 = document.getElementById("numberA1").value;
    if (Math.floor(cantidadA1) < 0 || Math.floor(cantidadA1) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion = descripcion + limon + " Cantidad: " + cantidadA1 + "&#10;";
  }
  if (document.getElementById("agua_2").checked == true) {
    var chilimango = "Chilimango";
    cantidadA2 = document.getElementById("numberA2").value;
    if (Math.floor(cantidadA2) < 0 || Math.floor(cantidadA2) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion =
      descripcion + chilimango + " Cantidad: " + cantidadA2 + "&#10;";
  }
  if (document.getElementById("agua_3").checked == true) {
    var menta = "Menta";
    cantidadA3 = document.getElementById("numberA3").value;
    if (Math.floor(cantidadA3) < 0 || Math.floor(cantidadA3) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion = descripcion + menta + " Cantidad: " + cantidadA3 + "&#10;";
  }
  if (document.getElementById("agua_4").checked == true) {
    var tamachile = "Tamachile";
    cantidadA4 = document.getElementById("numberA4").value;
    if (Math.floor(cantidadA4) < 0 || Math.floor(cantidadA4) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion =
      descripcion + tamachile + " Cantidad: " + cantidadA4 + "&#10;";
  }

  //console.log(especiales)
  total_paletasAgua =
    Math.floor(cantidadA1) +
    Math.floor(cantidadA2) +
    Math.floor(cantidadA3) +
    Math.floor(cantidadA4);
  total_paletasAgua = total_paletasAgua * 24;

  total_paletas.innerHTML = "Paletas: $" + total_paletasAgua;
  var producto = "Paletas";

  tarjetas(producto, descripcion, total_paletasAgua);
}

function frappeLeche() {
  // traer el texto
  let frappes_total = document.getElementById("frappes_total");
  // CREMA---------------------------------------- 153 - 203

  // total solo de las especiales
  var total_Frappe_Leche = 0;

  // cantidad especiales
  var cantidadFL1 = 0;
  var cantidadFL2 = 0;
  var cantidadFL3 = 0;
  var cantidadFL4 = 0;
  var descripcion = "";

  if (document.getElementById("frappe_leche_1").checked == true) {
    var cafe = "Cafe";
    cantidadFL1 = document.getElementById("numberFL1").value;
    if (Math.floor(cantidadFL1) < 0 || Math.floor(cantidadFL1) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion = descripcion + cafe + " Cantidad: " + cantidadFL1 + "&#10;";
  }
  if (document.getElementById("frappe_leche_2").checked == true) {
    var horchata = "Horchata";
    cantidadFL2 = document.getElementById("numberFL2").value;
    if (Math.floor(cantidadFL2) < 0 || Math.floor(cantidadFL2) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion =
      descripcion + horchata + " Cantidad: " + cantidadFL2 + "&#10;";
  }
  if (document.getElementById("frappe_leche_3").checked == true) {
    var horchata_cafe = "Horchata-cafe";
    cantidadFL3 = document.getElementById("numberFL3").value;
    if (Math.floor(cantidadFL3) < 0 || Math.floor(cantidadFL3) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion =
      descripcion + horchata_cafe + " Cantidad: " + cantidadFL3 + "&#10;";
  }
  if (document.getElementById("frappe_leche_4").checked == true) {
    var moka = "Moka";
    cantidadFL4 = document.getElementById("numberFL4").value;
    if (Math.floor(cantidadFL4) < 0 || Math.floor(cantidadFL4) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion = descripcion + moka + " Cantidad: " + cantidadFL4 + "&#10;";
  }

  //console.log(especiales)
  total_Frappe_Leche =
    Math.floor(cantidadFL1) +
    Math.floor(cantidadFL2) +
    Math.floor(cantidadFL3) +
    Math.floor(cantidadFL4);
  total_Frappe_Leche = total_Frappe_Leche * 74;

  frappes_total.innerHTML = "Frappes: $" + total_Frappe_Leche;
  var producto = "Frappe";

  tarjetas(producto, descripcion, total_Frappe_Leche);
}

function frappeAgua() {
  // traer el texto
  let frappes_total = document.getElementById("frappes_total");
  // CREMA---------------------------------------- 153 - 203

  // total solo de las especiales

  // cantidad especiales
  var cantidadFA1 = 0;
  var cantidadFA2 = 0;
  var cantidadFA3 = 0;
  var descripcion = "";

  if (document.getElementById("frappe_agua_1").checked == true) {
    var mango = "Mango";
    cantidadFA1 = document.getElementById("numberFA1").value;
    if (Math.floor(cantidadFA1) < 0 || Math.floor(cantidadFA1) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion = descripcion + mango + " Cantidad: " + cantidadFA1 + "&#10;";
  }
  if (document.getElementById("frappe_agua_2").checked == true) {
    var jamaica = "Jamaica";
    cantidadFA2 = document.getElementById("numberFA2").value;
    if (Math.floor(cantidadFA2) < 0 || Math.floor(cantidadFA2) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion = descripcion + jamaica + " Cantidad: " + cantidadFA2 + "&#10;";
  }
  if (document.getElementById("frappe_agua_3").checked == true) {
    var tamarindo = "Tamarindo";
    cantidadFA3 = document.getElementById("numberFA3").value;
    if (Math.floor(cantidadFA3) < 0 || Math.floor(cantidadFA3) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion =
      descripcion + tamarindo + " Cantidad: " + cantidadFA3 + "&#10;";
  }

  //console.log(especiales)
  total_Frappe_Agua =
    Math.floor(cantidadFA1) + Math.floor(cantidadFA2) + Math.floor(cantidadFA3);
  total_Frappe_Agua = total_Frappe_Agua * 74;

  frappes_total.innerHTML = "Frappes: $" + total_Frappe_Agua;
  var producto = "Frappe";

  tarjetas(producto, descripcion, total_Frappe_Agua);
}

function frappeHeladoClasico() {
  // traer el texto
  let frappes_total = document.getElementById("frappes_total");
  // CREMA---------------------------------------- 153 - 203

  // total solo de las especiales

  // cantidad especiales
  var cantidadHC1 = 0;
  var descripcion = "";
  if (document.getElementById("helado_clasico_1").checked == true) {
    var helado_clasico = "Helado_Clasico";
    cantidadHC1 = document.getElementById("numberHC1").value;
    if (Math.floor(cantidadHC1) < 0 || Math.floor(cantidadHC1) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion =
      descripcion + helado_clasico + " Cantidad: " + cantidadHC1 + "&#10;";
  }

  //console.log(especiales)
  total_Frappe_Hleado_Clasico = Math.floor(cantidadHC1);
  total_Frappe_Hleado_Clasico = total_Frappe_Hleado_Clasico * 92;

  frappes_total.innerHTML = "Frappes: $" + total_Frappe_Hleado_Clasico;
  var producto = "Frappe";

  tarjetas(producto, descripcion, total_Frappe_Hleado_Clasico);
}

function frappeHeladoEspecial() {
  // traer el texto
  let frappes_total = document.getElementById("frappes_total");
  // CREMA---------------------------------------- 153 - 203

  // total solo de las especiales

  // cantidad especiales
  var cantidadHE1 = 0;
  var descripcion = "";
  if (document.getElementById("helado_especial_1").checked == true) {
    var helado_especial = "Helado_Especial";
    cantidadHE1 = document.getElementById("numberHE1").value;
    if (Math.floor(cantidadHE1) < 0 || Math.floor(cantidadHE1) > 100) {
      alert("La cantidad no puede ser negativa o mas de 100");
    }
    descripcion =
      descripcion + helado_especial + " Cantidad: " + cantidadHE1 + "&#10;";
  }

  //console.log(especiales)
  total_Frappe_Hleado_Especial = Math.floor(cantidadHE1);
  total_Frappe_Hleado_Especial = total_Frappe_Hleado_Especial * 107;

  frappes_total.innerHTML = "Frappes: $" + total_Frappe_Hleado_Especial;
  var producto = "Frappe";

  tarjetas(producto, descripcion, total_Frappe_Hleado_Especial);
}

function tarjetas(product, description, total) {
  const padre = document.querySelector("div.cajas_compras");
  console.log(padre);

  const nuevo = document.createElement("div");
  nuevo.className = "compra";
  nuevo.id = "ide";
  var h3 = document.createElement("h3");
  var hr = document.createElement("hr");
  var br = document.createElement("br");
  var p = document.createElement("p");
  var p2 = document.createElement("p");
  h3.innerHTML = product;
  nuevo.appendChild(h3);
  nuevo.appendChild(hr);
  p.innerHTML = description;
  p2.innerHTML = "Total: " + total;
  nuevo.appendChild(br);
  nuevo.appendChild(p);
  nuevo.appendChild(p2);
  padre.appendChild(nuevo);
}

function borrarPaletasEspeciales() {
  document.getElementById("especial_1").checked = false;
  document.getElementById("especial_2").checked = false;
  document.getElementById("especial_3").checked = false;
  document.getElementById("especial_4").checked = false;
  document.getElementById("numberE1").value = 1;
  document.getElementById("numberE2").value = 1;
  document.getElementById("numberE3").value = 1;
  document.getElementById("numberE4").value = 1;
}

function borrarPaletasCrema() {
  document.getElementById("crema_1").checked = false;
  document.getElementById("crema_2").checked = false;
  document.getElementById("crema_3").checked = false;
  document.getElementById("crema_4").checked = false;
  document.getElementById("numberC1").value = 1;
  document.getElementById("numberC2").value = 1;
  document.getElementById("numberC3").value = 1;
  document.getElementById("numberC4").value = 1;
}

function borrarPaletasAgua() {
  document.getElementById("agua_1").checked = false;
  document.getElementById("agua_2").checked = false;
  document.getElementById("agua_3").checked = false;
  document.getElementById("agua_4").checked = false;
  document.getElementById("numberA1").value = 1;
  document.getElementById("numberA2").value = 1;
  document.getElementById("numberA3").value = 1;
  document.getElementById("numberA4").value = 1;
}

function borrarFrappeLeche() {
  document.getElementById("frappe_leche_1").checked = false;
  document.getElementById("frappe_leche_2").checked = false;
  document.getElementById("frappe_leche_3").checked = false;
  document.getElementById("frappe_leche_4").checked = false;
  document.getElementById("numberFL1").value = 1;
  document.getElementById("numberFL2").value = 1;
  document.getElementById("numberFL3").value = 1;
  document.getElementById("numberFL4").value = 1;
}

function borrarFrappeAgua() {
  document.getElementById("frappe_agua_1").checked = false;
  document.getElementById("frappe_agua_2").checked = false;
  document.getElementById("frappe_agua_3").checked = false;
  document.getElementById("numberFA1").value = 1;
  document.getElementById("numberFA2").value = 1;
  document.getElementById("numberFA3").value = 1;
}
function borrarFrappeHeladoClasico() {
  document.getElementById("helado_clasico_1").checked = false;
  document.getElementById("numberHC1").value = 1;
}
function borrarFrappeHeladoEspecial() {
  document.getElementById("helado_especial_1").checked = false;
  document.getElementById("numberHE1").value = 1;
}

function comprar() {
  var total =
    total_final_helados +
    total_paletasEspecial +
    total_paletasCrema +
    total_paletasAgua +
    total_Frappe_Leche +
    total_Frappe_Agua +
    total_Frappe_Hleado_Clasico +
    total_Frappe_Hleado_Especial;

  let total_text = document.getElementById("total");
  total_text.innerHTML = "$" + total;

  Swal.fire({
    icon: "success",
    title: "Compra generada",
    text: "Pagara:" + total,
  });
}

function borrar() {
  location.reload();
}
