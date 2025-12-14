
// this for hamburger dat when you click on it it would show the drop down
const hamburger = document.getElementById('hamburger');
const megaMenu = document.getElementById('megaMenu');

hamburger.addEventListener('click', () => {
  megaMenu.classList.toggle('active');
});

// Optional: close when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.hamb-drop')) {
    megaMenu.classList.remove('active');
  }
});


// scrollingpage
gsap.registerPlugin(ScrollTrigger);

// PIN each section like Rolex
gsap.utils.toArray(".section").forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
  });
});


// heart animation on click
const heart = document.getElementById("heartIcon");

// --- LOAD SAVED STATE ---
const savedState = localStorage.getItem("heartLiked");

if (savedState === "true") {
  heart.classList.add("liked", "fa-solid");
  heart.classList.remove("fa-regular");
}

// --- CLICK EVENT ---
heart.addEventListener("click", () => {
  heart.classList.toggle("liked");

  if (heart.classList.contains("liked")) {
    heart.classList.remove("fa-regular");
    heart.classList.add("fa-solid");

    // SAVE STATE
    localStorage.setItem("heartLiked", "true");
  } else {
    heart.classList.remove("fa-solid");
    heart.classList.add("fa-regular");

    // REMOVE STATE
    localStorage.setItem("heartLiked", "false");
  }
});




document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('trendSlider');
  const leftBtn = document.querySelector('.trend-left-btn');
  const rightBtn = document.querySelector('.trend-right-btn');

  if (!slider) return;

  function getScrollAmount() {
    const card = slider.querySelector('.trend-card');
    if (!card) return 300;
    const style = getComputedStyle(card);
    const gap = parseFloat(getComputedStyle(slider).gap || 20);
    const width = Math.ceil(card.getBoundingClientRect().width + gap);
    return width * 2;
  }

  rightBtn.addEventListener('click', () => {
    slider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });
  leftBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });
  function updateButtons() {
    leftBtn.style.opacity = slider.scrollLeft <= 5 ? '0' : '1';
    rightBtn.style.opacity = (slider.scrollWidth - slider.clientWidth - slider.scrollLeft) <= 5 ? '0' : '1';
  }
  slider.addEventListener('scroll', updateButtons);
  window.addEventListener('resize', updateButtons);
  updateButtons();
});