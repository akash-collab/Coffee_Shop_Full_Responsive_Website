

// search bar
let searchForm = document.querySelector(".search-form");

// show search box
document.querySelector("#search-btn").onclick = () => { 
    searchForm.classList.toggle("active")
    navbar.classList.remove("active");
    cartItems.classList.remove("active");
};

// navBar 
let navbar = document.querySelector(".navbar");

// show navBar 
document.querySelector("#menu-btn").onclick = () => { 
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    cartItems.classList.remove("active")
};

// target cart items container  
let cartItems = document.querySelector(".cart-items-container"); 

// show cart items
document.querySelector("#cart-btn").onclick = () => { 
    cartItems.classList.toggle("active")
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
};

// remove class active on scroll window 
window.onscroll = () => { 
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
    cartItems.classList.remove("active");
};

// home section
function changeImage(imagePath) {
  document.getElementById('main-image').src = imagePath;
}
// faq
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Toggle open class
      item.classList.toggle("open");

      // Close other FAQ items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("open");
        }
      });
    });
  });
});

