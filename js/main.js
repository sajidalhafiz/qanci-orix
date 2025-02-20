// Mobile and Desktop navbar
  
document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const navToggle = document.querySelector(".nav-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeBtn = document.querySelector(".mobile-menu .close");
    const mobileLinks = document.querySelectorAll(".mobile-nav li a");
    const navbar = document.querySelector(".navbar");
  
    // Show mobile menu and hide logo/nav-toggle when nav-toggle is clicked
    navToggle.addEventListener("click", function () {
      mobileMenu.classList.add("active");
      navbar.classList.add("mobile-active");
    });
  
    // Hide mobile menu and show logo/nav-toggle when close button is clicked
    closeBtn.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      navbar.classList.remove("mobile-active");
    });
  
    // Hide mobile menu and show logo/nav-toggle when any mobile nav link is clicked
    mobileLinks.forEach(link => {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
        navbar.classList.remove("mobile-active");
      });
    });
  });
  

// Brand slider
document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".logo-swiper", {
      slidesPerView: "auto",
      loop: true,
      speed: 4000, 
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      freeMode: true,
    });
  });
  

// swiper project slider


const updateWindowSize = () => {
    let windowWidth;
    let slideCount;

    windowWidth = window.outerWidth;
    
    if (windowWidth < 768) {
        slideCount = 1;
    } else {
        slideCount = 3;
    }

    const swiper = new Swiper('.swiper', {
        // width: 400,
        direction: 'horizontal',
        loop: true,
        spaceBetween: 8,
        slidesPerView: slideCount,
        spaceBetween: 8,
        navigation: {
            nextEl: '.slide-nav-next',
            prevEl: '.slide-nav-prev',
        },

    });
};



window.addEventListener("load", updateWindowSize);
window.addEventListener("resize", updateWindowSize);

// FAQ 
document.querySelectorAll(".faq-question").forEach(item => {
    item.addEventListener("click", () => {
        const faqItem = item.parentNode;
        const isActive = faqItem.classList.contains("active");

        // Close all other FAQs
        document.querySelectorAll(".faq-item").forEach(el => el.classList.remove("active"));

        // Toggle the clicked one
        if (!isActive) {
            faqItem.classList.add("active");
        }
    });
});

