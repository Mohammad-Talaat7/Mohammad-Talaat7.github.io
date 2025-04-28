---
layout: page
title: Projects
permalink: /projects/
---

{% for project in site.projects %}
  <article class="project">
    <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
    {{ project.excerpt }}
  </article>
{% endfor %}
