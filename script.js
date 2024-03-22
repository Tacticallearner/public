// Your existing attributes rotation logic
const dynamicAttributeElement = document.getElementById("dynamicAttribute");
const attributes = ["Bible Lover", "Book Worm", "Frontend Enthusiast", "Creative Designer", "Jesus Lover"];
let currentIndex = 0;
if (dynamicAttributeElement) { // Only run this code if dynamicAttributeElement exists
  function updateAttribute() {
    dynamicAttributeElement.textContent = attributes[currentIndex];
    currentIndex = (currentIndex + 1) % attributes.length;
  }
  // Update the attribute every 1.5 seconds
  setInterval(updateAttribute, 1500);
}
// GSAP navigation menu toggling logic (Revised)
document.querySelector('.menu-container').addEventListener('click', function() {
  const nav = document.querySelector('nav');
  const isOpen = nav.classList.contains('open');
  const menuItems = nav.querySelectorAll('ul li');

  if (!isOpen) {
    gsap.set(menuItems, { opacity: 0, scale: 0.5, y: -20 });
    gsap.to(nav, { duration: 0.5, autoAlpha: 1 });  // Adjusted for improved visibility handling
    gsap.to(menuItems, {
      duration: 0.3, opacity: 1, scale: 1, y: 0,
      stagger: { each: 0.1, from: "random", ease: "elastic.out(1, 0.5)" },
      onComplete: () => nav.classList.add('open')
    });
  } else {
    gsap.to(menuItems, {
     opacity: 0, scale: 0.5, y: -20,
      stagger: { each: 0.1, from: "end", ease: "back.in(1)" },
      onComplete: () => {
        gsap.to(nav, { duration: 0.5, autoAlpha: 1 });  // Adjusted for improved visibility handling
        nav.classList.remove('open');
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progressBar');
    let width = 0;

    // Quickly fill the progress bar
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width += 5; // Increase the width by 5% for faster filling
            progressBar.style.width = width + '%';
        }
    }, 10); // Adjust the interval for desired speed of filling

    // Delay before hiding the loading screen, adjust the delay as needed
    setTimeout(() => {
        document.getElementById('loadingScreen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loadingScreen').style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';
            document.getElementById('mainContent').style.opacity = '1';
        }, 500); // Fade-out effect duration
    }, 2000); // Keep the loading screen for a total of 2000ms (2 seconds) before fading out
});
