const anim = document
  .querySelector(".collapsible__content").animate(
    { opacity:["1","0"] },
    { duration: 250, fill: "both", easing: "ease-out" }
  );

anim.pause();

document.querySelector(".collapsible__button").addEventListener("click", () => {
  if (anim.playState === "paused") {
    anim.play();
  } else {
    anim.reverse();
  }
});
