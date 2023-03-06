

/*5.Implemente uma função que calcule a nota final da disciplina dada a sua nota prática e teórica e imprima
se o aluno está aprovado ou reprovado.*/


function calculateFinalGrade(np, nt){                        //primeiro criamos uma funcao com doi argumento
    var nf = np * 0.6 + nt * 0.4;                           // depois criamos uma rariavel
         
    if(nf > 9.5){                                           ////se nf for maior que 9,5
        console.log("APROVADO");                           /////aqui vai imprimir aprovado

    }
    else{                                            ////// caso contrario quer dizer se sor menor
        console.log("REPROVADO");                   //////aqui vai imprimir reprovado
    }

     return nf;                                  // quer dizer retornar o valor
}
/*var finalGrade = calculateFinalGrade(12,14);         ///aqui e invocacao da funcao onde sera chamado
console.log(finalGrade);*/

////6.Implemente uma função que receba como argumento o número do mês e imprima o nome por extenso////////////////////

function getMonthName(monthNumber){
    if(monthNumber == 1)                          //aqui  o == vai fazer uma comparacao se for igual a 1 ele imprimi o primeiro mes que e janeiro
        console.log("Janeiro");
    else if(monthNumber == 2)
        console.log("Fevereiro");
    if(monthNumber == 3)
        console.log("Março");
    else if(monthNumber == 4)
        console.log("Abril");
        if(monthNumber == 5)
        console.log("Maio");
    else if(monthNumber == 6)
        console.log("Junho");
        if(monthNumber == 7)
        console.log("Julho");
    else if(monthNumber == 8)
        console.log("Agosto");
        if(monthNumber == 9)
        console.log("Setembro");
    else if(monthNumber == 10)
        console.log("Outubro");
        if(monthNumber == 11)
        console.log("Novembro");
    else if(monthNumber == 12)
        console.log("Dezembro");
        
}
/*var x = getMonthName(7)*/


/*7.Implemente uma função que receba dois números e um operador ( + , - , * , / ou ^) e imprima o resultado
da operação sobre os números*/

function calculator(operador1, operador2, operator) {
    var result = 0;                                      //// criamos a variavel para guadar o valor
    if(operator == '+')
       return operador1 + operador2;
    else if(operator == '-')
        return operador1 - operador2;
     else if(operator == '*')
         return operador1 * operador2;
     else if(operator == '^')  
       return Math.pow(operador1, operador2);
     else
     return result;  

}

/*var res = calculator(2,4,'^');
console.log(res);*/

/////////8.Implemente uma função que imprima todos os múltiplos de 5 menores que 20.////////////////////////

function multiplos(multiple, limit) {
    result = 0;
    for(var i = 0; i < limit; i += multiple){
        console.log(i)
    }
}
/*multiplos(5,20)*/


//////////////9.Implemente uma função que imprima a soma dos primeiros 100 números inteiros.////////////////

function sumOf() {
    var sum = 0;
    for( let i = 0; i <= 100; i++){
        sum = sum + i; /* sum= sum += i*/
       
    }
       console.log(sum);
}
/*sumOf(100);*/

//////////////10. Implemente uma função que calcule e devolva o fatorial de um número.
////////////////

function factorial(n){
    var fact = 1;
    for(var i = n; i > 1; i--){
          /*fact * i                        esse nao guarda valor*/
        fact *= i;                            /*esse guarda o valor*/
    }
    return fact;                      
}

/*var f = factorial(5);
console.log(f);*/

/*11.. Implemente várias funções para calcular o máximo, o mínimo e a média de uma sequência de números
positivos.*/


function min(array){
    var m = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] < m)
        m = array[i];
    
    }

    return m;
}
//var array = [2, 3, 7, 9, 0, 10];
//console.log(min(array));

function max(array){
    var m = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] > m)
        m = array[i];
    
    }

    return m;
}
//var array = [2, 3, 7, 9, 0, 10];
//console.log(max(array));

function media(array){
    var med = 0;
    for( var i = 0; i < array.length; i++){
        med += array[i];
       
    }
    med = med /array.length;
    
    return med;
   
   
    
    
}
var array = [2, 3, 7, 9, 0, 10];
console.log(media(array));


