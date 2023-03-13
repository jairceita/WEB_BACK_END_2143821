/* 1. Escreva uma função que calcule o índice de massa corporal de uma pessoa e imprima a sua condição física.
 A fórmula contém o peso em kg e a altura em metros.*/

function imc(peso, altura){
    var imc = peso / (altura * altura);

    if(imc > 18.5){
         console.log("abaixo do peso");

    }
    else if(imc <= 18.5 && imc<=25){
        console.log("no peso normal");

    }
    else if(imc <= 25 && imc<= 30){
        console.log("acima do peso");

    }
    else if(imc < 30){
        console.log("obeso");
    }
   
}
//imc(120, 1.6)

/* 2. Escreva uma função que dada uma frase imprima a mesma frase por ordem inversa.

 a. Por exemplo: Entrada: Hoje e Domingo Saída: ejoH e ognimoD */

function reverseString(str){
    var array = str.split(" ");
    var reverseStr = "";
    for(let i = 0; i <array.length; i++) {
        const word = array[i];
        for(let j = word.length - 1; j >= 0 ; j--){
            reverseStr += word[j];
        }
             reverseStr += " ";

    }
    return reverseStr;
}
//var str = reverseString("Hoje e Domingo");
//console.log(str);

// 3. Escreva uma função que dada uma frase devolva o número de vogais que a mesma contém.

function countVowels(str) {
    var count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if(str[i] == 'a' || str[i] =='e' || str[i] =='i' || str[i] =='o' || str[i] =='u') {
            count ++;
        }
        
    }
    return count;
    
}
//var count = countVowels("Hoje e Domingo");
//console.log(count);

/* 4. Escreva uma função que dada frase e uma letra do abecedário devolva o número vezes que essa letra
ocorra. Não faça distinção entre maiúsculas e minúsculas (toLowerCase()).*/

//entrada
function countChar(str, char){
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] == char)
        count ++;
        
    }
    return count;
}

//console.log(countChar("domingo", "i"));

/* 5. Escreva uma função que calcule o tempo de trabalho de um empregado. Dada a hora de entrada e a hora
de saída deve imprimir o tempo de trabalho. A empresa está aberta entre as 08:00:00 e as 18:00:00 e as
horas devem situar-se nesse intervalo.*/

function calculateTime(he, me, se, hs, ms, ss) {
    var totalStartTimeInSecounds = he * 3600 + me * 60 + se;                  // hora de entrada e multiplicada por total de segundos(3600) + minnutos de entrada  vezes total do minutos(60)
    var totalQuitTimeInSecounds = hs * 3600 + ms * 60 + ss;                 // o mesmo serve para aqui (hora, minuto, segundo de saida)

    var total =totalQuitTimeInSecounds - totalStartTimeInSecounds;

    
    var remainder_m = total % 3600;      // aqui vai mim  dar total de segundos de 2 minutos e 5 segundos    

    var remainder_s = remainder_m % 60;     //aqui vai mim dar os segundos

    var m = (remainder_m - remainder_s) / 60; //aqui vai mim da os minuto

    var h = (total - remainder_m) / 3600;  // aqui vai mim dar a hora
   
    console.log("H: " + h + ", m " + m + ", s: " + remainder_s);
}
//calculateTime(8, 0, 0, 9, 2, 5);
    
/* 6. Escreva uma função que desenhe um retângulo com asteriscos. A altura e largura devem ser passadas como
argumentos.*/

function retangle(width, height){
    var line = "";
    for (let j = 0; j < height; j++){      //aqui vai mim dar a altura
        line += "*";
    }
    for (var i = 0; i < width; i++){     // aqui vai mim dar a largura 
      console.log(line); 
    }
    
}
//retangle(10, 10)

/* 7. Escreva uma função que desenhe um triângulo com asteriscos dada a sua altura */

