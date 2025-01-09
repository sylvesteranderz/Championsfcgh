// JavaScript to handle player profile navigation
function viewPlayer(playerId) {
    // Redirect to the player's profile page
    window.location.href = `Playerprofile.html?id=${playerId}`;
}

    function animateCounter(id, start, end, duration) {
        const element = document.getElementById(id);
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            element.textContent = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    // Animate the counter when the page loads
    document.addEventListener("DOMContentLoaded", () => {
        animateCounter("player-count", 0, 25, 2000); // Replace 25 with your actual player count
    });

    document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (toggleButton) {
            toggleButton.addEventListener('click', () => {
                navLinks.classList.toggle('active'); // Show/hide the nav links
            });
        }
    });
    
