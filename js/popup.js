var feedback_open = document.querySelector(".address__feedback");
var modal_feedback = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".modal-overlay");
var feedback_close = document.querySelector(".close-window");

feedback_open.addEventListener("click", function(event) {
  event.preventDefault();
  modal_feedback.classList.add("modal-window--show");
  overlay.classList.add("modal-window--show");
})

feedback_close.addEventListener("click", function(event) {
  event.preventDefault();
  modal_feedback.classList.remove("modal-window--show");
  overlay.classList.remove("modal-window--show");
})
