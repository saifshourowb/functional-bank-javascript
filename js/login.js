
// indexe.html er site er sathe connect koranu hoyce 
document.getElementById("button-submit").addEventListener('click', function(){
const emailField = document.getElementById("user-email");
const userEmail = emailField.value;
const passwordField = document.getElementById("user-password");
const userPassword = passwordField.value;
if(userEmail == 'saifshourowb@icloud.com' && userPassword  == 'secret'){
    window.location.href='bankingsite.html';
}
});




