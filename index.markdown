---
layout: page
title: Turning ideas into functional code.
subtitle: Mohammad Talaat
---

<div class="particles-js"></div> <!-- Particles.js background -->

<section class="projects">
  <h2>Projects</h2>
  <div class="projects-grid">
    {% for project in site.projects %}
      <div class="project-card">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a href="{{ project.url }}">Read More</a>
      </div>
    {% endfor %}
  </div>
</section>

<section class="certificates-section">
  <h2 class="section-title">Certifications</h2>
  <div class="certificates-slider">
    <button class="slider-nav prev" aria-label="Previous certificates">‹</button>
    <div class="certificates-container">
      {% for cert in site.certificates %}
        <div class="certificate-card">
          <div class="certificate-content">
            <img src="{{ cert.thumbnail }}" alt="{{ cert.title }} certificate thumbnail" class="certificate-thumbnail">
            <div class="certificate-info">
              <h3>{{ cert.title }}</h3>
              <div class="certificate-meta">
                {% if cert.issuer_url %}
                  <a href="{{ cert.issuer_url }}" class="issuer-link" target="_blank" rel="noopener noreferrer">
                    {{ cert.issuer }}
                  </a>
                {% else %}
                  <span class="issuer-name">{{ cert.issuer }}</span>
                {% endif %}
              </div>
            </div>
          </div>
          <div class="certificate-actions">
            {% if cert.pdf %}
              <a href="{{ cert.pdf }}" class="pdf-download" download aria-label="Download PDF">
                <i class="fas fa-file-pdf"></i>
              </a>
            {% endif %}
            <a href="{{ cert.url }}" class="certificate-link" aria-label="View certificate details">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      {% endfor %}
    </div>
    <button class="slider-nav next" aria-label="Next certificates">›</button>
  </div>
</section>

## About Me
Brief introduction with research interests...

[Learn More](/about)
