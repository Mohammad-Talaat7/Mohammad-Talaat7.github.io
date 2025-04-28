document.addEventListener('DOMContentLoaded', function() {
  // Initialize only if elements exist
  const filterToggle = document.getElementById('filter-toggle');
  const filterSection = document.querySelector('.certificates-filter');
  const certificates = document.querySelectorAll('.certificate-card');

  if (!filterToggle || !filterSection || !certificates.length) return;

  let filtersVisible = false;
  
  // Initial state - show all certificates
  showAllCertificates();
  
  // Toggle functionality
  filterToggle.addEventListener('click', () => {
    filtersVisible = !filtersVisible;
    filterSection.classList.toggle('hidden');
    filterToggle.textContent = filtersVisible ? 'Hide Filters' : 'Show Filters';
  });

  // Event delegation for dynamic filters
  document.addEventListener('change', (e) => {
    if (!filtersVisible) return;
    if (e.target.matches('.filter-select')) {
      applyFilters();
    }
  });

  function applyFilters() {
    const category = document.getElementById('category-filter').value;
    const tag = document.getElementById('tag-filter').value;
    const issuer = document.getElementById('issuer-filter').value;

    certificates.forEach(card => {
      const showCard = (
        (category === 'all' || card.dataset.category.includes(category)) &&
        (tag === 'all' || card.dataset.tags.includes(tag)) &&
        (issuer === 'all' || card.dataset.issuer.includes(issuer))
      );
      
      card.style.display = showCard ? 'block' : 'none';
    });
  }

  function showAllCertificates() {
    certificates.forEach(card => {
      card.style.display = 'block';
    });
  }
});
