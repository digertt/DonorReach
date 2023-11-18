import './style.css'
import '@riotjs/hot-reload'
import { mount } from 'riot'
import registerGlobalComponents from './register-global-components'

// register
registerGlobalComponents()

// mount all the global components found in this page
mount('[data-riot-component]')

// Function to create progress bar "fractions"
function updateCustomFractions() {
    const donationItems = document.querySelectorAll('.donation-item');
  
    donationItems.forEach(item => {
      const progressBar = item.querySelector('.progress-fill');
      const customFractionText = item.querySelector('.custom-fraction-text');
  
      // get custom fraction text from element's content
      const customFraction = customFractionText.textContent;
      customFractionText.textContent = customFraction;
    });
}
  
//update when the page loads
window.addEventListener('load', updateCustomFractions);

//help box hover functionality
const help1 = document.querySelector('.help1');
const helpText1 = document.querySelector('.helpText1');
const progressDiv = document.querySelector('.progress-div');


help1.addEventListener('mouseenter', function() {
  helpText1.style.display = 'block';
  progressDiv.style.backgroundColor = '#A7C7E7';
});

help1.addEventListener('mouseleave', function() {
  helpText1.style.display = 'none';
  progressDiv.style.backgroundColor = 'transparent';
});


const help2 = document.querySelector('.help2');
const helpText2 = document.querySelector('.helpText2');
const formControl = document.querySelector('.email-phone-form');

help2.addEventListener('mouseenter', function() {
  helpText2.style.display = 'block';
  formControl.style.backgroundColor = '#C1E1C1';
});

help2.addEventListener('mouseleave', function() {
  helpText2.style.display = 'none';
  formControl.style.backgroundColor = 'transparent';
});


const help3 = document.querySelector('.help3');
const helpText3 = document.querySelector('.helpText3');
const announceBoard = document.querySelector('.announcement-board')


help3.addEventListener('mouseenter', function() {
  helpText3.style.display = 'block';
  announceBoard.style.backgroundColor = '#FAC898';
});

help3.addEventListener('mouseleave', function() {
  helpText3.style.display = 'none';
  announceBoard.style.backgroundColor = 'transparent';
});
