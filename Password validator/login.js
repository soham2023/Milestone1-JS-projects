
document.addEventListener("DOMContentLoaded", function () {
    let passwordForm = document.getElementById("passwordForm");
    let passwordInput = document.getElementById("password");
    let repeatPasswordInput = document.getElementById("repeatPassword");

    passwordForm.addEventListener("submit", function (e) {
        e.preventDefault(); 

        let password = passwordInput.value;
        let repeatPassword = repeatPasswordInput.value;

        if (password === repeatPassword) { 
            
            document.location.href = './pass.html';
            localStorage ["password"] = password;
        } else {
            alert("Password Doesn't Match");
        }
        
        
    });
});





