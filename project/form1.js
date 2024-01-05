var errorMessage = '';
function register() {
setDefault();
const name = document.getElementById("name").value;
const emailId = document.getElementById("email").value;
const password = document.getElementById("password").value;
const reenterpassword = document.getElementById("reenterpassword").value;
const branches = document.getElementById("branches").value;
const mobile = document.getElementById("mobile").value;
const address = document.getElementById("address").value;
var mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var phoneno = /^\d{10}$/;
var passw=  /([a-z].*[A-Z])|([A-Z].*[a-z])/;
if(name ===  '') {
    document.getElementById("name").style.borderColor = "red";
} 
if(email===  '') {
    document.getElementById("email").style.borderColor = "red";
}
if(password ===  '') {
    document.getElementById("password").style.borderColor = "red";
}
if(reenterpassword ===  '') {
    document.getElementById("reenterpassword").style.borderColor = "red";
}
if(branches ===  '') {
    document.getElementById("branches").style.borderColor = "red";
}
if(mobile ===  '') {
    document.getElementById("mobile").style.borderColor = "red";
}
if(address ===  '') {
    document.getElementById("address").style.borderColor = "red";
} 
 
if( name ===  '' || emailId ===  '' || password ===  '' || reenterpassword ===  '' || branches ===  '' || 
 mobile ===  '' || address ===  '' ) {
    errorMessage = '<div id="content">Please fill the mandatory fields</div>';
}else if(!emailId.match(mailformat)) {
   errorMessage = '<div id="content">Please enter valid email address</div>';
}else if(!password.match(passw)) {
    errorMessage = '<div id="content">Password format should match the criteria</div>';
}else if( password != reenterpassword) {
    errorMessage = '<div id="content">Password and confirm password should be same</div>';
}else if(!mobile.match(phoneno)) {
    errorMessage = '<div id="content">Please enter valid mobile number</div>';
} 
 
document.getElementById("errorMessage").innerHTML = errorMessage;
 
if(errorMessage === '') {
    const obj = {
    name: name,
    email: email,
    password: password,
    reenterpassword: reenterpassword,
    branches: branches,
    mobile: mobile,
    address: address
    }
     localStorage.setItem(emailId, JSON.stringify(obj ));
     window.location='registersucess.html'
}
}
function setDefault() {
document.getElementById("name").style.borderColor = "#ccc";
document.getElementById("email").style.borderColor = "#ccc";
document.getElementById("password").style.borderColor = "#ccc";
document.getElementById("reenterpassword").style.borderColor = "#ccc";
document.getElementById("branches").style.borderColor = "#ccc";
document.getElementById("mobile").style.borderColor = "#ccc";
document.getElementById("address").style.borderColor = "#ccc";
errorMessage = '';
}