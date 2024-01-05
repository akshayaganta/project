var errorMessage = '';
function login() {
errorMessage = '';
document.getElementById("email").style.borderColor = "#ccc";
document.getElementById("password").style.borderColor = "#ccc";
const emailId = document.getElementById("email").value;
const password = document.getElementById("password").value;
const data =    localStorage.getItem(emailId);
emailValue = JSON.parse(data);
if(emailId ===  '') {
    document.getElementById("email").style.borderColor = "red";
} 
if(password ===  '') {
    document.getElementById("password").style.borderColor = "red";
}
if(emailId ===  '' || password ===  '' ) {
    errorMessage = '<div id="content">Please fill the mandatory fields</div>';
}else if(emailValue === null) {
    errorMessage = '<div id="content">Invalid credentials, please <a href="register.html">click here</a> to register</div>';
}else if(emailValue.emailId === emailId && emailValue.password != password) {
    errorMessage = '<div id="content">Username or Password is invalid</div>';
}
document.getElementById("errorMessage").innerHTML = errorMessage;
 
if(errorMessage === '') {
    window.location='loginsucess.html'
}
}