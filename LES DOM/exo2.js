// - Enlevez tout les scripts ajouté plus tôt.
// - Modifiez le style du body en js pour mettre un background gradient plutôt que le bleu de base.

document.body.style.backgroundColor = "pink";

/*--------------------CORRECTION---------------------ruben--------------------------------
    Enlevez tout les script ajouté plus tôt
    Modifiez le style du body pour mettre un background gradient plutôt que le bleu actuel
    */

    document.body.style.backgroundColor = "unset";
    // document.body.style.color = "red";
    
    document.body.style.background = "linear-gradient(#f69d3c, #3f87a6))";
    
    //-------------------correction-------------------benjamin-----------------------------
    
    // document.querySelector("body").className = "gradientBody";
    // document.querySelector("h1").style.color = "#111d5e"; //il n'existe plus

// ----------------------------RAPPEL-----------------------------------------------------
    // Voici une fiche technique résumant l'ensemble des fonctions et propriétés principales 
    // liées au DOM.
    
    // Accéder aux éléments
    // --------------------
    
    // getElementsByTagName() - Sélectionne tous les éléments avec la balise entre parenthèses
    
    // getElementById() - Sélectionne un seul élément : le premier ayant l'ID entre parenthèses
    
    // getElementsByClassName() - Sélectionne tous les éléments avec la classe entre parenthèses
    
    // querySelector() - Sélectionne un seul élément : celui avec le sélecteur entre parenthèses
    
    // querySelectorAll() - Sélectionne tous les éléments avec le sélecteur entre parenthèses
    
    // Modifier les éléments
    // ---------------------
    
    // textContent - Modifie le texte d'un élément
    
    // innerHTML - Modifie l'HTML d'un élément
    
    // Ajouter et supprimer des éléments
    // ---------------------------------
    
    // createElement() - Crée un élément
    
    // prepend() - Ajoute l'élément entre parenthèses avant le premier enfant
    
    // append() - Ajouter l'élément entre parenthèses derrière le dernier élément enfant
    
    // appendChild() - Ajouter l'élément entre parenthèses derrière l'élément cible 
    // (ne peut pas contenir du texte)
    
    // insertBefore() - Insère un élément avant l'élément cible
    
    // Modifier le style d'un élément
    // ------------------------------
    
    // style.propriété - Modifie la propriété CSS spécifiée, par exemple : style.color = "orange"
    // className - Modifie les classes d'un élément
   
   
    // ----------------------------------------------------------------------------------------