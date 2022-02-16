// - Créez une page html avec un lien et un bouton
// - A l’aide de addEventListener créez un évènement pour supprimer le lien en cliquant dessus.
// - Changez le background color du body en survolant le bouton et faites qu’il redevienne blanc quand la
// souris quitte le bouton.
// - Créez une section avec un h1 dedans et un texte dans la section mais en dehors du h1.
// - Créez un évènement au clique du h1 qui crée une alert disant que vous cliquez sur le h1 et de même
// pour la section. Que constatez vous ?

// -------------------------CORRECTION Ruben----------------------------------------

// // variable qui stock information 
// let buttonSelector = document.querySelector("#removerJS");
// let link = document.querySelector("a");

// // creer un fonction qui quand on click sur link declenche la fonction
// link.addEventListener("click", function (){
//     link.remove(); 
// })
// //- A l'aide de addEventListener créz un évènement 
// //pour supprimer le lien en cliquant dessus.
// //fonction qui agit au clique
// buttonSelector.addEventListener("click", function (e) {
//   document.querySelector("a").remove();
//   e.preventDefault();
// });

// /* Changez le bakground color du body en survolant le bouton et faites
//   qu'il redevienne blanc quand la souris quitte le bouton */
// let bodySelector = document.querySelector("body");

// //fonction qui agit quand je survol l'élément
// buttonSelector.addEventListener("mouseenter", function () {
//   bodySelector.style.backgroundColor = "red";
// });
// //fonction qui agit quand je sort de l'élément
// buttonSelector.addEventListener("mouseleave", function () {
//   bodySelector.style.backgroundColor = "unset"; // ou "inherit"
// });

// // - Créez une section avec un h1 dedans et un texte dans la section mais en dehors du h1.

// h1Creation.innerText = "mon super titre";
// pCreation.innerHTML = "lorem ipsum dolor amet";

// sectionCreation

// /*créez un évènement au clique du h1 qui crée une alert disant que vous
// cliquez sur le h1 et de même por la section. Que constatez vous ? */

// let titleSelector = document.querySelector("h1");
// let paragraphSelector = document.querySelector("p");
// let sectionSelector = document.querySelector("section");

// // 
// titleSelector.addEventListener("click", (e) => {
//   alert("vous venez de cliquez sur le titre");
//   e.stopPropagation();
// });

// // 
// paragraphSelector.addEventListener("click", (e) => {
//   alert("vous venez de cliquez sur le paragraphe");
//   e.stopPropagation();
// });

// // 
// sectionSelector.addEventListener("click", (e) => {
//   alert("vous venez de cliquez sur la section");
//   e.stopPropagation();
// });

// ----------------CORRECTION Benjamin-----------------------

let a = document.querySelectorAll("a");
let bouton = document.querySelector("button");
let body = document.querySelector('body');
let h1 = document.querySelector("h1");
let section = document.querySelector("section");
let isStop = null
a[0].addEventListener("click", () => {
    a[0].remove();
});
a[1].addEventListener("click", () => {
    clearInterval(interval);
    isStop = true;
});
a[2].addEventListener("click", () => {
    if (isStop) {
        interval = setInterval(changeButton, 2000);
        isStop = false
    }
    else return
});
bouton.addEventListener("mouseover", () => {
    body.style.backgroundColor = "blue";
});
bouton.addEventListener("mouseout", () => {
    body.style.backgroundColor = "unset";
});
section.addEventListener("click", (e) => {
    alert("vous avez cliqué sur la section");
});

h1.addEventListener("click", (e) => {
    alert("vous avez cliqué sur le h1");
    e.stopPropagation();
});
