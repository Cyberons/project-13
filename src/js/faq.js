// Альтернатива

// const button = document.querySelectorAll(".accordion-btn")

// button.forEach(function(button) {
//     button.addEventListener("click", function () {
//         const targetId = this.getAttribute("data-target");
//         const paragraph = document.getElementById(targetId);
//         const svg = this.querySelector(".vector-img")

//         if (paragraph.classList.contains('hidden')){
//             paragraph.classList.remove("hidden");
//             paragraph.classList.add("show");
//             svg.src = "./img/faq-picture/close-ico.svg"
//         } else {
//             paragraph.classList.add("hidden")
//             paragraph.classList.remove("show");
//             svg.src = "./img/faq-picture/open-ico.svg"
//         }
//         })
// })

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionContainer = Array.from(
  document.querySelectorAll('.accordion')
);

const accordions = accordionContainer.map(container =>
  container.querySelector('.faq-list')
);

new Accordion(accordions, {
    showMultiple: true,
    elementClass: 'faq-item',
    triggerClass: 'faq-container',
    panelClass: 'accordion-content',
    openOnInit: [0],
    onOpen: function (currentElement) {
        currentElement.querySelector('.faq-container').classList.add('active');
    },
    onClose: function (currentElement) {
        currentElement.querySelector('.faq-container').classList.remove('active');
    },
});



