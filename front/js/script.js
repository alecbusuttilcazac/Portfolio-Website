// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Select all anchor tags in the document that have an href starting with "#"
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Add a click event listener to each anchor tag
        anchor.addEventListener('click', function (e) {
            // Prevent the default anchor click behavior, which would cause an instant jump
            e.preventDefault();

            // Get the target element's ID from the href attribute
            const targetId = this.getAttribute('href');
            // Find the corresponding element on the page
            const targetElement = document.querySelector(targetId);
            
            // Close the mobile menu after clicking a link
            const mobileMenu = document.getElementById('mobile-menu');
            const hamburgerButton = document.getElementById('hamburger-menu');
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                hamburgerButton.classList.remove('active');
            }


            // Check if the target element exists
            if (targetElement) {
                // Scroll to the target element with a smooth animation
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                // Log a warning to the console if the target element isn't found
                console.warn(`Smooth scroll target not found: ${targetId}`);
            }
        });
    });

    // Add functionality for the mobile hamburger menu
    const hamburgerButton = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburgerButton && mobileMenu) {
        hamburgerButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            hamburgerButton.classList.toggle('active');
        });
    }
});
