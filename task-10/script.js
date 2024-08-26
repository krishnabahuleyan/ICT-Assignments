function signup()
{
    
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var password_error = document.getElementById("password_error");
    if(password1!=password2)
    {
        console.log("Password do not match");
        password_error.style.visibility="visible";
        return false;
    }
    else{
        password_error.style.visibility="invisible";
        return true;
    }
}