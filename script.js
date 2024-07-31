document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.src = this.getAttribute('data-hover');
        });

        button.addEventListener('mouseout', function() {
            this.src = this.getAttribute('data-original');
        });
    });
});
