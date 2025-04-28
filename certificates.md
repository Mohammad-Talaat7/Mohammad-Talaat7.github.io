---
layout: page
title: Certificates
permalink: /certificates/
---

{% for certificate in site.certificates %}
  <article class="certificate">
    <h2><a href="{{ certificate.url }}">{{ certificate.title }}</a></h2>
    {{ certificate.excerpt }}
  </article>
{% endfor %}
