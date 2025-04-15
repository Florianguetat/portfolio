document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const settingsButton = document.getElementById("settings-button");
    const settingsMenu = document.getElementById("settings-menu");
    const langFlags = document.querySelectorAll(".lang-flag");
    const body = document.body;

    // Vérifier si le mode sombre est activé
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "Light Mode";
    }

    // Basculer le mode sombre
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            toggleButton.textContent = "Light Mode";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            toggleButton.textContent = "Dark Mode";
        }
    });

    // Ouvrir/Fermer le menu des paramètres
    settingsButton.addEventListener("click", function (event) {
        settingsMenu.classList.toggle("open");
        event.stopPropagation();
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener("click", function (event) {
        if (!settingsMenu.contains(event.target) && event.target !== settingsButton) {
            settingsMenu.classList.remove("open");
        }
    });

    // Sélection de la langue (Redirection)
    langFlags.forEach(flag => {
        flag.addEventListener("click", function () {
            const selectedLang = this.dataset.lang;
            if (selectedLang === "fr") {
                window.location.href = "/français/accueil.html";
            } else if (selectedLang === "en") {
                window.location.href = "/portfolio/code/english/home.html";
            }
        });
    });
});
