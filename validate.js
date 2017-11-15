function formValidation(){
    var fname = document.signup.fullname;
    var userid = document.signup.userid;
    var passid = document.signup.passid;
    var uadd = document.signup.address;
    var ucountry = document.signup.country;
    var uzip = document.signup.zip;
    var uemail = document.signup.email;
    var umsex = document.signup.msex;
    var ufsex = document.signup.fsex;
    
    if(allLetter(fname)){
    if(userid_validation(userid, 5, 12)){
    if(passid_validation(passid, 7, 12)){
    if(alphanumeric(uadd)){
    if(countryselect(ucountry)){
    if(allNumeric(uzip)){
    if(validateEmail(uemail)){
    if(validsex(umsex, ufsex)){
        
    }   
    }
    }
    }    
    }   
    }    
    }
    }
    return false;
}

//function for validating full name
function allLetter(fname){
    var letters = /^[a-zA-Z\s]+$/g;
    var fname_len = fname.value.length;
    var trimed_fname = fname.value.trim();
    if(trimed_fname.match(letters)){
        return true;
    }else{
        alert("Full name must have alphabet characters only!");
        fname.focus();
        return false;
    }
}

//function for validating user id
function userid_validation(userid, mx, my){
    var userid_length = userid.value.length;
    if(userid_length == 0 || userid_length < mx || userid_length >= my){
       alert("user id should not be empty/ user id must be between " + mx + " to " + my + " characters!");
        userid.focus();
        return false;
    }
    return true;
}

//function for validating user password
function passid_validation(passid, mx, my){
    var passid_length = passid.value.length;
    if(passid_length == 0|| passid_length < 7 || passid_length >=12){
        alert("Password should not be empty/ password must be between " + mx + " to " + my + " characters!");
        passid.focus();
        return false;
    }
    return true;
}

//function for validating address
function alphanumeric(uadd){
    var letters = /^[0-9a-zA-Z]+$/g;
    if(uadd.value.match(letters)){
        return true;
    }else{
        alert("Address must have alphanumeric characters only!");
        uadd.focus();
        return false;
    }
}

//function for validating country selected
function countryselect(country){
    if(country.value == "Default"){
        alert("Please select your country from the list");
        ucountry.focus();
        return false;
    }else{
       return true; 
    }    
}

//function for validating zip code
function allNumeric(zip){
    var numbers = /[0-9]+$/g;
    if(zip.value.match(numbers)){
        return true;
    }else {
        alert("Zip code must have numeric characters only!");
        zip.focus();
        return false;
    }
}

//function for validating email
function validateEmail(uemail){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    if(uemail.value.match(mailformat)){
        return true;
    }else {
        alert("Invalid email format!");
        uemail.focus();
        return false;
    }
}

function validsex(umsex, ufsex){
    var x = 0;
    if(umsex.checked){
        x++;
    }if(ufsex.checked){
        x++;
    }if(x == 0){
       alert("select Male/Female");
        umsex.focus();
        return false;
    }else{
        alert("Form successfully submitted");
        window.location.reload();
        return true; 
    }    
}
