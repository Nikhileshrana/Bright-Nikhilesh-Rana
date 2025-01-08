console.log("***************** Testing *****************");


const container = document.getElementById('testimonialsContainer');
const nextButton = document.getElementById('nextButton');

const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');

const scrollAmount = 200; // Adjust the scroll amount as needed

scrollLeft.addEventListener('click', () => {
  container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

scrollRight.addEventListener('click', () => {
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});