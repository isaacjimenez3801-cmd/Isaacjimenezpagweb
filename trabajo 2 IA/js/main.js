document.addEventListener('DOMContentLoaded', function() {

    // --- Back to Top Button --- //
    const backToTopButton = document.querySelector('.back-to-top');

    if (backToTopButton) {
        const toggleBackToTop = () => {
            if (window.scrollY > 200) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        };

        window.addEventListener('load', toggleBackToTop);
        document.addEventListener('scroll', toggleBackToTop);

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // --- Navbar Shrink on Scroll (Optional) ---
    const mainNav = document.querySelector('#main-nav');
    if(mainNav) {
        const shrinkNav = () => {
            if (window.scrollY > 50) {
                mainNav.classList.add('navbar-shrink');
            } else {
                mainNav.classList.remove('navbar-shrink');
            }
        }
        window.addEventListener('scroll', shrinkNav);
    }

});