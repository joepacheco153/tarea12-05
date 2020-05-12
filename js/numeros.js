var c;
var num = new Array();
var to = 0;
var ton = 0;
var par=0;
var impar=0;
var cantidad1 = 0;
var cantidad2 = 0;
var cantidad3 = 0;
var cantidad4 = 0;
var media = 0;
var cantidadt=0;
var total= 0;

do {


numero = (prompt("Ingrese un numero: "));
if(num!=null){
num.push(parseInt(numero));
}

c = prompt("Ingrese Si para continuar: ");
} while (c == "Si");

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    total = num[i]+total;
    cantidadt++;
    
    if (num[i]>0) {
        to = num[i]+to;
    cantidad1++;
    }
    if (num[i]<0) {
        ton = num[i]+ton;
        cantidad2++;
    }
    if (num[i] % 2==0) {
        par=num[i]+par;
        cantidad3++;

    } else {
        impar=num[i]+impar;
        cantidad4++;
    }
    
   
}

media = total / cantidadt;

console.log("Suma de los positivos: "+to);
console.log("Cantidad de positivos: " +cantidad1);
console.log("Suma de los negativos: "+ton);
console.log("Cantidad de negativos: " +cantidad2);
console.log("Suma de los pares: "+par);
console.log("Cantidad de pares: " +cantidad3);
console.log("Cantidad de impares: "+impar);
console.log("Cantidad de impares: " +cantidad4);
console.log("La media de todos los numeros es: " +media);
