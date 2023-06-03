function onChangeCheckbox() {
// parcourir la liste des tâches
for (let i=0 ; i<toDos.length; i++) { 
    // vérifier dans le tableau l’élèment ayant l’id correspondant à celui de la 
    // case coché
    if(toDos[i].id==this.title ) { 
        toDos[i].completed =! toDos[i].completed 
       saveDataToLocalStorage("toDos",toDos)
        displayToDos(); 
    } 
    } 
   }
 function onClickDeleteButton(){
    if (confirm('Voulez-vous vraiment supprimer cette tache ?')) { 
        for (let i =0 ; i<toDos.length;i++) { // parcourir les tâches
        if(toDos[i].id == this.title) { 
        // supprimer la case de l’élèment en question
       toDos.splice(i,1)
        // enregistrer la liste dans le LocalStorage
        saveDataToLocalStorage("toDos",toDos)
        displayToDos(); 
       // appeler la fonction displayToDos() pour actualiser l’affichage 
        alert('Tache supprimée avec succès!'); 
        } 
        } 
        }



 } 
function onClickAddButton() {


    // récupérer ce que l’utilisateur a saisie dans l’input
 let saisir = document.querySelector("input")
 if (saisir.value.length>2) { // tester sur la longueur du saisie dans l’input
 const newTodo = {}; // créer un objet vide
 newTodo.id = toDos.length === 0 ? 1 : toDos[toDos.length-1].id + 1; 
 // affecter dans la propriété title la valeur saisie dans l’input
 newTodo.title=saisir.value ; 
 newTodo.completed = false; // nouvelle tâche est par défaut not completed
 // insérer la nouvelle tâche dans le tableau des tâches
 toDos.push(newTodo);
 // enregistrer la liste dans le LocalStorage
 saveDataToLocalStorage("toDos",toDos)
 displayToDos(); 
 // vider l’input de la valeur saisie 
 saisir.value ="" 
 } else { 
    alert("incorrect title")
 // afficher une alerte qui demande de bien saisir le titre 
 
 } 
} 
