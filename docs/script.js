const themeLink = document.getElementById("theme-link");
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const projectsSection = document.getElementById("projects-section");
const projectsToggleBtn = document.getElementById("projects-toggle-btn");

themeToggleBtn.addEventListener("click", function () {
    if (themeLink.getAttribute("href") === "red.css") {
        themeLink.setAttribute("href", "green.css");
    } else {
        themeLink.setAttribute("href", "red.css");
    }
});

projectsToggleBtn.addEventListener("click", function () {
    if (projectsSection.style.display === "none") {
        projectsSection.style.display = "block";
    } else {
        projectsSection.style.display = "none";
    }
});