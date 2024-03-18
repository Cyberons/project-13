const openBtn = document.querySelectorAll(".open-btn")

openBtn.forEach(function(button) {
    button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const paragraph = document.getElementById(targetId);
        const svg = this.querySelector(".vector-img")

        if (paragraph.classList.contains('hidden')){
            paragraph.classList.remove("hidden");
            svg.src = "../img/faq-picture/close-icon.svg"
        } else {
            paragraph.classList.add("hidden")
            svg.src = "../img/faq-picture/open-icon.svg"
        }
        })
})



