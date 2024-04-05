window.addEventListener("resize", function () {
  if (window.innerWidth < 850) {
    document.querySelector(".mobile-view").style.display = "block";
    document.querySelector(".desktop-view").style.display = "none";
  } else {
    document.querySelector(".mobile-view").style.display = "none";
    document.querySelector(".desktop-view").style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const carouselItems = document.querySelectorAll(".carousel-item");
  const bullets = document.querySelectorAll(".bullet");
  let currentSlide = 0;
  let touchStartX = 0;

  const swipeThreshold = 50;

  function showSlide(index) {
    gsap.to(".carousel-container", { duration: 0.5, x: -index * 100 + "%" });

    // Update the active state of bullet indicators
    bullets.forEach((bullet, i) => {
      bullet.classList.remove("active");
      if (i === index) {
        bullet.classList.add("active");
      }
    });

    currentSlide = index;
  }

  bullets.forEach((bullet, i) => {
    bullet.addEventListener("click", () => {
      showSlide(i);
    });
  });

  document.addEventListener("touchstart", touchStart);
  document.addEventListener("touchmove", touchMove);

  function touchStart(e) {
    touchStartX = e.touches[0].clientX;
  }

  function touchMove(e) {
    const touchEndX = e.touches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    if (deltaX > swipeThreshold) {
      if (currentSlide > 0) {
        showSlide(currentSlide - 1);
      }
    } else if (deltaX < -swipeThreshold) {
      if (currentSlide < carouselItems.length - 1) {
        showSlide(currentSlide + 1);
      }
    }
  }
});

// Initial check on page load
if (window.innerWidth < 850) {
  document.querySelector(".mobile-view").style.display = "block";
} else {
  document.querySelector(".desktop-view").style.display = "block";
}

const colors = [
  "#4625C0",
  "#4E27CE",
  "#16263B",
  "#10499D",
  "#01298D",
  "#01824D",
  "#6411A9",
];

const lighterColor = [
  "#1C0362",
  "#6a84ff",
  "#0D131B",
  "#3BCACE",
  "#ccc",
  "#3ab97f",
  "#8767dd",
];

let lastScrollTop = 0;

const as = document.querySelectorAll("a");
const triggerSection = document.querySelector("section");

var headings = document.querySelectorAll(".headings");
var paras = document.querySelectorAll(".paras");

var photos = document.querySelectorAll(".photos");

const move = (index, scrollDirection, ele) => {
  if (index < ele.length) {
    if (scrollDirection === "down") {
      gsap.to(ele[index], {
        top: "-=100%",
        ease: "expo.inOut",
        duration: 0.2,
      });

      if (index < ele.length) {
        gsap.to(ele[index + 1], {
          top: "-=100%",
          ease: "expo.inOut",
          duration: 0.2,
        });
      }
    } else if (scrollDirection === "up") {
      gsap.to(ele[index + 1], {
        top: "+=100%",
        ease: "expo.inOut",
        duration: 0.2,
      });

      if (index < ele.length) {
        gsap.to(ele[index], {
          top: "0",
          ease: "expo.inOut",
          duration: 0.2,
        });
      }
    }
  }
};

gsap.utils.toArray("section").forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: "bottom top",
    onUpdate: (self) => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollDirection = scrollTop > lastScrollTop ? "down" : "up";

      if (
        (scrollDirection === "down" && self.direction === 1) ||
        (scrollDirection === "up" && self.direction === -1)
      ) {
        gsap.to("body", {
          backgroundColor: colors[index],
          duration: 0.5,
        });

        gsap.to(".carousel", {
          backgroundColor: colors[index],
          duration: 0.5,
        });

        gsap.to(".photo-section", {
          backgroundColor: lighterColor[index],
          duration: 0.5,
        });

        prevIndex = index;

        headings.forEach((head) => {
          const h1s = head.querySelectorAll("h1");
          move(index, scrollDirection, h1s);
        });

        paras.forEach((text) => {
          const ps = text.querySelectorAll("p");
          move(index, scrollDirection, ps);
        });

        photos.forEach((photo) => {
          const img = photo.querySelectorAll(".photo");
          move(index, scrollDirection, img);
        });

        move(index, scrollDirection, as);
      }
      lastScrollTop = scrollTop;
    },
  });
});

// Add event listener for scrolling
window.addEventListener("scroll", handleScroll);
