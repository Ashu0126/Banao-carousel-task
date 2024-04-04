var moves = document.querySelectorAll(".move");
var btn = document.querySelector("#btn");

var links = document.querySelectorAll(".links-btn a");

var carsouelItem = document.querySelectorAll(".carouselBtnItem");
var index = 0;
var animating = false;

const colors = ["#6411A9", "#4E27CE", "#01824D"];

btn.addEventListener("click", () => {
  var zoomInScale = 0.95;
  var zoomOutScale = 1;

  if (carsouelItem.length !== index + 1 && !animating) {
    animating = true;
    gsap.to("body", {
      backgroundColor: colors[index],
      duration: 0.5,
    });
    gsap.to(".carouselBtn", {
      backgroundColor: colors[index],
      duration: 0.5,
    });

    gsap.to(carsouelItem[index], {
      top: "-=100%",
      ease: Expo.easeInOut,
      duration: 0.5,
      onComplete: () => {
        animating = false;
      },
    });

    index++;

    gsap.to(carsouelItem[index], {
      top: "-=100%",
      ease: Expo.easeInOut,
      duration: 0.5,
    });
  }
});

moves.forEach((move) => {
  var ps = move.querySelectorAll("p");
  var animating = false;
  var h1s = move.querySelectorAll("h1");
  var index = 0;

  btn.addEventListener("click", () => {
    if (h1s.length !== index + 1 && ps.length !== index + 1 && !animating) {
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 0.5,
        onComplete: () => {
          animating = false;
        },
      });

      animating = true;
      gsap.to(ps[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 0.5,
      });

      index++;

      gsap.to(ps[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 0.5,
      });

      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 0.5,
      });
    }
  });
});
