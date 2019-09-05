var addtocart = document.querySelectorAll(".addtocart");
var modal = document.querySelector(".modal-cart");
var overlay = document.querySelector(".overlay");
var orderbutton = modal.querySelector(".size-form__button");

addtocart.forEach(function(elem) {
  elem.addEventListener("click", function openmodal(evt) {
    evt.preventDefault();
    overlay.classList.add("overlay--show");
    modal.classList.add("modal-cart--show");
  })
})

overlay.addEventListener("click", function closemodal() {
  overlay.classList.remove("overlay--show");
  modal.classList.remove("modal-cart--show");
})

orderbutton.addEventListener("click", function makeorder() {
  overlay.classList.remove("overlay--show");
  modal.classList.remove("modal-cart--show");
})
