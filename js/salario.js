var x=0;
function calcular() {

    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var salario = parseInt(document.getElementById("salario").value);  
    if (edad < 16) {
        alert(nombre + " usted no tiene edad para trabajar");
    }
    if (edad > 19 && edad <= 50 ) {
        x =  salario + (salario *0.05);
        alert(nombre + "Su nuevo salario es: "+x)
    }
    if (edad > 51 && edad <= 60 ) {
        x =  salario + (salario *0.10);
        alert(nombre + "Su nuevo salario es: "+x)
    }
    if (edad > 60) {
        x =  salario + (salario *0.15);
        alert(nombre + "Su nuevo salario es: "+x)
    }

}

