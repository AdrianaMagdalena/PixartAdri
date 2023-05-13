const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".modal");
const POPUP_CLOSE = document.querySelector(".modal__close");
const POPUP_IMG = document.querySelector(".modal__img");
const ARROW_LEFT = document.querySelector(".modal__arrow--left");
const ARROW_RIGHT = document.querySelector(".modal__arrow--right");

let currentImgIndex;

const showNextImg = () => {
  if (currentImgIndex === THUMBNAILS.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};

const showPreviousImg = () => {
  if (currentImgIndex === 0) {
    currentImgIndex = THUMBNAILS.length - 1;
  } else {
    currentImgIndex--;
  }
  POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};

const closeModal = () => {
  POPUP.classList.add("hidden");
  THUMBNAILS.forEach((element) => {
    element.setAttribute("tabindex", 1);
  });
};

THUMBNAILS.forEach((thumbnail, index) => {
  const showPopup = (e) => {
    POPUP.classList.remove("hidden");
    POPUP_IMG.src = e.target.src;
    currentImgIndex = index;
    THUMBNAILS.forEach((element) => {
      element.setAttribute("tabindex", -1);
    });
  };
  thumbnail.addEventListener("click", showPopup);
  thumbnail.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.keyCode === 13) {
      showPopup(e);
    }
  });
});

POPUP_CLOSE.addEventListener("click", closeModal);

ARROW_RIGHT.addEventListener("click", showNextImg);

ARROW_LEFT.addEventListener("click", showPreviousImg);

document.addEventListener("keydown", (e) => {
  if (!POPUP.classList.contains("hidden")) {
    if (e.code === "ArrowRight") {
      showNextImg();
    }
    if (e.code === "ArrowLeft") {
      showPreviousImg();
    }
    if (e.code === "Escape") {
      closeModal();
    }
  }
});

POPUP.addEventListener("click", (e) => {
  if (e.target === POPUP) {
    closeModal();
  }
});
