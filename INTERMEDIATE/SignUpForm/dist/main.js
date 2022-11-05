const validate = () => {
    let password1 = document.forms["myForm"]["password1"]
    let password2 = document.forms["myForm"]["password2"]
    if (password1 != password2) {
        alert("passwords are not the same");
        return false
    }
}

document.getElementById("validate").addEventListener("click", ()=>validate())