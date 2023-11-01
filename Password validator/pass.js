const confirmPassword = document.getElementById("confirmPassword")
const save = document.getElementById("save")
save.addEventListener("click",function()
{
	if(localStorage["password"]===confirmPassword.value){
		alert("Password Matched")
		window.location.href = "./valid.html"
	}else{
		alert("If you dont remeber the password click on forget password")
		
	}
});

