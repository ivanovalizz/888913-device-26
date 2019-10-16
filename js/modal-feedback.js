var feedback = document.querySelector(".feedback-link");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".button-close");
var form = popup.querySelector("form");
var user = popup.querySelector("[name = user-name]");
var email = popup.querySelector("[name = email]");
var message = popup.querySelector("textarea");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

feedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    user.focus();

    if (storage) {
        email.value = storage;
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
    if (!user.value || !email.value || !message) {
        console.log("Заполните все поля!");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("email", email.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
   if (evt.keyCode === 27) {
       if (popup.classList.contains("modal-show")) {
           evt.preventDefault();
           popup.classList.remove("modal-show");
       }
   }
});