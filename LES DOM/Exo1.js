// let header = document.getElementsByTagName('header'); // selection d'une ou plusieurs balises
// let logo = document.getElementById('logo'); // selection d'un id
// let container = document.getElementsByClassName('container'); // selection d'une ou plusiuers classes
// let h1 = document.querySelector('h1'); // super selector qui va selectionner le premier élement h1
// let h1 = document.querySelector('.toto'); // super selector qui va selectionner le premier classe toto
// let h1  = document.querySelector('#toto'); // super selector qui va selectionner le premier id toto
// let p = document.querySelectorAll('p');// super selector qui va selectionner tout les éléments p
// let p = document.querySelectorAll('.toto');// super selector qui va selectionner toute les classes toto
// let p = document.querySelectorAll('#toto'); // super selector qui va selectionner tout les id toto 

// - Je vous invite à chercher pourquoi placer nos balise à cette endroit et pas à un autre endroit.
// - Faites un fichier js que vous incluez dans le fichier html que je vais vous donner.
// - Créez et console.loguez les variables qui vont afficher : le h2, tout les « a », la div avec la
// class « text ».
// - Si vous utilisez querySelector et querySelectorAll constatez vous une différence ?

let text = document.querySelector(".text");
console.log(text);
let allA = document.querySelectorAll("a");
console.log(allA);
let h2 = document.querySelector("h2");
console.dir(h2);
allA[1].textContent = "ower location"
h2.textContent="welcome to montpellier"
document.body.append('coucou');
let img = document.querySelector(img)
// creer un element coucou et le rajouter a la page html

let coucou = document.createElement("div");
coucou.innerText = "coucou";
document.body.append(coucou);


//  -------------------EXERCICE------------------------------

// 1- Ajouter un h1 avant la nav
// 2- Supprimer l’image

let h1 = document.createElement("h1"); //creer le h1
h1.innerText = "super titre js"; // remplir h1

let div = document.createElement("div");  // selectionne le div
div.classList.add("newDiv"); //rajoute une class à la div

div.append(h1); //rajout la div au html

let header = document.querySelector("header"); //creer un header

header.prepend(div); //rajoute le header creer au div

// ---------supprimer l'image---------------------------

let img = document.querySelector("img"); // selectionne l'image

img.remove(); //supprime l'image


// let coucou = document.createElement("div"); //crée un élément et l'attribu à coucou
// coucou.innerText = "coucou"; // ajoute du texte dans l'élément
// document.body.append(coucou); // Ajoute l'élément après le dernier enfant de l'élément selectionné la body
// document.querySelector("h2").prepend(coucou); // prepend ajoute un élément avant le premier enfant de celui ci
// coucou.remove(); // Supprime l'élément selectionné
//Ajouter un h1

let nav = document.querySelector("#burger");
let header = document.querySelector("header");
let newDiv = document.createElement("div");
let newTitle = document.createElement("h1");

header.prepend(newDiv);

newDiv = document.querySelector("div");
newDiv.append(newTitle);

//supprimer l'image

let backgroundImg = document.querySelector("img");

backgroundImg.remove();

// Ajouter du texte dans le h1
newTitle.textContent = "nouveau titre";

let liNav = document.querySelector("ul");




