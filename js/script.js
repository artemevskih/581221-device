//----------- form-modal -----------//
var link = document.querySelector(".js-write-us"),
    popup = document.querySelector(".js-form-modal"),
    close = document.querySelector(".js-modal-close"),
    form = popup.querySelector("form"),
    login = popup.querySelector("[name=name]"),
    email = popup.querySelector("[name=email]"),
    text = popup.querySelector("[name=text]"),
    isStorageSupport = true,
    storage = "",
    storageEmail = "";

try {
  storage = localStorage.getItem("login");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("form-modal-show");

  if (storage) {
    if (storageEmail) {
      login.value = storage;
      email.value = storageEmail;
      text.focus();
    } else {
      login.value = storage;
      email.focus();
    }
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("form-modal-show");
  popup.classList.remove("form-modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("form-modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("form-modal-error");
    console.log('Нужно ввести имя и email');
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("form-modal-show")) {
      popup.classList.remove("form-modal-show");
      popup.classList.remove("form-modal-error");
    }
  }
});
// ----------- map popup ------------- //
var mapLink = document.querySelector(".js-map"),
    mapPopup = document.querySelector(".map-popup"),
    mapClose = mapPopup.querySelector(".js-map-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("map-popup-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("map-popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("map-popup-show")) {
      mapPopup.classList.remove("map-popup-show");
    }
  }
});

// --------- search ---------- //

var searchForm = document.querySelector(".js-search");
    searchInput = searchForm.querySelector(".site-search-input");

searchForm.addEventListener("submit", function(evt) {
  if (!searchInput.value) {
    evt.preventDefault();
  }
});
