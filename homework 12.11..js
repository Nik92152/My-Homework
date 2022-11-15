// 1-ое задание
// let i=0;
// let N=8;
// while (i<=N){
//     console.log("Чёрный чердак чернее чем чёрная ночь");
//     i++;
// }


// Задание 2

// let N = 350;
// let M = 25;
// let D=0;

// for (var i=0; N>M;i++){
//     D = N/2;
//     N=D;
    
// }
// console.log(i);

// Задание 3

// let a = 1800;
// let b = 2020;
// let c = 1961;
// counterNumbers=0;
// counterYears=0;
// counteriter=0;
// while (a!=c) {
//    a++;
//     counter++;
// }
// console.log("Год первого полёта человека в космос:",c, /*Как перенсти кол-во итераций на след. строчку?*/
// "Произведённое количество итераций:",counterNumbers);

// for (let y = a; y<=b;y++){
    
//     if (( y % 100 == 0) && (y % 400 == 0)) {
//         counterYears++;
//         break;
//     } 
//     else if( y % 4 == 0) {
//         counterYears++;
//     }
//     counteriter++;
// }
// console.log("Количество вискокосных годов: ",counterYears, "Количество итераций:",counteriter);
       
// Функции. Практика !!! Не понимаю как сделали 1 задачу!!! 

// 1 Задание

// const userOne = {
//     role: "admin",
//     firstname: "Артём",

// }

// const userTwo = {
//     role: "manager",
//     firstname: "Макар",

// }


// function checkAccess(user,role){
//     if (user.role===role) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function showAccessAndShowMessage(){
//     if (checkAccess(user, "admin")){
//         showAccessMessage(user);
//     }
//     else{
//         showVisitorMessage(user);
//     }
// }

// showAccessAndShowMessage(userOne, "admin");
// showAccessAndShowMessage(userTwo, "manager");

// function showAccessMessage(user){
//     console.log("Hello " + user.firstname);
// }
// function showVisitorMessage(user){
//     console.log("Hello visitor  ");
// }     

// // if (checkAccess(userOne, "admin")){
// //     showAccessMessage(userOne);
// // }
// // else{
// //     showVisitorMessage(userOne);
// // }

// // if (checkUser(userOne) ){
// //     hello();
// // } 
// // else{
// //     helloUser();
// // }


