var frontFace = document.querySelector(".front");
var backFace = document.querySelector(".back");
var getCouponBtn = document.querySelector("#get-coupon-btn");
var returnBtn = document.querySelector("#return");
getCouponBtn.addEventListener("click", () => {
  flipFaces();
});

returnBtn.addEventListener("click", () => {
  flipFaces();
});

function flipFaces() {
  frontFace.classList.toggle("hidden");
  backFace.classList.toggle("hidden");
}
