const button = document.querySelectorAll(".accordion-btn")

button.forEach(function(button) {
    button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const paragraph = document.getElementById(targetId);
        const svg = this.querySelector(".vector-img")

        if (paragraph.classList.contains('hidden')){
            paragraph.classList.remove("hidden");
            paragraph.classList.add("show");
            svg.src = "./img/faq-picture/close-icon.svg"
        } else {
            paragraph.classList.add("hidden")
            paragraph.classList.remove("show");
            svg.src = "./img/faq-picture/open-icon.svg"
        }
        })
})



