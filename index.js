function validate() {
    let username = document.getElementById('username').value;
    let user_ele = document.getElementById("username");
    let message = document.querySelector(".message"); // Corrected message selection
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[^\s]{8,}$/;
    if (!regex.test(username)) {
        message.innerHTML = '<p style="color: red;">Username must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one special character, and no spaces.</p>';
    } else {
        let password = document.getElementById("pass").value;
        let cnf_password = document.getElementById("cnf_pass").value;
        if (!regex.test(password)) {
            message.innerHTML = '<p style="color=red"> password not valid</p>'
        } else if (!(password === cnf_password)) {
            message.innerHTML = '<p style="color=red"> password do not match</p>';
        } else {
            message.innerHTML = '<p style="color=green"> All ok</p>';
        }
    }
}