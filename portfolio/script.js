const hireButtons = document.querySelectorAll('.hire-contact-me');
const closeButton = document.getElementById('closeButton');
const mainContent = document.querySelector('.portfolio-content');
const popupFormContainer = document.getElementById('popup-container');
const overlay = document.getElementById('overlay');
const iframe = popupFormContainer.querySelector('iframe');

hireButtons.forEach(button => {
    button.addEventListener('click', () => {
        popupFormContainer.style.display = 'block';
        overlay.style.display = 'block';
        mainContent.classList.add('blur');
        iframe.src = "contactForm.html";
        popupFormContainer.style.width= '80%';
        popupFormContainer.style.height= '80%';});
});

closeButton.addEventListener('click', () => {
    popupFormContainer.style.display = 'none';
    overlay.style.display = 'none';
    mainContent.classList.remove('blur');
});