function triangle(height){
    var line = "*";
    for (let i = 0; i < height; i++){
        console.log(line);                      // aqui vai imprimir a altura do triangulo com * com o numero invocado
        line += "*"                            // aqui vai somar 1 a 1  ate formar o triangulo pelo numero invocado
    }
}
//triangle(10);

/* 8. Escreva uma função que desenhe uma caixa quadrada com asteriscos e espaços dado o seu lado.*/

function box(width, height){
    for (let i = 0; i < height; i++){
        var line = '';
        for (let j = 0; j < width; j++){
            if (i == 0 || i == height -1){
                line += "*";

            }
            else{
                if (j == 0 || j == width - 1){
                    line += "*";
                }
                else{
                    line += " ";
                }
            }

        }
        console.log(line)
    }
}
//box(10, 10)

//      linha 9

//a. Lista - O programa imprime todas as notas.

var student1 = {nome: "Minga Pinto", grade: 12, number: 300};
var student2 = {nome: "Maria Diva", grade: 7, number: 350};
var student3 = {nome: "Lima Chum", grade: 16, number: 400};
var student4 = {nome: "Marco Terra", grade: 18, number: 450};
var student5 = {nome: "Joao Racha", grade: 8, number: 500 };

var studentList = [];

studentList.push(student1);
studentList.push(student2);
studentList.push(student3);
studentList.push(student4);
studentList.push(student5);

/*for (let i = 0; i < studentList.length; i++) {
    console.log(studentList[i].grade);
    
}*/

//c. Melhor nota – O programa imprime o número do melhor aluno e a respetiva nota.



function bestGrade(array){
    var bestGrade = array[0].grade;
    var bestStudent = array[0];

    for (let i = 0; i < array.length; i++){
        if (array[i].grade > bestGrade){
            bestGrade = array[i].grade;
           bestStudent = array[i];
        }
    }
    console.log(bestStudent);

}

//bestGrade(studentList);

//d. Pior nota – O programa imprime o número do pior aluno e a respetiva nota.

function worseGrade(array){
    var worseGrade = array[0].grade;
    var worseStudent = array[0];

    for (let i = 0; i < array.length; i++){
        if (array[i].grade < worseGrade){
           worseGrade = array[i].grade;
           worseStudent = array[i];
        }
    }
    console.log(worseStudent);

}
//worseGrade(studentList);

/*e. Nota média – O programa imprime o número do aluno que tiver a nota mais próxima da média e a
respetiva nota.*/

function averageGrade(studentList){                                       //aqui so vai devolver a nota media
    var sum = 0;
    for (let i = 0; i < studentList.length; i++) {
        sum += studentList[i].grade;
        
    }                
    var average = sum / studentList.length;
    return average;
}

//console.log(averageGrade(studentList));

function studentClosestToAvg(studentList) {                               // aqui devolve o aluno com a sua nota media
    var avg = averageGrade(studentList);
    var min = avg;
    var closestStudent = studentList[0];
    for (let index = 0; index < studentList.length; index++) {
        const student = studentList[index];
        var diff = Math.abs(student.grade - avg);
        if (diff < min) {
            min = diff;
            closestStudent = student;
            
        }
    }
    return closestStudent;
}

//console.log(studentClosestToAvg(studentList));

//f. Notas Negativas – imprime o número de notas negativas
function positivegrade(studentList){
    var positive = 0;
    for (var i = 0; i < studentList.length; i++){
        if (studentList[i].grade >= 9.5){
           positive ++; 
        }
        
    }
    console.log("notas positivas são: " + positive)
    
}
//console.log(positivegrade(studentList));

//g. Notas Positivas – imprime o número de notas positivas

function negativegrade(studentList){
    var negative = 0;
    for (var i = 0; i < studentList.length; i++){
        if (studentList[i].grade < 9.5){
           negative ++; 
        }
        
    }
    console.log("notas negative são: " + negative)
    
}
console.log(negativegrade(studentList));



