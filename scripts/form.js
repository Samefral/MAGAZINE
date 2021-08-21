let button = document.querySelector(".login-button");
let form = document.querySelector(".form");
form.addEventListener("submit", function() {
    alert("Неверный логин или пароль");
})

let forgetPassword = document.querySelector(".forget-password");
let registration = document.querySelector(".registration");

let support = document.querySelector(".form-support");
support.addEventListener("click", function(evt) {
    if (evt.target.tagName === "A") {
        alert("Временно не доступно");
    }
})