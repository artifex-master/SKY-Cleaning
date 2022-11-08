'use strict'

//Declare toggle function
const toggleFunc = (elem) => elem.classList.toggle('active');

//Declare variables
const header_mobile = document.querySelector('[data-header-mobile]');
const header_info = document.querySelector('[data-header-info]');
const overlay = document.querySelector('[data-overlay]');

//Declare event listener
header_mobile.addEventListener('click', function() {
   toggleFunc(header_mobile);
   toggleFunc(header_info);
   toggleFunc(overlay);
});