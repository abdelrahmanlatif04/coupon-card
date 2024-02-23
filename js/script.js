var card = document.querySelector(".card");
var getCouponBtn = document.querySelector("#get-coupon-btn");
var returnBtn = document.querySelector("#return");
getCouponBtn.addEventListener("click", () => {
  flipFaces();
});

returnBtn.addEventListener("click", () => {
  flipFaces();
});

function flipFaces() {
  card.style.transform =
    card.style.transform == `rotateY(180deg)`
      ? `rotateY(0deg)`
      : `rotateY(180deg)`;
}
