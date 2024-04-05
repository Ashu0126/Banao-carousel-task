const colors = [
  "#6411A9",
  "#4E27CE",
  "#01824D",
  "#6411A9",
  "#4E27CE",
  "#01824D",
  "#6411A9",
];

const lighterColor = [
  "#8767dd",
  "#6a84ff",
  "#3ab97f",
  "#8767dd",
  "#6a84ff",
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
