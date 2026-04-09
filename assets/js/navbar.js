window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById("navbar");
    
    // Determine the initial position of the navbar
    let stickyPoint = navbar.offsetTop;

    const handleScroll = () => {
        // If the page is scrolled past the original navbar position
        if (window.pageYOffset > stickyPoint) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Recalculate if user resizes the browser window
    window.addEventListener('resize', () => {
        // Temporarily remove sticky to get the natural offsetTop again
        const isSticky = navbar.classList.contains("sticky");
        navbar.classList.remove("sticky");
        stickyPoint = navbar.offsetTop;
        if (isSticky) navbar.classList.add("sticky");
    });
});