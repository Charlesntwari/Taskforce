document.addEventListener('DOMContentLoaded', () => {
  const animalCards = document.querySelectorAll('.animal-card');
  const modal = document.getElementById('animalModal');
  const closeModal = document.querySelector('.modal .close');
  const animalName = document.getElementById('animalName');
  const animalImage = document.getElementById('animalImage');
  const animalDetails = document.getElementById('animalDetails');
  const animalLocation = document.getElementById('animalLocation');

  animalCards.forEach(card => {
    card.addEventListener('click', (event) => {
      const knowMoreLink = event.target.closest('.know-more');
      if (knowMoreLink) {
        event.preventDefault();
        const animal = card.getAttribute('data-animal');
        const location = card.getAttribute('data-location');
        const image = card.style.backgroundImage.replace('url("', '').replace('")', ''); // Get the URL of the background image
        const details = "Add any additional details here."; // Add additional details as needed
        displayAnimalInfo(animal, location, image, details);
      }
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  function displayAnimalInfo(animal, location, image, details) {
    animalName.textContent = animal;
    animalLocation.textContent = location;
    animalImage.src = image;
    animalDetails.textContent = details;
    modal.style.display = 'block';
  }
});
