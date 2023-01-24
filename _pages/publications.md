---
layout: page
permalink: /publications/
title: publications
description: publications by categories in reversed chronological order
years: [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2011, 2009, 2008, 2006]
nav: true
nav_order: 2
---
<!-- _pages/publications.md -->
<div class="publications">

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/apples.jpg" title="publications" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
<a href="#preprint">preprints</a> | 
<a href="#peer">peer-reviewed</a> | 
<a href="#books">book chapters</a> |
<a href="#reports">technical reports</a>
</div>

<p>slides for conference talks: <a href="https://slides.com/kmodin">slides.com/kmodin</a></p>


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
