const myInput = document.querySelector(".password");
const lowercase = document.querySelector(".lowercase");
const length = document.querySelector(".passLength");
const num = document.querySelector(".num");
const uppercase = document.querySelector(".capital");
const special = document.querySelector(".specialChar");
const confirmPassReq = document.querySelector(".passwordCheck");
const confirmedPassword = document.querySelector(".password-confirm");

myInput.onfocus = function () {
    document.querySelector(".reqs").style.display = "block";
}

myInput.onblur = function () {
    document.getElementById(".reqs").style.display = "none";
}

myInput.onkeyup = function () {

    //validate lowercase letters
    let lowercaseLetters = /[a-z]/g;
    if (myInput.value.match(lowercaseLetters)) {
        lowercase.style.color = "green";


    } else {
        lowercase.style.color = "red";
    }

        //validate uppercase letters
    let upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        uppercase.style.color = "green";

    } else {
        uppercase.style.color = "red";
    }

        // validate numbers
    let numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        num.style.color = "green";
    } else {
        num.style.color = "red";
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.style.color = "green";
    } else {
        length.style.color = "red";
    }

    // validate special characters
    let specialCharacters = /[^A-Za-z0-9]/;
    if (myInput.value.match(specialCharacters)) {
        special.style.color = "green";
    } else {
        special.style.color = "red";
    }
    console.log(myInput.value);

    //validate confirm password
    if(myInput.value == confirmedPassword.value){
        confirmPassReq.style.color = "green";
    } else {
        confirmPassReq.style.color = "red";
    }
    console.log(confirmedPassword.value);

}


confirmedPassword.onkeyup = function(){

    //validate confirm password
    if(myInput.value == confirmedPassword.value){
        confirmPassReq.style.color = "green";
    } else {
        confirmPassReq.style.color = "red";
    }
    console.log(confirmedPassword.value);


}