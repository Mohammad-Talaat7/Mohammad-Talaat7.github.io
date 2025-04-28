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
        <!-- Update Homepage Certificate Card Structure -->
        <div class="certificate-card">
          <a href="{{ cert.url }}" class="certificate-link">
            <div class="certificate-media">
              <img src="{{ cert.thumbnail }}" alt="{{ cert.title }}" class="certificate-thumbnail">
              <div class="certificate-hover-info">
                <h3 class="certificate-title">{{ cert.title }}</h3>
              </div>
            </div>
          </a> 
          <div class="certificate-footer">
            {% if cert.issuer_url %}
            <a href="{{ cert.issuer_url }}" 
               class="issuer-link" 
               target="_blank" 
               rel="noopener noreferrer"
               onclick="event.stopPropagation()">
              {{ cert.issuer }}
            </a>
            {% endif %}
            
            {% if cert.pdf %}
            <a href="{{ cert.pdf }}" class="pdf-download" download>
              <i class="fas fa-file-pdf"></i>
            </a>
            {% endif %}
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
