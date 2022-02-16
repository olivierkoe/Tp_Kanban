// Il est possible de planifier l’execution des scripts en JS :
// - setInterval permet d’executer une fonctions à intervalles correspondantes à un temps donné
// - setTimeout permet d’executer une fonction après un certain temps.
// - Créez une fonctions permettant de générer une couleurs aléatoirement.
// - Essayez de faire changer la couleur d’un bouton toutes les 2 secondes à l’aide de setInterval et de
// votre fonction.
// - Créez un lien permettant d’arrêter ce changement de couleur.

// - Créez une fonctions permettant de générer une couleurs aléatoirement.

// let buttonSelector = document.querySelector(".buttonLogement");

// buttonSelector.addEventListener("onclick",()=> {
//     setInterval(generateColor(),2);
// });

// // clearTimeout(generateColor, 500);


// const generateColor = () => {
//     let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);// genaire des coulour aleatoire
//     buttonSelector.style.backgroundColor = "#" + randomColor;
// }

// ---------------------CORRECTION----Ruben---------------------------------------

// genaire un chiffre aleatoirement
let randomColorGenerator = () => {
    let randomNumber = Math.floor(Math.random() * 255);
    return randomNumber;
  };
  
  document.querySelector("#testingMath").addEventListener("click", () => {
    randomColorGenerator();
  });
//   genaire une couleur aleatoirement
  let colorChanger = () => {
    let buttonSelectorColorChanger = document.querySelector("#testingMath");
    // genere 3 chiffre aleatoire qui définiront les 3 chiffre de ma couleur RGB
    let colorPicked = `rgb(${randomColorGenerator()},${randomColorGenerator()},${randomColorGenerator()})`; //gabarit litéral
    // attribut les 3 chiffre est creer une couleur
    buttonSelectorColorChanger.style.backgroundColor = colorPicked;
  };
//   definis un interval de changement de couleur
  const colorChangerInterval = setInterval(colorChanger, 2000);
  
//   Cree le bouton pour stopper le changement de couleur 
  let colorChangerStopButton = document.querySelector("#colorChangerStopButton");
// cree une fonction qui stopp le changement de couleur  
  colorChangerStopButton.addEventListener("click", () => {
    clearInterval(colorChangerInterval);
  });

// ----------------CORRECTION Benjamin---------------------------

// fonction qui comprend une fonction
// declare 1er fonction
let changeButton = () => {
    // declare 2em fonction
    let randomRgba = () => {
        let round = Math.round, random = Math.random, color = 255;
        console.log(round);
        let result = 'rgba(' + round(random() * color) + ',' + round(random() * color) + ',' + round(random() * color) + ',' + random().toFixed(1) + ')';
        return result;
    }
    // utilse la 2em fonction
    bouton.style.backgroundColor = randomRgba();
  }
//   utilise la 1er fonction
  let interval = setInterval(changeButton, 2000);

