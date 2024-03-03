// navbar shrink stuff given structure by a response to this
// prompt in chat GPT in order to get the following JavaScript:
// "make the navbar in the following code shrink when scrolling down 50px please:"

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbarLogo").classList.add("shrink");
    } else {
        document.getElementById("navbarLogo").classList.remove("shrink");
    }
}