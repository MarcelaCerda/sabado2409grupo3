document.write(`<p> 6. Escribe un programa que pida dos números y escriba en la pantalla cual es el
mayor.</p>`)
let num1=Number.parseFloat( prompt("Ingrese un numero"));
let num2= parseFloat( prompt("Ingrese tro numero"));  
if (   num1 > num2 ){
    document.write(`<h1>El numero mas grande es ${num1} </h1>`)
}else{
    document.write("<h1>El numero mas grande es "+num2    +" </h1>")
}
/*
7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres.*/
document.write(`<p> 8. Escribe un programa que pida un número y diga si es divisible por 2</p> `)
num1=Number.parseFloat( prompt("Ingrese un numero")); 
resto= num1 % 2
if (resto ===  0){
    document.write(`<h1>${num1} es divisible por 2  </h1> `)
}else{
    document.write(`<h1>${num1} NO es divisible por 2  </h1> `)
}
//document.write("<h1>" +num1 + resto === 0 ?   " es divisible" :  " no es divisible"    +`</h1> `)

/*
13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
7 (sólo hay que comprobar si lo es por uno de los cuatro)

14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay
que decir todos por los que es divisible)
15. Escribir un programa que escriba en pantalla los divisores de un número dado
16. Escribir un programa que escriba en pantalla los divisores comunes de dos
números dados
17. Escribir un programa que nos diga si un número dado es primo (no es divisible
por ninguno otro número que no sea él mismo o la unidad)

*/


document.write(`<p>   multiplos 4 del 100 al 200    // 100 104 108      196 200</p>`);

i=100;
while ( i<= 200){
    document.write("<span>"+ i +", </span>");
    i=i+4
}


for(let i=100  ;  i<= 200  ; i+=4    ){
    document.write("<span>"+ i +", </span>");
}

document.write(`<p>  leer por pantalla un numero y mostrar por consola la tabla de multiplicar</p>`)

/*
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6

2 x 10 = 20 */
let num=parseInt(prompt("Ingrese un numero: "))
cad=`
<div class="container col-3">
<h2>Tabla del ${num}</h2>
<table class="table table-dark table-hover ta ">
  <thead>
    <tr>
      <th>${num} </th>
      <th> x </th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
  `
  for(let i=1 ;  i<= 10  ; i++    ){

    cad+=`  
    <tr class="">
      <td scope="row">${num} </td>
      <td scope="row">${i} </td>
      <td scope="row"> ${num*i} </td>
    </tr>
    `
  }
cad+=`    
  </tbody>
</table>
</div>
`

console.log(cad)
document.write(cad)

