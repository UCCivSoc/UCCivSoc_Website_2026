function revealCategory(categoryName) {
  const allSections = document.querySelectorAll('.toggle-section');
  const targetSections = document.querySelectorAll(`.toggle-section[data-category="${categoryName}"]`);

  // Check if the clicked category is already visible
  const isAlreadyActive = targetSections.length > 0 && targetSections[0].classList.contains('active');

  // 1. Hide everything first
  allSections.forEach(sec => {
    sec.classList.remove('active');
    sec.style.display = 'none';
  });

  // 2. If it wasn't active, show all sections in that category
  if (!isAlreadyActive) {
    targetSections.forEach(sec => {
      sec.style.display = 'flex';
      // Short delay to allow display change to register for animation
      setTimeout(() => {
        sec.classList.add('active');
      }, 10);
    });

    // 3. Smooth scroll to the first revealed section
    if (targetSections.length > 0) {
      targetSections[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
// This function runs automatically when the page loads
window.addEventListener('DOMContentLoaded', () => {
    // 1. Get the 'show' parameter from the URL (e.g., ?show=industry)
    const urlParams = new URLSearchParams(window.location.search);
    const categoryToOpen = urlParams.get('show');

    // 2. If a category exists in the URL, trigger the reveal
    if (categoryToOpen) {
        revealCategory(categoryToOpen);
    }
});

// Your existing function remains mostly the same, 
// but we add a check to make sure it exists on the current page.
function revealCategory(categoryName) {
    const allSections = document.querySelectorAll('.toggle-section');
    const targetSections = document.querySelectorAll(`.toggle-section[data-category="${categoryName}"]`);

    if (targetSections.length === 0) return; // Exit if sections don't exist on this page

    // Hide everything
    allSections.forEach(sec => {
        sec.classList.remove('active');
        sec.style.display = 'none';
    });

    // Reveal target group
    targetSections.forEach(sec => {
        sec.style.display = 'flex';
        setTimeout(() => {
            sec.classList.add('active');
        }, 10);
    });

    // Scroll to the content
    targetSections[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
}