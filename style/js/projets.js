document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const parentCard = button.closest(".card");
      parentCard.classList.toggle("open");
    });
  });

  const settingsButton = document.getElementById("settings-button");
  const settingsMenu = document.getElementById("settings-menu");

  settingsButton.addEventListener("click", () => {
    settingsMenu.classList.toggle("open");
  });
});
