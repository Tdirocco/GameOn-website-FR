function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}





// #1_TODO: fermer la modale
    // New DOM Element for quit
const closeBtn = document.querySelector(".close"); 

    // quit modal event
closeBtn.addEventListener("click", quitModal);

    // quit modal form
function quitModal(){
  modalbg.style.display = "none";
}


// #2_Implémenter les entrées du formulaire
    // New DOM Elements for get and verify the entries 
const form = document.querySelector("#register");
const conditions = document.querySelector("#checkbox1");

const errPrenom = document.querySelector("#err_first");
const errNom = document.querySelector("#err_last");
const errEmail = document.querySelector("#err_email");
const errBdate = document.querySelector("#err_birthdate");
const errQuantity = document.querySelector("#err_quantity");
const errLocation = document.querySelector("#err_location");
const errConditions = document.querySelector("#conditions");

    // Form Object Init
const regData = {};

    // Form Valid Object Init
const validReg = {
    errors:{},
    isValid: false};

    // Testing Functions
function isRequired(value){
  return value?.length >0 && value !== "undefined";
}

function inMin(value, min){
  return value?.length>= min;
}

function isEmail(email){
  const regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return regex.test(email);
}

function isValidDate(date){
  const regex = /^\d{4}-(02-(0[1-9]|[12][0-9])|(0[469]|11)-(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))$/;
  return regex.test(date);
}


    // Getting entries
form.addEventListener("input", function (e){
  regData[e.target.name] = e.target.value;

if (!inMin(regData.first,2)){
  errPrenom.setAttribute("data-error-visible",'true');
  errPrenom.setAttribute("data-error",'Veuillez entrer 2 caractères ou plus pour le champ Prénom.');
  validReg.errors.first=true;
}else{
  errPrenom.removeAttribute("data-error-visible");
  errPrenom.removeAttribute("data-error");
  validReg.errors.first=false;
}

if (!inMin(regData.last,2)){
  errNom.setAttribute("data-error-visible",'true');
  errNom.setAttribute("data-error",'Veuillez entrer 2 caractères ou plus pour le champ Nom.');
  validReg.errors.last=true;
}else{
  errNom.removeAttribute("data-error-visible");
  errNom.removeAttribute("data-error");
  validReg.errors.last=false;
}

if (!isRequired(regData.email)){
  errEmail.setAttribute("data-error-visible",'true');
  errEmail.setAttribute("data-error",'Veuillez entrer une adresse Mail valide.');
  validReg.errors.email=true;
}else if(!isEmail(regData.email)){
  errEmail.setAttribute("data-error-visible",'true');
  errEmail.setAttribute("data-error",'Veuillez entrer une adresse Mail valide.');
  validReg.errors.email=true;
}else{
  errEmail.removeAttribute("data-error-visible");
  errEmail.removeAttribute("data-error");
  validReg.errors.email=false;
}

if (!isRequired(regData.birthdate)){
  errBdate.setAttribute("data-error-visible",'true');
  errBdate.setAttribute("data-error",'Vous devez entrer votre date de naissance.');
  validReg.errors.birthdate=true;
}else if(!isValidDate(regData.birthdate)){
  errBdate.setAttribute("data-error-visible",'true');
  errBdate.setAttribute("data-error",'Vous devez entrer une date de naissance Valide.');
  validReg.errors.birthdate=true;
}else{
  errBdate.removeAttribute("data-error-visible");
  errBdate.removeAttribute("data-error");
  validReg.errors.birthdate=false;
}

if (!isRequired(regData.quantity)){
  errQuantity.setAttribute("data-error-visible",'true');
  errQuantity.setAttribute("data-error",'Vous devez indiquer un nombre de tournois de 0 à 99.');
  validReg.errors.quantity=true;
}else{
  errQuantity.removeAttribute("data-error-visible");
  errQuantity.removeAttribute("data.error");
  validReg.errors.quantity=false;
}

if (!isRequired(regData.location)){
  errLocation.setAttribute("data-error-visible",'true');
  errLocation.setAttribute("data-error",'Vous devez choisir une option.')
  validReg.errors.location=true;
}else{
  errLocation.removeAttribute("data-error-visible");
  errLocation.removeAttribute("data.error");
  validReg.errors.location=false;
}

conditions.addEventListener("change", function(){
  if (conditions.checked !== true){
    errConditions.setAttribute("data-error-visible", 'true');
    errConditions.setAttribute("data-error", 'Vous devez accepter les termes et conditions.');
    validReg.errors.conditions=true;
  }else{
    errConditions.removeAttribute("data-error-visible");
    errConditions.removeAttribute("data-error");
    validReg.errors.conditions=false;
  }
})

if (validReg.errors.first == true ||
  validReg.errors.last == true ||
  validReg.errors.email == true ||
  validReg.errors.birthdate == true ||
  validReg.errors.quantity == true ||
  validReg.errors.location == true ||
  validReg.errors.conditions == true) {
    validReg.isValid = false;
  }else{
    validReg.isValid = true;
  }

  if (validReg.isValid == false){
    btnSubmit.disabled = true;
  }else{
    btnSubmit.disabled = false;
  }



console.log(regData);
console.log(validReg);

})



// #3_Ajouter validation ou messages d'erreur
    //new DOM Element for submit validation
const btnSubmit = document.querySelector("#submitBtn");





    // Submit Validation Rules
btnSubmit.addEventListener("sumbit", function (e){
  e.prenventDefault();

})



// #4_Ajouter confirmation d'envoie réussi




