const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger?.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');

  const isOpen = !mobileNav.classList.contains('hidden');
  hamburger.innerHTML = `<img src="assets/shared/icon-${isOpen ? 'close' : 'hamburger'}.svg" alt="menu" />`;
});