// let tab = [
//     'titi',
//     'toto',
//     'tata'
// ];
// tab.push('tonton')
// console.log(tab);
// tab.pop()
// console.log(tab);
// tab.shift();
// console.log(tab);
// tab.unshift('titi');
// console.log(tab);


// let tab2 = [
//     ['titi','toto','tata'],
//     ['truc','muche','bidule']
// ];

// console.log(tab2[0][0],tab2[1][2]);

// let associatif = {
//     'nom':'koenig',
//     'prenom':'olivier',
//     'age':'43 ans',
// };
// console.log(associatif);
// associatif['sexe']='masculin';
// console.log(associatif);
// delete(associatif.sexe);
// console.log(associatif);

// ---------------------------------------------------------------------------------------
// Je vous invite à récupérer le tableau ci-dessous et à y rajouter un 3eme tableau à l’aide de la
// fonction splice().
// let tab3 = [
// ['titi','toto','tata'],
// ['truc','muche','bidule']
// ];

// tab3.splice(2,0,['pipi','caca','popo']);
// console.log(tab3);
// console.log(tab3[2][0])
// console.log(tab3[0],tab3[1],tab3[2]);
// for (let j = 0; j < tab3[0].length ; j++) {
//     console.log(tab3[0][j]);
// }
// for (let j = 0; j < tab3[1].length ; j++) {
//     console.log(tab3[1][j]);
// }
// for (let j = 0; j < tab3[2].length ; j++) {
//     console.log(tab3[2][j]);
// }

// ---------------------------------------------------------------------------
// for

// let tab4 = ['mimi','momo','mama sita'];

// for (let i = 0; i < tab4.length ; i++) {
//     console.log(tab4[i]);
// }

// ----------------------------CORECTION-------------------------------------

// let array = [
//     ["titi", "tata", "toto"],
//     ["jiji", "jaja", "jojo"],
//   ];
  
//   console.log(array);
  
  
//   array.splice(2, 0, ["jobi", "joba", "gipsyking"]);
  
//   console.log(array);
  
//   let tableauChiffre = [1, 4, 2, 5];
  
//   for (let i = 0; i < tableauChiffre.length; i++){
//     console.log(`Affichage du tableau : ${tableauChiffre[i]}`)
//   }
  
//   for (let i = 0; i < array.length; i++){
//     console.log(`Affichage du tableau : ${array[i]}`);
//     for (let j = 0; j < array[i].length; j++){
//       console.log(`Affichage du tableau : ${array[i][j]}`);
//     }
//   }
// ------------------------------------------------------------------------------


let classe = [
    'jean',
    'jacky',
    'michel',
    'bertrand',
    'mamacita'
];

// // for
// for (let i = 0; i < classe.length ; i++) {
//     console.log(classe[i]);
// }

// // for of
// for(const nom of classe){
//     console.log(nom);
// }

// // for in
// for(const nom in classe){
//     console.log(nom);
// }
// forEach
// classe.forEach(prenom=>console.log(prenom));

// // les objets T4 comment les parcourir



// // for each
// Object.values(classe).forEach(value=>{
//     console.log(value)
//     })
//     Object.keys(classe).forEach(key=>{
//     console.log(value)
//     })
//     //for in
//     for (const index in classe){
//     console.log(classe[index]
//     );
// }


// ---------------------------------------EXERCICE------------------------------------------------------
// Consigne :
// - Créez une fonction qui permet de lire parcourir et de console.log les deux tableaux ci-
// dessous.
// - Le résultat attendu est celui-ci :
// let formateur = ['Ophelie', 'Benjamin','Mathieu','Leo']
// let benjamin = {
// 'nom': 'bailly',
// 'prenom':'benjamin',
// 'force': 'extreme',
// 'ego': 'surdimensionné'
// }

let formateur = ['Ophelie', 'Benjamin','Mathieu','Leo']

let benjamin = {
'nom': 'bailly',
'prenom':'benjamin',
'force': 'extreme',
'ego': 'surdimensionné'
}

function readTab(tab) {
    let data = "";
    for (let index in tab) {
      data += index + " : " + tab[index] + "\n";
    }
  
    console.log(data);
  }
  
  readTab(formateur);
  readTab(benjamin);

//Les objets 

  let chien = {
      race: 'caniche',
      poil: "long",
      aboyer:() => console.log('Ouaf ouaf')
    }
    chien.aboyer(); 

// ----------------------------
    let lienSelector = document.querySelector("#lien-google-js");
    lienSelector.onclick = () => {
        if(confirm('Etes-vous sûr ?')) {
        location.href=" https://www.google.fr"
        }
        }
    
