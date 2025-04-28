document.addEventListener('DOMContentLoaded', function() {
  const filterToggle = document.getElementById('filter-toggle');
  const filterSection = document.querySelector('.certificates-filter');
  const certificates = document.querySelectorAll('.certificate-card');

  if (!filterToggle || !filterSection || !certificates.length) return;

  // Initialize with hidden filters
  let filtersVisible = false;
  filterSection.classList.add('hidden');
  filterToggle.textContent = 'Show Filters';

  // Toggle functionality
  filterToggle.addEventListener('click', () => {
    filtersVisible = !filtersVisible;
    filterSection.classList.toggle('hidden');
    filterToggle.textContent = filtersVisible ? 'Hide Filters' : 'Show Filters';
    if (!filtersVisible) applyFilters(true); // Reset when hiding
  });

  // Filter application with reset option
  function applyFilters(reset = false) {
    const category = reset ? 'all' : document.getElementById('category-filter').value;
    const tag = reset ? 'all' : document.getElementById('tag-filter').value;
    const issuer = reset ? 'all' : document.getElementById('issuer-filter').value;

    certificates.forEach(card => {
      const showCard = (
        (category === 'all' || card.dataset.category.includes(category)) &&
        (tag === 'all' || card.dataset.tags.includes(tag)) &&
        (issuer === 'all' || card.dataset.issuer.includes(issuer))
      );
      
      card.style.display = showCard ? 'block' : 'none';
    });
  }

  // Event listeners
  document.addEventListener('change', (e) => {
    if (e.target.matches('.filter-select')) {
      applyFilters();
    }
  });

  // Initial show all
  applyFilters(true);
});
