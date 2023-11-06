import "./style.css";
import "@riotjs/hot-reload";
import { mount } from "riot";
import registerGlobalComponents from "./register-global-components";

// register
registerGlobalComponents();

// mount all the global components found in this page
mount("[data-riot-component]");

// Function to create progress bar "fractions"
function updateCustomFractions() {
  const donationItems = document.querySelectorAll(".donation-item");

  donationItems.forEach((item) => {
    const progressBar = item.querySelector(".progress-fill");
    const customFractionText = item.querySelector(".custom-fraction-text");

    // get custom fraction text from element's content
    const customFraction = customFractionText.textContent;
    customFractionText.textContent = customFraction;
  });
}

//update when the page loads
window.addEventListener("load", updateCustomFractions);
