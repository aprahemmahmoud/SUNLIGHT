// dark mode
let mode = document.querySelector(".mode");

if (localStorage.mode == "dark-mode") {
  document.body.classList.add("dark-mode");
  mode.innerHTML = '<i class="fa-regular fa-sun"></i>';
}

mode.addEventListener("click", function (e) {
  document.body.classList.toggle("dark-mode");
  if (document.body.className == "dark-mode") {
    mode.innerHTML = '<i class="fa-regular fa-sun"></i>';
  } else {
    mode.innerHTML = '<i class="fa-regular fa-moon"></i>';
  }
  localStorage.mode = document.body.className;
});

//scroll up
let scrollUp = document.querySelector(".scroll-up");

onscroll = () => {
  if (scrollY > 300) {
    scrollUp.style.bottom = "3%";
  } else {
    scrollUp.style.bottom = "-10%";
  }
};

scrollUp.addEventListener("click", function (e) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//scroll event
let cont = document.querySelectorAll(".uptodown");
let img = document.querySelectorAll(".Home .image");

const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);

    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  },
  {
    margin: "0px 0px -400px 0px",
  }
);

cont.forEach((element) => {
  observer.observe(element);
});

const observeImg = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("toup", entry.isIntersecting);
    if (entry.isIntersecting) {
      observeImg.unobserve(entry.target);
    }
  });
});

img.forEach((element) => {
  observeImg.observe(element);
});

let chooseCont = document.querySelectorAll(".Choose .content");

let observeChooseCont = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("toRight", entry.isIntersecting);
    if (entry.isIntersecting) {
      observeChooseCont.unobserve(entry.target);
    }
  });
});
chooseCont.forEach((element) => {
  observeChooseCont.observe(element);
});

let chooseImg = document.querySelectorAll(".Choose .image");

let observeChooseImg = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("toLeft", entry.isIntersecting);
    if (entry.isIntersecting) {
      observeChooseImg.unobserve(entry.target);
    }
  });
});
chooseImg.forEach((element) => {
  observeChooseImg.observe(element);
});

// swiper
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: '',
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    slidesPerView: "auto",
  });
});

// Navigation
const Links = document.querySelector("nav .Links ul");
const linkLi = document.querySelectorAll("nav .Links ul li");
const hamburger = document.querySelector(".hamburger");
const spans = document.querySelectorAll(".hamburger span");
let isMenuOpen = false;

// Initialize menu state
function initMenu() {
  if (window.innerWidth <= 880) {
    Links.style.visibility = "hidden";
    Links.style.height = "0px";
    Links.style.opacity = "0";
    linkLi.forEach((element) => {
      element.style.display = "none";
      element.style.opacity = "0";
    });
  } else {
    Links.style.visibility = "visible";
    Links.style.height = "auto";
    Links.style.opacity = "1";
    linkLi.forEach((element) => {
      element.style.display = "block";
      element.style.opacity = "1";
    });
    resetHamburger();
  }
}

// Toggle menu function
function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    // Open menu with smooth animations
    Links.style.visibility = "visible";
    Links.style.height = "auto";
    Links.style.maxHeight = "300px";
    Links.style.opacity = "1";
    Links.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";

    // Animate links with staggered delay
    linkLi.forEach((element, index) => {
      element.style.display = "block";
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
      element.style.transition = "all 0.3s ease";
      element.style.transitionDelay = `${index * 0.1}s`;
    });

    // Animate hamburger to X
    animateHamburgerToX();
  } else {
    // Close menu with smooth animations
    Links.style.opacity = "0";
    Links.style.maxHeight = "0";
    Links.style.transition = "all 0.3s ease";

    // Animate links out
    linkLi.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(-10px)";
      element.style.transition = "all 0.2s ease";
    });

    // Hide menu after animation
    setTimeout(() => {
      if (!isMenuOpen) {
        Links.style.visibility = "hidden";
        Links.style.height = "0px";
      }
    }, 300);

    // Animate hamburger back to lines
    animateHamburgerToLines();
  }
}

// Hamburger animations
function animateHamburgerToX() {
  spans[0].style.cssText = `
    width: 25px;
    transform: rotate(45deg) translate(6px, 6px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  `;
  spans[1].style.cssText = `
    opacity: 0;
    transform: scale(0);
    transition: all 0.2s ease;
  `;
  spans[2].style.cssText = `
    width: 25px;
    transform: rotate(-45deg) translate(6px, -6px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  `;
}

function animateHamburgerToLines() {
  spans.forEach((element) => {
    element.style.cssText = `
      width: 20px;
      height: 2px;
      display: block;
      transform: rotate(0deg) translateX(0px);
      transition: all 0.3s ease;
      opacity: 1;
    `;
  });
}

function resetHamburger() {
  spans.forEach((element) => {
    element.style.cssText = `
      width: 20px;
      height: 2px;
      display: block;
      transform: rotate(0deg) translateX(0px);
      opacity: 1;
    `;
  });
}

// Event listeners
hamburger.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

// Close menu when clicking outside
document.addEventListener("click", function (e) {
  if (
    isMenuOpen &&
    !hamburger.contains(e.target) &&
    !Links.contains(e.target)
  ) {
    toggleMenu();
  }
});

// Handle window resize
window.addEventListener("resize", function () {
  initMenu();
  if (window.innerWidth > 880 && isMenuOpen) {
    isMenuOpen = false;
  }
});

// Close menu when clicking on a link
linkLi.forEach((link) => {
  link.addEventListener("click", function () {
    if (isMenuOpen) {
      toggleMenu();
    }
  });
});

// Initialize on load
document.addEventListener("DOMContentLoaded", initMenu);
