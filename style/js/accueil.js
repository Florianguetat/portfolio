document.addEventListener('DOMContentLoaded', () => {
  // Menu des réglages
  const settingsBtn = document.getElementById('settings-button');
  const settingsMenu = document.getElementById('settings-menu');

  settingsBtn.addEventListener('click', () => {
    settingsMenu.classList.toggle('open');
  });

  // Boutons des cartes
  const toggleButtons = document.querySelectorAll('.toggle-btn');

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.intro-card');
      parent.classList.toggle('open');
    });
  });
});
