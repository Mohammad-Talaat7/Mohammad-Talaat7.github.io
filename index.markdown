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
    <button class="slider-nav prev">‹</button>
    <div class="certificates-container">
      {% for cert in site.certificates %}
        <div class="certificate-card">
          <a href="{{ cert.url }}" class="certificate-link" target="_blank">
            <img src="{{ cert.thumbnail }}" alt="{{ cert.title }}" class="certificate-thumbnail">
            <div class="certificate-info">
              <h3>{{ cert.title }}</h3>
              <p>{{ cert.issuer }}</p>
              {% if cert.pdf %}
                <a href="{{ cert.pdf }}" class="pdf-download" download>
                  <i class="fas fa-file-pdf"></i>
                </a>
              {% endif %}
            </div>
          </a>
        </div>
      {% endfor %}
    </div>
    <button class="slider-nav next">›</button>
  </div>
</section>

## About Me
Brief introduction with research interests...

[Learn More](/about)
