---
layout: default
title: Archive
---

# Archive

Browse all posts by month and year.

{% assign postsByYearMonth = site.posts | group_by_exp: "post", "post.date | date: '%B %Y'" %}
{% for yearMonth in postsByYearMonth %}
  <h2>{{ yearMonth.name }}</h2>
  <ul>
    {% for post in yearMonth.items %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

## Projects
{% for project in site.projects %}
### [{{ project.title }}]({{ project.url }})
{{ project.date | date: "%B %Y" }}  
{{ project.excerpt | truncate: 160 }}
{% endfor %}

## Publications
{% for pub in site.publications %}
### [{{ pub.title }}]({{ pub.url }})
{{ pub.venue }}, {{ pub.date | date: "%Y" }}  
[PDF]({{ pub.pdf }}) | [Code]({{ pub.code }})
{% endfor %}
