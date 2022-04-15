let titrePostit = document.querySelector("#titrePostit");
let descriptionPostit = document.querySelector("#contentPostit");
let notesContainer = document.querySelector("postit");
let addNoteButton = document.querySelector(".ValidationNote");
let todoNote = document.querySelector("#todoBox");
let doneNote = document.querySelector("#doneBox");
let verifiedNote = document.querySelector("#verifiedBox");
let date = new Date();

let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "2-digit",
};

let infoPostitStr,
  newArticle,
  newTitre,
  newPostit,
  basePostit,
  newDescription,
  newParagraphe,
  idPostit = 0;

let infoPostItbase;

// console.log(infoPostit);

addNoteButton.addEventListener("click", function () {
  infoPostItbase = {
    titre: titrePostit.value,
    content: descriptionPostit.value,
    status: "todo",
    id: idPostit,
  };
  console.log(infoPostItbase);

  createNewPostit(
    infoPostItbase.titre,
    infoPostItbase.content,
    infoPostItbase.status,
    infoPostItbase.id
  );

  // Ici on push les notes
  basePostit.push(infoPostItbase);

  storeCurrentinfoPostit();
  console.log(localStorage);
});

/////////////////////////////////////////////////////////////////////////
////              FONCTIONS qui geres les localstorage                ///
/////////////////////////////////////////////////////////////////////////

function storeCurrentinfoPostit() {
  infoPostitStr = JSON.stringify(basePostit);
  window.localStorage.setItem("info", infoPostitStr);
}

function getCurrentinfoPostit() {
  //ici on stocke le local storage dans newPostit

  postitSauver = window.localStorage.getItem("info");

  //si localStorage a du contenue alors
  if (localStorage.length != 0) {
    //je remplis le tableau avec les note contenus dans le localStorage
    basePostit = JSON.parse(postitSauver);
    //pour chaque note dans le localStorage, alors je crée une note

    basePostit.forEach((element) => {
      createNewPostit(
        element.titre,
        element.content,
        element.status,
        element.id
      );
      idPostit++;
    });
    //sinon je crée un tableau vide
  } else {
    basePostit = [];
  }
}

//on lance la fonction pour generer les postits contenus dans le local storage
getCurrentinfoPostit();

/////////////////////////////////////////////////////////////////////////
////                         FONCTIONS qui geres les Postit          *///
/////////////////////////////////////////////////////////////////////////

//Fonction qui crée la structure pour acceuillir les information stocker
function creatPostIT() {
  newArticle = document.createElement("article");
  newTitre = document.createElement("h3");
  newParagraphe = document.createElement("p");
  newDate = document.createElement("p");
}
function setAtibutePostit() {}
//Fonction qui remplis la structure de createPostit
function fillElements(titre, description) {
  newTitre.textContent = titre;
  newParagraphe.textContent = description;
  newDate.textContent =
    "Démaré le :" +
    date.toLocaleDateString("fr-FR", options) +
    " c'est le n° " +
    idPostit;
}
//Fonction qui pose la stucture creatPost remplis par fillElements dans le html
function appendElements(parametre) {
  if (parametre == "todo") {
    todoNote.append(newArticle);
  } else if (parametre == "done") {
    doneNote.append(newArticle);
  } else if (parametre == "verified") {
    verifiedNote.append(newArticle);
  }
  newArticle.setAttribute("id", `draggable ${idPostit}`);
  newArticle.setAttribute("draggable", "true");
  newArticle.setAttribute(
    "ondragstart",
    "event.dataTransfer.setData('text/plain',null)"
  );
  newArticle.append(newTitre);
  newArticle.append(newParagraphe);
  newArticle.append(newDate);
}
//fonction qui lance les fonctions : creatPostit , fillElements, appendElements
function createNewPostit(titre, description, parametre, id) {
  creatPostIT();
  fillElements(titre, description);
  appendElements(parametre, id);
}

/////////////////////////////////////////////////////////////////////////
////                         FONCTIONS qui geres LE DRAG&DROP          *///
/////////////////////////////////////////////////////////////////////////

var dragged;

/* Les événements sont déclenchés sur les objets glissables */
document.addEventListener("drag", function (event) {}, false);

document.addEventListener(
  "dragstart",
  function (event) {
    // Stocke une référence sur l'objet glissable
    dragged = event.target;
    // transparence 50%
    event.target.style.opacity = 0.5;
  },
  false
);

document.addEventListener(
  "dragend",
  function (event) {
    // réinitialisation de la transparence
    event.target.style.opacity = "";
  },
  false
);

/* Les événements sont déclenchés sur les cibles du drop */
document.addEventListener(
  "dragover",
  function (event) {
    // Empêche le comportement par défaut afin d'autoriser le drop
    event.preventDefault();
  },
  false
);

document.addEventListener(
  "dragenter",
  function (event) {
    // Met en surbrillance la cible de drop potentielle lorsque l'élément glissable y entre
    if (event.target.className == "dropBox") {
      event.target.style.background = "gold";
      event.stopPropagation();
    } else if (event.target.className == "deletePart") {
      event.target.style.background = "red";
    } else if (event.target.className == "trash") {
      event.target.style.background = "red";
    }
  },
  false
);

document.addEventListener(
  "dragleave",
  function (event) {
    // réinitialisation de l'arrière-plan des potentielles cible du drop lorsque les éléments glissables les quittent
    if (event.target.className == "dropBox") {
      // console.log(event.target);
      event.target.style.background = "";
      event.stopPropagation();
    } else if (event.target.className == "deletePart") {
      event.target.style.background = "";
    } else if (event.target.className == "trash") {
      event.target.style.background = "";
    }
  },
  false
);

document.addEventListener(
  "drop",
  function (event) {
    // Empêche l'action par défaut (ouvrir comme lien pour certains éléments)
    event.preventDefault();
    // Déplace l'élément traîné vers la cible du drop sélectionnée
    if (event.target.className == "dropBox") {
      event.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);

      getCurrentinfoPostit();
      basePostit = JSON.parse(postitSauver);
      let midId = dragged.id;
      let newId = midId.substr(midId.length - 1);
      console.log(newId);
      console.log(event.target.id);

      hello(newId, event.target.id);

      storeCurrentinfoPostit();
    } else if (event.target.className == "trash") {
      event.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
    }
  },
  false
);
function hello(id, status) {
  console.log(`ceci est l'id : ${id}`);
  console.log(basePostit);
  if (status == "doneBox") {
    basePostit[id].status = "done";
    console.log(basePostit[id].status);
  }
  // } else if (status == "verifiedBox") {
  //   basePostit[id].status = "verified";
  // } else if (status == "deletePart") {
  //   basePostit[id].status = "trash";
  // }
}
