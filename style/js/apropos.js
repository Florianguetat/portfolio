document.querySelectorAll('.expandable').forEach(title => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    content.classList.toggle('active');
  });
});

document.getElementById("settings-button").onclick = () => {
  document.getElementById("settings-menu").classList.toggle("open");
};
