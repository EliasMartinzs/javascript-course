'use strict';

// We declare every class that we will use
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Function to open the modal, removing the ''hidden'' class in the HTML.
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Function to close the modal, adding the ''hidden'' class in the HTML, to hide the modal.
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// We use a launch "FOR" so we can use a click event on several buttons with the same class.
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// We use two ways to close the modal, one with a click on the button, and one outside of it.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// creating a "KEYDOWN" event, so when a key is clicked we will know which one was and if "ESCAPE" was used, and it DOES NOT have the class to hide the modal, the function will close it
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
