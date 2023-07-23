//  1. Scrieți o funcție care returnează pătratul unui număr

//Ex 1:

//function findSquare(num){
//    return num * num;
//}
//console.log(findSquare(6));

//Ex 2:

//function findSquare(num){
//    return num * num;
//}
//console.log(findSquare(0));

//Ex 3:

//function findSquare(num){
//    return num * num;
//}
//console.log(findSquare(-12));


//2. Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end . Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)

//function getRendomNumber(min, max){
//    return Math.floor(Math.random() * (max - min + 1) + min);
//}
//console.log(getRendomNumber(3, 5));



//3. Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir

//Ex 1:
 
//function charCount(str, letter){
//    var letterCount = 0;
//    for(var position = 0; position < str.length; position++){
//        if(str.charAt(position) == letter){
//            letterCount += 1;
//        }
//    }
//    return letterCount;
//}
//
//console.log(charCount("Imi place programarea", "a"));

//Ex 2:

//function charCount(str, letter){
//    var letterCount = 0;
//    for(var position = 0; position < str.length; position++){
//        if(str.charAt(position) == letter){
//            letterCount += 1;
//        }
//    }
//    return letterCount;
//}
//
//console.log(charCount("Vreau sa lucrez in IT", "r"));

//4. Scrieți o funcție pentru a adăuga numere nelimitate

//Ex 1:

//function sumNumbers(...numbers){
//    let sum = 0;
//    for(let i = 0; i < numbers.length; i++){
//        sum += numbers[i];
//    }
//    return sum;
//}

//console.log(sumNumbers(1, 2, 3))

//Ex 2:

//function addNumber(...number){
//    let add = 0;
//    for(let i = 0; i < number.length; i++){
//        add += number[i];
//    }
//    return add;
//}
//
//console.log(addNumber(1, 2, 3, 4, 5));