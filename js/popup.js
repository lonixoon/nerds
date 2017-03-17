var feedback_btn = document.querySelector(".map__address__feedback");
var feedback_modal = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".close");

// Начало Попап окно обратной связи
feedback_btn.addEventListener("click", function(event) {
  event.preventDefault();
  feedback_modal.classList.add("modal-show");
  overlay.classList.add("modal-show");
})

close.addEventListener("click", function(event) {
  event.preventDefault();
  feedback_modal.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
})
// Конец Попап окно обратной связи