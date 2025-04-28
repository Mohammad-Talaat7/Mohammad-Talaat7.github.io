document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const filterToggle = document.getElementById('filter-toggle');
  const filterSection = document.querySelector('.certificates-filter');
  const categoryFilter = document.getElementById('category-filter');
  const tagFilter = document.getElementById('tag-filter');
  const issuerFilter = document.getElementById('issuer-filter');
  const certificates = document.querySelectorAll('.certificate-card');
  let filtersVisible = false;

  // Initial state: Show all certificates
  showAllCertificates();

  // Toggle Filter Visibility
  filterToggle.addEventListener('click', toggleFilters);

  // Filter Change Handlers
  categoryFilter.addEventListener('change', handleFilterChange);
  tagFilter.addEventListener('change', handleFilterChange);
  issuerFilter.addEventListener('change', handleFilterChange);

  function toggleFilters() {
    filtersVisible = !filtersVisible;
    filterSection.classList.toggle('hidden');
    filterToggle.textContent = filtersVisible ? 'Hide Filters' : 'Show Filters';
    filterToggle.setAttribute('aria-expanded', filtersVisible);

    if (!filtersVisible) {
      resetFilters();
      showAllCertificates();
    }
  }

  function handleFilterChange() {
    if (filtersVisible) {
      applyFilters();
    }
  }

  function applyFilters() {
    const selectedCategory = categoryFilter.value;
    const selectedTag = tagFilter.value;
    const selectedIssuer = issuerFilter.value;

    certificates.forEach(card => {
      const categoryMatch = selectedCategory === 'all' || 
        card.dataset.category.includes(selectedCategory);
      const tagMatch = selectedTag === 'all' || 
        card.dataset.tags.includes(selectedTag);
      const issuerMatch = selectedIssuer === 'all' || 
        card.dataset.issuer.includes(selectedIssuer);

      card.style.display = (categoryMatch && tagMatch && issuerMatch) ? 
        'block' : 'none';
    });
  }

  function resetFilters() {
    categoryFilter.value = 'all';
    tagFilter.value = 'all';
    issuerFilter.value = 'all';
  }

  function showAllCertificates() {
    certificates.forEach(card => {
      card.style.display = 'block';
    });
  }

  // Initialize dropdown options
  initializeFilterOptions();

  function initializeFilterOptions() {
    populateDropdownOptions(categoryFilter, 'categories');
    populateDropdownOptions(tagFilter, 'tags');
    populateDropdownOptions(issuerFilter, 'issuer');
  }

  function populateDropdownOptions(dropdown, type) {
    const options = new Set();
    
    certificates.forEach(card => {
      const values = card.dataset[type].split(' ');
      values.forEach(value => options.add(value));
    });

    // Clear existing options except "All"
    dropdown.innerHTML = '<option value="all">All ' + type.charAt(0).toUpperCase() + type.slice(1) + '</option>';
    
    options.forEach(value => {
      if (value) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = formatOptionText(value);
        dropdown.appendChild(option);
      }
    });
  }

  function formatOptionText(text) {
    return text
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
});
