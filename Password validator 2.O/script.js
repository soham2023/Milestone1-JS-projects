document.addEventListener("DOMContentLoaded", () => {
    let loginForm = document.getElementById("login-form");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let validationMsg = document.getElementById("validationMsg");
    let submitButton = document.getElementById("btn");
    let messageBox = document.querySelector(".message-box");

    submitButton.addEventListener("click", () => {
        const emailValue = email.value;
        const passwordValue = password.value;

        const validEmail = emailValue.includes('@gmail.com');
        const validPassword = passwordValue.length >= 8;

        if (validEmail && validPassword) 
        {
            validationMsg.textContent = "Email & password are valid ";
            validationMsg.style.color = "green";
            alert("Validation is successful");
            messageBox.style.display = "block"; 
            localStorage ["validPassword"] = password;
            localStorage ["validEmail"] = email;
            window.location.href = "./valid.html"
        } 
        else if (!validEmail && !validPassword)
         {
            validationMsg.textContent = "Email & password is invalid [Email should contain @gmail.com & password length should be 8 ]";
            validationMsg.style.color = "red";
            messageBox.style.display = "block"; 
            alert("Validation is unsuccessful");
        } 
        else if (!validEmail) 
        {
            validationMsg.textContent = "Email is invalid [Email should contain @gmail.com]";
            validationMsg.style.color = "red";
            messageBox.style.display = "block"; 
            alert("Validation is unsuccessful");
        }
         else if (!validPassword) 
         {
            validationMsg.textContent = "Password is invalid [password length should be 8]";
            validationMsg.style.color = "red";
            alert("Validation is unsuccessful[password length should be 8 ]");
            messageBox.style.display = "block"; 
        }
    });
});

