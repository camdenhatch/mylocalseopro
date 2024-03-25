// navbar shrink stuff given structure by a response to this
// prompt in chat GPT in order to get the following JavaScript:
// "make the navbar in the following code shrink when scrolling down 50px please:"

window.onscroll = function () { scrollFunction() };
window.onresize = function () { checkWindowSize() }; // Add this line

// Call the function on initial load
checkWindowSize();

function scrollFunction() {
    if (window.innerWidth > 650) { // Check window width
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("navbarLogo").classList.add("shrink");
        } else {
            document.getElementById("navbarLogo").classList.remove("shrink");
        }
    }
}

function checkWindowSize() {
    // If the window is less than 700px wide, add the 'shrink' class; otherwise, run scrollFunction to determine if it needs to be added or removed based on scroll position
    if (window.innerWidth <= 650) {
        document.getElementById("navbarLogo").classList.add("shrink");
    } else {
        scrollFunction(); // This will ensure the correct class is applied based on the scroll position when the window is resized
    }
}