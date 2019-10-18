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
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
    popup.classList.remove("modal-error");
    if (!user.value || !email.value || !message.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        setTimeout(function() {
            popup.classList.add("modal-error");
        }, 0.3)
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
           popup.classList.remove("modal-error");
       }
   }
});

var mapLink = document.querySelector(".map-image");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".button-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            mapPopup.classList.remove("modal-show");
        }
    }
});