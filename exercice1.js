
// console.log(true!=false);
// console.log(true&&true);
// console.log(false&&true);
// console.log(false||true);
// console.log(false||false);
// console.log(true?1:2);
// var prenom = "olivier";
// var azer = "azer";
// var ty = "ty";
// console.log(azer + ty);

// function hello(){
//     var hello="hello";
//     var world="world";
//     return hello+world; 
// }
// console.log( hello());

// function adition(a,b){
//     var nbr1 = a;
//     var nbr2 = b;
//     return nbr1+nbr2;
// }

// console.log(adition(15,25));
// console.log("hello world");
// alert('ca pue');

// confirm("cest de la balle");


// let text;
// if (confirm("Continuer?") == true) {
//   alert("Merci d'avoir confirmer!");
// } else {
//   alert("Domage vous nous quitter");
// }
 
// var person = prompt("Votre Nom s'il vous plait");
// alert("votre Nom est " + person )


// fonction avec input

// function connection(nom, prenom){
//     var nom = prompt("Entre votre nom:");
//     var prenom = prompt("Enter votre prenom:");
// result = nom + prenom ;
// return alert(result);
// }
// console.log(connection());

// function age(age){
//     var age = prompt("Entre votre age:");
//     result = parseInt(age)+1 ;
// return alert("votre age l'année prochaine seras :" + result);
// }
// console.log(age());

// 
//-----------------------EXERCICE IMC----------------
// 
// Créez une fonction permettant d’afficher l’IMC d’une personne, en rentrant comme paramètre
// son poids et sa taille.
// Pour info : La formule de l’IMC est poids(en kg) / taille²(en mètre).
// L’utilisateur devra rentré son poids en kg, donc à vous de faire la conversion cm->mètre, de
// faire le calcul nécessaire pour l’IMC et d’afficher le résultat arrondi à 1 chiffre après la virgule.
// let poids = prompt("Quel est votre poids en kg ?");
// let taille = prompt("Quel est votre taille en cm ?");

// function imc(){
//     var poids = prompt("quel est votre poids en Kg? :");
//     var taille = prompt("quel est votre taille en cm? :");
//     poids = parseInt(poids);
//     taille = parseInt(taille);
//     taille = taille/100;
//     result = poids/(taille*taille);
//     result = result.toFixed(1)

// return alert("Votre IMC est de : "+ result)
// }

// imc()

// --------------EXERCICE  HORLOGE   ----------------

// Créez une fonction qui affiche « c’est le matin » si l’heure est inférieur à midi,
// « c’est l’après midi » si l’heure est entre 12h et 18h et « c’est le soir » si l’heure
// est au dessus.

// const dayToday = new Date();

// alert("Nous sommes le" + " " + dayToday);

// function noonOrNot() {
//   let hour = dayToday.getHours();
//   alerte("")
//   console.log(typeof hour + hour);



//   if (hour < 12 && hour > 7) {
//     alert("C'est le matin");
//   } else if (hour >= 12 && hour < 20) {
//     alert("C'est l'après-midi");
//   } else {
//     alert("Arte c'est la nouit !");
//   }
// }

// noonOrNot();

// //-----------------   Correction   -----------------------

// function timeOfDay(heure) {
//   if (heure >= 0 && heure < 24) {
//     if (heure < 12) {
//       console.log("c'est le matin");
//     } else if (heure < 18) {
//       console.log("c'est l'après-midi");
//     } else {
//       console.log("c'est la soirée");
//     }
//   } else {
//     console.log("rentrez une heure valable !");
//   }
// }

// timeOfDay(12.22);

// ------------- EXERCICE COMPARAISON  -------------------

// Faites une comparaison en utilisant un switch une variable prénom.
// Dans le switch vous pouvez checker 3 prénoms filles, 3 garçon.
// Votre programme demande votre prénom (prompt).
// Si vous rentrez un des 3 prénoms garçon un console log « vous êtes un garçon ».
// Si vous rentre un des 3 prénoms filles, un console log « vous êtes une filles ».
// Sinon console.log « vous n’avez pas rentré de prénom ».
// Attention, la comparaison ne doit pas être sensible à la casse (case insensitive).
// - Bonus : Créez une condition ternaire ( ex : si tu as moins de 18 ans tu est mineur sinon tu
// es majeur) .

// var prenom = prompt("quel est votre prénom ?:");
// prenom =(prenom.toLowerCase());
// switch(prenom) {    
//     case "olivier":
//         alert("vous êtes un garçon ");
//         break;
//     case "pierre":
//         alert("vous êtes un garçon ");
//         break;
//     case "louis":
//         alert("vous êtes un garçon ");
//         break;     
//     case "sophie":
//         alert("vous êtes une fille ");
//         break;
//     case "agnes":
//         alert("vous êtes une fille ");
//         break;
//     case "faustine":
//         alert("vous êtes une fille ");
//       break;
//     default:
//       alert("entrer votre prénom");
//   }

// var a = 0;
// var b =10;
// var result = 0;

//   while(result<=10000 ){
//     result += a+b;
//     if (result == 5000){
//       break;
//     }
//     console.log(result);
//   }
  
// console.log(result);  

try{
  console.log(coco);
}
  catch{
    console.log("titi"+" " + Error.stack);
  }








