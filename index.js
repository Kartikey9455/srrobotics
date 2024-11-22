// Scroll to Top Button Functionality
window.onscroll = function() {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Redirect functions for buttons
function redirectTo(url) {
    window.location.href = url;
}
