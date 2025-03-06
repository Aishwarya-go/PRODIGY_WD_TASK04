document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

window.addEventListener("scroll", function() {
    document.querySelectorAll("section").forEach(section => {
        const position = section.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            section.classList.add("reveal");
        }
    });
});
function showDetails(project) {
    alert("More details about " + project + " will be available soon!");
}
