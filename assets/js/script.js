const iconBurgerOn = document.getElementById('burger');
const menu = document.getElementById('menu')

iconBurgerOn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-dark-mode");
    const body = document.body;
    const navTitle = document.getElementById("nav-title");
    const navGithub = document.getElementById("nav-github");
    const navLinkedin = document.getElementById("nav-linkedin");
    const navMail = document.getElementById("nav-mail");
    const homeLinkSkills = document.getElementById("home-link-skills");
    const homeLinkProjects = document.getElementById("home-link-projects");
    const homeLinkContact = document.getElementById("home-link-contact");

    // Vérifier le mode enregistré
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark");
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark");
        navTitle.classList.toggle('dark');
        navGithub.classList.toggle('dark');
        navLinkedin.classList.toggle('dark');
        navMail.classList.toggle('dark');
        toggleButton.classList.toggle('dark');
        homeLinkSkills.classList.toggle('dark');
        homeLinkProjects.classList.toggle('dark');
        homeLinkContact.classList.toggle('dark');

        if (body.classList.contains("dark")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.removeItem("dark-mode");
        }
    });
});