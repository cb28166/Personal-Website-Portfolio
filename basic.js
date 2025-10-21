const navbar = document.querySelector('.navbar');
let isScrolling;

window.addEventListener('scroll', () => {
  // Make nav transparent while scrolling
  navbar.classList.add('scrolled');

  // Clear the previous timer
  window.clearTimeout(isScrolling);

  // Set a new timer — when scrolling stops, remove the class
  isScrolling = setTimeout(() => {
    navbar.classList.remove('scrolled');
  }, 250); // 150ms after user stops scrolling
});


//this is dealing with the project section and expanding the cards when they are clicked
const projects = document.querySelectorAll('.project');

projects.forEach(card => {
  card.addEventListener('click', () => {
    // If the clicked card is already expanded, collapse all
    if (card.classList.contains('expanded')) {
      projects.forEach(c => c.classList.remove('expanded'));
    } else {
      // Collapse all cards first
      projects.forEach(c => c.classList.remove('expanded'));
      // Expand the clicked one
      card.classList.add('expanded');
    }
  });
});
