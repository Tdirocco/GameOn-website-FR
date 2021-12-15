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

const errPrenom = document.querySelector("#err_first");
const errNom = document.querySelector("#err_last");
const errEmail = document.querySelector("#err_email");
const errBdate = document.querySelector("#err_birthdate");
const errQuantity = document.querySelector("#err_quantity");
const errLocation = document.querySelector("#err_location");
const errConditions = document.querySelector("#checkbox1");

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




})



// #3_Ajouter validation ou messages d'erreur
    //new DOM Element for submit validation
const btnSubmit = document.querySelector("#submitBtn");

    // Submit Validation Rules
form.addEventListener("sumbit", function (e){
  e.prenventDefault();

})



// #4_Ajouter confirmation d'envoie réussi




