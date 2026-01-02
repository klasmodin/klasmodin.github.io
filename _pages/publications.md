---
layout: page
permalink: /publications/
title: publications
description: publications by categories in reversed chronological order
years: [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2011, 2009, 2008, 2006]
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/apples.jpg" title="publications" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
<a href="#preprint">preprints</a> | 
<a href="#peer">peer-reviewed</a> | 
<a href="#books">book chapters</a> |
<a href="#reports">technical reports</a> | 
<a href="../talks">
talks 
<svg style="display: inline-block; width: 1em; fill: currentColor; height: 1em;" viewbox="5
5 48 48">
<path d="M36 24c-1.2 0-2 0.8-2 2v12c0 1.2-0.8 2-2 2h-22c-1.2
0-2-0.8-2-2v-22c0-1.2 0.8-2 2-2h12c1.2 0 2-0.8 2-2s-0.8-2-2-2h-12c-3.4
0-6 2.6-6 6v22c0 3.4 2.6 6 6 6h22c3.4 0 6-2.6
6-6v-12c0-1.2-0.8-2-2-2z"></path>
<path d="M43.8 5.2c-0.2-0.4-0.6-0.8-1-1-0.2-0.2-0.6-0.2-0.8-0.2h-12c-1.2
0-2 0.8-2 2s0.8 2 2 2h7.2l-18.6 18.6c-0.8 0.8-0.8 2 0 2.8 0.4 0.4 0.8
0.6 1.4 0.6s1-0.2 1.4-0.6l18.6-18.6v7.2c0 1.2 0.8 2 2 2s2-0.8
2-2v-12c0-0.2 0-0.6-0.2-0.8z"></path>
</svg>
</a>
</div>

<!-- <p>slides for conference talks: <a href="https://slides.com/kmodin">slides.com/kmodin</a></p> -->

<div id="preprint">
<h2>preprints</h2>
</div>

{% bibliography -f preprints %}

<div id="peer">
<h2>peer-reviewed articles</h2>
</div>

{%- for y in page.years %}

  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

<div id="books">
<h2>book chapters</h2>
</div>

{% bibliography -f books %}

<div id="reports">
<h2>technical reports</h2>
</div>

{% bibliography -f tech_reports %}

</div>
