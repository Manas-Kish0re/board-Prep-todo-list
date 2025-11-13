document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.todo-item input[type="checkbox"]');
  const emojiContainer = document.querySelector('.emoji-container');
  const emojis = ['✨', '💖', '🌸', '💫', '🌟'];

  // Load saved states from localStorage
  checkboxes.forEach((checkbox, index) => {
    const savedState = localStorage.getItem(`todo-checkbox-${index}`);
    if (savedState === 'true') {
      checkbox.checked = true;
    }
  });

  // Save state to localStorage on change
  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
      localStorage.setItem(`todo-checkbox-${index}`, checkbox.checked);
    });
  });

  function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = Math.random() * 3 + 3 + 's';
    emoji.style.fontSize = Math.random() * 24 + 16 + 'px';
    emojiContainer.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 5000);
  }

  setInterval(createEmoji, 500);
});