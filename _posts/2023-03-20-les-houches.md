---
layout: post
title:  Spectacular clouds over Mont Blanc
date: 2023-03-20 13:00:00+0100
giscus_comments: true
description: dynamics of ice clouds seen from École de Physique des Houches in the French alps
tags: popular
published: true
---

<div class="row justify-content-center">
    <div class="col-12 col-sm-10">
        {% include figure.html path="assets/img/les_houches.apng" title="ice clouds" class="img-fluid" %}
    </div>
</div>

Last week I attended a workshop on Optimal Transport Theory and Applications to Physics at [École de Physique des Houches](https://www.houches-school-physics.com/en/).
The scenery at the school is absolutely magnificent, with stunning views to Mont Blanc.
One late afternoon, after nearly a full week of interesting presentations and discussions, a few of us steped out of the lecture hall to energize ourselved in the crisp air against the backdrop of the setting sun.
The moment became magical as we witnessed the formation of peculiar clouds above the mountain peaks. 
We all gazed in marvel as the cloud dynamics unfolded -- much like some equation from the lecture hall but here in real sight.

Standing next to me was [Mike Cullen (UK Met Office)](https://www.metoffice.gov.uk/research/people/mike-cullen), world-renowned expert on mathematical models in metrology.
He told us that they are probably ice clouds ([cirrus](https://en.wikipedia.org/wiki/Cirrus_cloud)).
I took three photos, about five seconds between each (I wish I would have taken many more).

As I came back home I stiched together a 3-frame [animated PNG](https://en.wikipedia.org/wiki/APNG) of the photos (see image above).
The dynamics of the cloud formations then really came through.
**Can you suggest a dynamical model with similar behaviour?**

Here are some observations that I find interesting:

1. The large arc formation on the top is very sharp as it forms, but then undergoes diffusion.

2. To the right of the large arc you see smaller ones forming, again initially very sharp.

3. Sharp branching structures occur. Look at the first frame, just below the the large arc.
You see four initially sharp branches that break up: the upper two are "captured" by the large upper arc, whereas the lower two are merged with the lower diffuse cloud to the right. In the last frame you see the region of the former branches separated by a void. The whole process reminds me of vortex dynamics in 2-D Euler equations, where smaller vortex condensates are sucked in by larger ones, except here there's no swirling.

4. There's a peculiar "bubble" interaction going on in the lower left corner of the sky. (The dark patch in the first frame is probably a dust particle close to the lens.)


