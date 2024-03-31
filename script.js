document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.querySelector('h2').addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('collapsed');
        });
    });
});

