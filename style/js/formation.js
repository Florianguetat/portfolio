document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });

  const settingsButton = document.getElementById("settings-button");
  const settingsMenu = document.getElementById("settings-menu");

  settingsButton.addEventListener("click", () => {
    settingsMenu.style.display = settingsMenu.style.display === "block" ? "none" : "block";
  });
});
