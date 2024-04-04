var moves = document.querySelectorAll(".move");

var carsouelItem = document.querySelectorAll(".carouselBtnItem");
var index = 0;
var animating = false;

document.querySelector("#btn").addEventListener("click", () => {
  if (carsouelItem.length !== index + 1 && !animating) {
    animating = true;
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

  document.querySelector("#btn").addEventListener("click", () => {
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
