function revealCategory(categoryName) {
  const allSections = document.querySelectorAll('.toggle-section');
  const targetSections = document.querySelectorAll(`.toggle-section[data-category="${categoryName}"]`);

  if (targetSections.length === 0) return;

  // Check if already active (ignore cards inside horizontal track for this check)
  const firstNonTrack = [...targetSections].find(el => !el.closest('.horizontal-track'));
  const isAlreadyActive = firstNonTrack && firstNonTrack.classList.contains('active');

  // 1. Hide everything — but never touch cards inside the horizontal track
  allSections.forEach(sec => {
    if (sec.closest('.horizontal-track')) return;
    sec.classList.remove('active');
    sec.style.display = 'none';
  });

  // 2. If it wasn't already active, show the target category sections
  if (!isAlreadyActive) {
    targetSections.forEach(sec => {
      // Skip cards inside the horizontal track — they're always visible
      if (sec.closest('.horizontal-track')) return;

      sec.style.display = 'flex';
      setTimeout(() => {
        sec.classList.add('active');
      }, 10);
    });

    // 3. Scroll to first non-track section
    if (firstNonTrack) {
      firstNonTrack.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

// On page load, check URL for ?show=category and auto-reveal
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryToOpen = urlParams.get('show');
  if (categoryToOpen) {
    revealCategory(categoryToOpen);
  }
});