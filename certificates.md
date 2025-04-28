---
layout: page
title: My Certifications
permalink: /certificates/
---

<button id="filter-toggle" class="filter-btn">Show Filters</button>

<div class="certificates-filter hidden">
  <div class="filter-group">
    <label for="category-filter">Filter by Category:</label>
    <select id="category-filter" class="filter-select">
      <option value="all">All Categories</option>
      {% assign categories = site.certificates | map: 'categories' | uniq %}
      {% for category in categories %}
        <option value="{{ category | slugify }}">{{ category }}</option>
      {% endfor %}
    </select>
  </div>

  <div class="filter-group">
    <label for="tag-filter">Filter by Tag:</label>
    <select id="tag-filter" class="filter-select">
      <option value="all">All Tags</option>
      {% assign tags = site.certificates | map: 'tags' | uniq %}
      {% for tag in tags %}
        <option value="{{ tag | slugify }}">{{ tag }}</option>
      {% endfor %}
    </select>
  </div>

  <div class="filter-group">
    <label for="issuer-filter">Filter by Issuer:</label>
    <select id="issuer-filter" class="filter-select">
      <option value="all">All Issuers</option>
      {% assign issuers = site.certificates | map: 'issuer' | uniq %}
      {% for issuer in issuers %}
        <option value="{{ issuer | slugify }}">{{ issuer }}</option>
      {% endfor %}
    </select>
  </div>
</div>

<div class="certificates-grid">
  {% for cert in site.certificates %}
    <div class="certificate-card" 
         data-category="{{ cert.categories | join: ' ' | slugify }}"
         data-tags="{{ cert.tags | join: ' ' | slugify }}"
         data-issuer="{{ cert.issuer | slugify }}">
      <!-- Your existing card content -->
        <article class="certificate">
            <h2><a href="{{ cert.url }}">{{ cert.title }}</a></h2>
            {{ cert.excerpt }}
        </article>
    </div>
  {% endfor %}
</div>
