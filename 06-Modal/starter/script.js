'use strict';

function logger() {
  console.log('Start');
}
// logger();

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //Important All - gives you access to nodeList
console.log(btnsOpenModal);

const openModal = function () {
  //   console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  //   console.log('Modal close');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// const openModal = function () {
//   modal.classList.add('hidden');
// };

// modal.style.display = 'block'; Don't do that, use class in css and use them like !!!
