document.addEventListener('DOMContentLoaded', function() {
  const categoryFilter = document.getElementById('category-filter');
  const tagFilter = document.getElementById('tag-filter');
  const issuerFilter = document.getElementById('issuer-filter');
  const certificates = document.querySelectorAll('.certificate-card');

  function applyFilters() {
    const selectedCategory = categoryFilter.value;
    const selectedTag = tagFilter.value;
    const selectedIssuer = issuerFilter.value;

    certificates.forEach(cert => {
      const certCategory = cert.dataset.category;
      const certTags = cert.dataset.tags;
      const certIssuer = cert.dataset.issuer;

      const categoryMatch = selectedCategory === 'all' || certCategory.includes(selectedCategory);
      const tagMatch = selectedTag === 'all' || certTags.includes(selectedTag);
      const issuerMatch = selectedIssuer === 'all' || certIssuer.includes(selectedIssuer);

      if (categoryMatch && tagMatch && issuerMatch) {
        cert.style.display = 'block';
      } else {
        cert.style.display = 'none';
      }
    });
  }

  categoryFilter.addEventListener('change', applyFilters);
  tagFilter.addEventListener('change', applyFilters);
  issuerFilter.addEventListener('change', applyFilters);
});