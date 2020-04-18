---
permalink: /resources
section: "resources"
title: "Resources"
layout: container
gitcontent: true
excerpt: 'These downloads, links, and themes are provided to help you and your team easily build products with the Denali framework.'

sections:
  - header: 'Icons'
    text: 'Download the open source icon set in SVG format or as an icon font. This section will soon be deprecated please go to <a href="https://github.com/denali-design/denali-icon-font" target="_blank">Denali Icons Repo</a>'
    example: 'resources/font-download.html'
  - header: 'Sketch Libraries'
    text: 'Sync these Sketch libraries to your Sketch App. Get automatic updates when we publish new components or elements in the library'
    example: 'resources/library-download.html'
  - header: 'UI Kits'
    text: 'Based on the Sketch Libraries these kits help you design sites faster with prebuilt components at various sizes.'
    example: 'resources/kits-download.html'
  - header: 'Sketch Plugins'
    text: 'We developed this sketch plugin to help with our design workflow, so maybe they will help with yours as well.'
    example: 'resources/plugin-download.html'
  - header: 'Templates'
    text: 'Browse through our pre-made templates to assist you in finding the right fit for your products'
    example: 'resources/templates-download.html'

---

# {{ page.title }}
{{ page.excerpt }}

{% for section in page.sections %}
***


### {{ section.header }}
{% if section.text %}
{{ section.text }}
{% endif %}
{% if section.example %}
{% include {{ section.example }} %}
{% endif %}

{% endfor %}
