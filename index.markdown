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

## Certificates
{% for cert in site.certificates limit:3 %}
- [{{ cert.title }}]({{ cert.url }}) ({{ cert.venue }})
{% endfor %}

[View All Certificates](/archive)

## About Me
Brief introduction with research interests...

[Learn More](/about)
