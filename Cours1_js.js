/*
    Les différents types
    Number
    String
    Booléen
    */  
    //Conversion
    let variableStringAConvertir = "12";
    Number(variableStringAConvertir)
    parseInt();
    variableStringAConvertir = +variableStringAConvertir;
/*
    Déclaration de variable

    */
    var maVariableUn = 0;
    let maVariableDeux = 0;
    const maConst = 0;

    maVariableUn = 10;

/*
    function ma
    Afficher une variable 

    */
    console.log();
    //alert();

/*
    Déclaration de fonction
    avec ou sans return
    avec ou sans parametre, avec un defaut si parametre 
    */
    function somme(a,b) {
        var resultat = a + b;
        console.log("le resultat est" , resultat);
        //Gabarit literal 
        console.log(`le resultat est ${resultat}`);
    }
    sommeArrow = (a, b) => {
        return a + b;
    }
/* 
    Appel de fonction 

    */

    somme(5, 6);

 /* opérateur de comparaison
    */
   if( 10 == 10){
    'true'
   }else if (10 < 10) {
        'false'
   }else if (10 > 10){
    'false'
   }else if (10 < 10 && 10 < 11){

   }else if (10 < 10 || 10 < 11){

   }else{

   }

   /* Boucle */

   let resultat = 0;

   while(resultat < 10){
    resultat++;
    console.log(resultat);
   }
   
   for(var i = 0; i < 10; i++){
       console.log(i);
   }

   
// -------------------------------DEFINITION----------------------------------------------

// fruits = ['pomme', 'banane', 'poire', 'fraise']
// •fruits.length : retourne le nombre d'éléments dans le tableau (ici retourne 4)
// •fruits[0] : sélectionne le premier élément
// •fruits[length - 1] : sélectionne le dernier élément
// •fruits.push('pamplemousse') : ajoute un élément à la fin du tableau
// •fruits.unshift('pamplemousse') : ajoute un élément au début du tableau
// •fruits.pop() : supprime le dernier élément
// •fruits.shift() : supprime le premier élément
// •fruits.indexOf('banane') : retourne l'index d'un élément
// •fruits.join() : concatène les éléments dans une chaîne de caractères avec virgules, mais il est possible de spécifier un autre séparateur dans les paranthèses
// •fruits.slice() : crée une copie du tableau (à associer à une autre variable donc)
// •fruits.splice([début], [nbASupprimer], [élément(s)]) : retire, remplace ou ajoute des éléments.
// Début : l'index à partir duquel commencer le changement, si négatif, part de la fin du tableau
// nbASupprimer : un entier indiquant le nombre d'éléments à retirer ou remplacer
// Element(s) : les éléments à ajouter à partir du début précisé. Si aucun élément n'est spécifié, alors n'en ajoutera pas.


// Voici une fiche technique résumant l'ensemble des évènements principaux.
// Les écouteurs "on" et les propriétés JavaScript
// •onfocus - Quand l'utilisateur sélectionne l'élément
// •onchange - Quand l'utilisateur change la valeur de l'élément
// •onclick - Quand l'utilisateur clique sur l'élément
// •ondblclick - Quand l'utilisateur double-clique sur l'élément
// •onkeypress - Quand l'utilisateur appuie sur une touche du clavier dans
// l'élément
// Les évènements avec addEventListener
// •click - Quand l'utilisateur clique sur l'élément
// •mouseover - Quand l'utilisateur passe avec sa souris au-dessus d'un élément
// •mouseout - Quand l'utilisateur sort avec sa souris d'un élément
// •copy - Quand l'utilisateur copie un élément
// •cut - Quand l'utilisateur coupe un élément
// •paste - Quand l'utilisateur colle un élément
// Pour retrouver tous les évènements possibles avec
// JavaScript: https://developer.mozilla.org/fr/docs/Web/Events
// Référence des événements | MDN
// Les événements DOM sont déclenchés pour notifier au code des « changements intéressants » qui peuvent affecter l'exécution du code. Ces changements peuvent résulter d'interactions avec l'utilisateur, comme l'utilisation de la souris ou le redimensionnement d'une fenêtre, de changements dans l'état de l'environnement sous-jacent (par exemple, une...
