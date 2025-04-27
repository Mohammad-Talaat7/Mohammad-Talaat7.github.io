---
layout: page
title: AI/ML Research Portfolio
subtitle: Mohammad Talaat - Machine Learning Researcher
---

<div class="particles-js"></div> <!-- Particles.js background -->

## Featured Projects
{% for project in site.projects limit:3 %}
- [{{ project.title }}]({{ project.url }})
{% endfor %}

[View All Projects](/archive)

## Recent Publications
{% for pub in site.publications limit:3 %}
- [{{ pub.title }}]({{ pub.url }}) ({{ pub.venue }})
{% endfor %}

[View All Publications](/archive)

## About Me
Brief introduction with research interests...

[Learn More](/about)
