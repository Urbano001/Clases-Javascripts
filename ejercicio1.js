let num1 = prompt("ingrese el primer numero:");
let num2 = prompt("Ingrese el segundo numero:");

if(num1 < num2){
    for (let i = num1; i <= num2; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}else{
    console.log("El primer numero es mayor que el segundo")
}