document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.certificates-container');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  if (slider) {
    const slideWidth = document.querySelector('.certificate-card').offsetWidth;
    const slideMargin = parseInt(getComputedStyle(document.querySelector('.certificate-card')).marginRight);
    const scrollAmount = slideWidth + slideMargin;

    prevButton.addEventListener('click', () => {
      slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextButton.addEventListener('click', () => {
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
});