function contactMeAlert() {
  //popup alert on "contact me" button click
  alert(
    "Thank you for trying to contact me! Unfortunately, there's no contact form. If you really wish to send me a message, please do so on my Instagram page!"
  );
}

let modal = document.getElementById("myModal"); // get the modal
let images = document.getElementsByClassName("myImages"); // get the img and insert in modal
let modalImg = document.getElementById("img01");

//Go through all of the images with our custom class:
for (let i = 0; i < images.length; i++) {
  let img = images[i];
  //attach click listener for this image:
  img.onclick = function (evt) {
    console.log(evt);
    modal.style.display = "block";
    modalImg.src = this.src;
  };
}

let span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};
