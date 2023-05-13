const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".modal");
const POPUP_CLOSE = document.querySelector(".modal__close");
const POPUP_IMG = document.querySelector(".modal__img");

THUMBNAILS.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    POPUP.classList.remove("hidden");
    POPUP_IMG.src = e.target.src;
  });
});

POPUP_CLOSE.addEventListener("click", () => {
  POPUP.classList.add("hidden");
});
