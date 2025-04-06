---
layout: page
permalink: /talks/
title: talks
description: conference, workshop, and seminar talks
nav: false
years: [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2011, 2009, 2008, 2006]
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/coimbra-workshop.webp" title="publications" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<p>slides for many of the talks: <a href="https://slides.com/kmodin">slides.com/kmodin</a></p>

<!-- <div id="talks">
<h2>talks</h2>
</div> -->

{%- for y in page.years %}

  <h2 class="year">{{y}}</h2>
  {% bibliography -f talks -q @*[myyear={{y}}]* %}
{% endfor %}

</div>
