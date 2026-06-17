/**
 * Login Form Validation
 */
function vfun() {
    const uname = document.forms["form"]["uname"].value.trim();
    const upw = document.forms["form"]["upw"].value.trim();
    const errorDiv = document.getElementById("error");

    errorDiv.innerHTML = "";

    if (!uname) {
        errorDiv.innerHTML = "Please enter your username";
        return false;
    }
    if (!upw) {
        errorDiv.innerHTML = "Please enter your password";
        return false;
    }

    alert("Logged in successfully!");
    return true; 
}

/**
 * Registration Form Validation
 */
function vfun2() {
    const uname = document.forms["form2"]["uname"].value.trim();
    const email = document.forms["form2"]["email"].value.trim();
    const upw = document.forms["form2"]["upw"].value.trim();
    const upw2 = document.forms["form2"]["upw2"].value.trim();
    const errorDiv = document.getElementById("error");

    errorDiv.innerHTML = "";

    if (!uname) {
        errorDiv.innerHTML = "Please enter a username";
        return false;
    }
    if (!email) {
        errorDiv.innerHTML = "Please enter your email";
        return false;
    }
    if (!upw) {
        errorDiv.innerHTML = "Please enter a password";
        return false;
    }
    if (!upw2) {
        errorDiv.innerHTML = "Please confirm your password";
        return false;
    }
    if (upw !== upw2) {
        errorDiv.innerHTML = "Passwords do not match";
        return false;
    }

    alert("Registration successful!");
    return true;
}