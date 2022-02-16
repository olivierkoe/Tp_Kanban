// Dans cet exercice, vous allez réaliser un Timer !
// Nous allons pouvoir réviser les notions de conditions, de fonctions, et d’intervalles.
// Voici comment va se dérouler notre Timer :
// - Un bouton s’affiche sur la page proposant de « Lancer le décompte »
// - L’utilisateur clique sur ce bouton, qui va lancer une fonction start(), qui s’occupera de créer
// un intervalle sur la fonction decompte() toutes les secondes, pendant 10 secondes.
// - La fonction decompte(), lorsqu’elle est appelée :
// • Décrémentera (retirera 1) à une variable secondes, qui contient comme valeur 10
// • Vérifiera si secondes est différent de 0, pour afficher dans la page le nombre de
// secondes restantes
// • Sinon, si secondes vaut 0, appellera la fonction stop(), qui aura pour but d’arrêter
// l’intervalle

// selectionne le bouton dans le html
let btn = document.querySelector('button');
// démarre le décompte a 10
let secondes = 10;
// variable qui vaut rien
let interval;

// element qui click sur bouton
btn.addEventListener('click', () =>{
  start();// appel fonction start
  disappear();// appel la fonction disappear
});

// declare fonction desappear qui efface le bouton start
function disappear(){
  btn.style.display ="none";
}
// declare fonction start qui démare la fonction
function start() {
  interval = setInterval(decompte, 1000);
}
// Déclare la fonction stop et qui affiche "le texte"
function stop() {
  clearInterval(interval);
  document.body.innerHTML += "BOUM le LOLO !";
}
// Déclare la fonction décompte
function decompte() {
  
  secondes--;
  if(secondes == 0) {//temps que seconde n'est pas égale a zéro il passe au Else et lorsqu'il passe a zéro il appel le IF
    stop();// appel fonction stop
  }
  else {
    document.body.innerHTML += secondes + '<br>';
  }
  
}