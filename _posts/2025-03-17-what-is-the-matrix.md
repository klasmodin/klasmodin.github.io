---
layout: distill
title: What is the Matrix?
description: a movie and hydrodynamics
giscus_comments: true
tags: undergraduate hydrodynamics popular
date: 2025-03-17 08:00:00+0100

authors:
  - name: Klas Modin
    affiliations:
      name: Chalmers and GU
    url: "/"

# bibliography: zeitlin-reversibility.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
#toc:
#  - name: Boltzmann versus Poincaré
# if a section has subsections, you can add them as follows:
# subsections:
#   - name: Example Child Subsection 1
#   - name: Example Child Subsection 2
#  - name: Zeitlins model in a nutshell
#  - name: Recurrence in Zeitlins model
#  - name: Numerical errors in a nutshell
#  - name: First experiment times arrow
#  - name: Reversible and symplectic schemes
#  - name: Second experiment there and back again
#  - name: Statistics in Zeitlins model
#  - name: Summary

# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
_styles: >
  .fake-img {
    border: 1px solid var(--global-text-color);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 12px;
  }
  .fake-img p {
    margin: 12px 12px;
    text-align: left;
  }

# _styles: >
#   .fake-img {
#     background: #bbb;
#     border: 1px solid rgba(0, 0, 0, 0.1);
#     box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
#     margin-bottom: 12px;
#   }
#   .fake-img p {
#     font-family: monospace;
#     color: white;
#     text-align: left;
#     margin: 12px 0;
#     text-align: center;
#     font-size: 16px;
#   }
---

<!-- ## Prologue -->

<div class="row justify-content-center">
    <div class="col-12">
        {% include figure.liquid path="assets/img/neo-sleeping.jpg" title="turbulence" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

"This movie will change my life," I thought, and with goosebumps I left the cinema.
Deep in thoughts, I began walking home in the direction I believed was right -- the city of Lund was new to me.
I was a university freshman at the beginning of the first semester.

I halted in front of the [white university building](https://en.wikipedia.org/wiki/Lund_University_Main_Building#/media/File:Universitetsbyggnaden_080508.jpg) accentuated in the twilight.
The building excited and frightened me; it stood there as a token of knowledge, yet also bewildering as the night.
That evening I had watched [The Matrix](https://en.wikipedia.org/wiki/The_Matrix), and it did, in a way, change my life.

<!-- With lasting euphoria I wandered home, against the backdrop of Lund's [white university building](https://en.wikipedia.org/wiki/Lund_University_Main_Building#/media/File:Universitetsbyggnaden_080508.jpg) accentuated in the twilight.
The building appears rigorous and self-assured in daylight, as a token of knowledge, but that late summer night it bewildered me.
I was a university freshman and had just watched [The Matrix](https://en.wikipedia.org/wiki/The_Matrix), and it did, in a way, change my life. -->

<!-- It was the year 1999 and I was a university freshman.
I had just watched [The Matrix](https://en.wikipedia.org/wiki/The_Matrix), and it did, in a way, change my life. -->

<!-- Wandering home, I passed Lund's [white university building](https://en.wikipedia.org/wiki/Lund_University_Main_Building#/media/File:Universitetsbyggnaden_080508.jpg), which stood mysteriously accentuated in the twilight. -->

<!-- ## The Discovery of Zeitlin's Model -->

<!-- In 1999, the science fiction film [The Matrix](https://en.wikipedia.org/wiki/The_Matrix) packed cinema theaters around the globe.
It completely absorbed me and more or less every other teenager. -->

<!-- <p style="text-align: center;">~</p> -->

When it premiered, The Matrix was celebrated for its special effects, which undeniably creates a boost.
But the special effects aren't the reason for its cult.
No, the entrancement lies in the theme, combining the ancient philosophical question, "Is the world different from what it seems?", with the awe over internet in the era of 56k dial-up modems.

<!-- of its infancy. -->

The game-changing scene in The Matrix is when Neo, the computer hacker protagonist, first meets Trinity, at an underground nightclub.
As the music turns edgy, the alluring storyline becomes irresistible when Trinity whispers to Neo:

"I know why you're here Neo. I know why you hardly sleep, why you live alone, and why night after night you sit at your computer. I know, because I was once looking for the same thing. [...] It's the question that drives us, Neo. You know the question, just as I did."

"What is the Matrix?"

From Neo's reply, I vaguely recalled the number tables called _matrices_ we'd learned about in high-school mathematics, but I didn't see a connection to the movie. Yet my curiosity was awoken.

<!-- Intense curiosity followed. -->

<!-- After the movie, I learned that the English word _matrix_ translates to the Swedish word _matris_, which I knew from high-school mathematics.
Intense curiosity followed. -->

<!-- These lines stayed with me.
But at the time I didn't connect the English word *matrix* with its Swedish translation *matris*, which I knew from high-school mathematics. -->

<!-- I was admitted to study chemical engineering at [Lund University](https://www.lu.se).
The first semester featured Linear Algebra. -->

<p style="text-align: center;">~</p>

In high-school, I had mixed feelings about mathematics.
It was unsatisfactory to memorize algorithms and apply them to variations of poorly motivated equations.
But _programming_ was fun.
I'd been hooked since my father had bought a [Macintosh Plus](https://en.wikipedia.org/wiki/Macintosh_Plus) in the late '80s and had taught me to write simple programs in [ZBasic](https://en.wikipedia.org/wiki/ZBasic).

<!-- To blindly apply memorized algorithms was dull, I thought. -->
<!-- I didn't see the point. -->
<!-- When I was seven my father bought a [Macintosh Plus](https://en.wikipedia.org/wiki/Macintosh_Plus) and taught me to write simple programs in [ZBasic](https://en.wikipedia.org/wiki/ZBasic). I got hooked for life. -->
<!-- I've been hooked ever since. -->
<!-- (I used [`GOTO`](https://en.wikipedia.org/wiki/Goto) statements all over the place.) -->

During high-school lessons we competed to write demo-programs on our [TI-82](https://en.wikipedia.org/wiki/TI-82) calculators.
The king of the hill was a classmate nicknamed "Hacker-Björn".
One morning he kept energetically tapping his calculator while refusing to reveal anything.
As he finally and triumphantly announced his demo, we gathered over his calculator like a flock of hungry gulls.
He unveiled a smooth animation resembling the twisting of DNA.
It was beautiful, and the way he had programmed it was remarkable.
The rest of us had relied on the TI-82's lagging graphics engine, but Hacker-Björn used simple ASCII output to produce fast, animated graphics.
I was so impressed and jealous.
It was an extraordinary lesson of thinking outside the box.

<!-- It wasn't the animation which was remarkable, but the way he had done it. -->
<!-- I really believed, in high-school, I was able to solve any math problem by a computer program -- I remember this thought clearly. -->
<!-- How naive.  -->
<!-- Someone needed to put my feet back on the ground. -->
<!-- Someone needed to bring me back to reality. -->

After high-school, I moved to the south of Sweden to study engineering at Lund University.
During the first year, soon after I had watched The Matrix, I began a course in linear algebra.
Our teacher was [Magnus Fontes](https://portal.research.lu.se/en/persons/magnus-fontes) and he was brilliant.
With wits, he filled our minds with vectors and linear transformations, represented by _matrices_.

Once he gave a motivation lecture, where he illustrated how his own research (in [harmonic analysis](https://en.wikipedia.org/wiki/Harmonic_analysis)) applies to the brewing of beer and to synthesizers in electronic music.
Suddenly, in-between sentences, he said:

"It's a well-hidden secret among math professors that most problems can't be solved."

These words grew in me over the years.
They evolved into a mantra, applicable to mathematics, science, and life in general:
"The more I learn, the more I realize I don't know."
There's beauty in this awareness; it's a whisper of unlimited possibilities.

The course in Linear Algebra changed my view of mathematics.
From there on, it wasn't about memorizing algorithms.
Linear Algebra is a self-contained theory.
It's abstract, yet concrete because it's geometric and therefore evokes mental pictures.
Soon after the course ended, I decided to quit engineering for full-time studies in mathematics.

<p style="text-align: center;">~</p>

Twenty years later, [Milo Viviani](https://www.sns.it/it/persona/milo-viviani) and I began to learn how geometry manifests itself in the equations of hydrodynamics.
These equations were formulated by [Leonhard Euler](https://en.wikipedia.org/wiki/Leonhard_Euler) in 1757 but are still far from understood.
Somehow, the more mathematicians learn about them, the more peculiar their solutions appear to be.
Yet, there are ways to approach them.

<!-- Considerable progress has been made since Euler, but the equations are still far from understood.  -->

<!-- They are thorny to decipher, but  -->
<!-- Yet, considerable progress has been made. -->
<!-- So how do we make head or tail of them? -->

In 1854, [Bernard Riemann](https://en.wikipedia.org/wiki/Bernhard_Riemann) developed a framework for describing generalized, higher-dimensional surfaces.
Today we call this framework _Riemannian geometry_, and it's a cornerstone of modern mathematics.
[Vladimir Arnold](https://en.wikipedia.org/wiki/Vladimir_Arnold) realized in 1966 that Riemannian geometry also describes Euler's equations of hydrodynamics.
The discovery is important because it maps mental pictures of geometry to intuition about hydrodynamics.
A surface has curvature.
What's the curvature of hydrodynamics?
What does it mean that hydrodynamics has curvature?

<!-- The discovery is important because it allows mental pictures of geometry to guide our intuition about hydrodynamics. -->

Consider a mountaineer walking along _geodesics_.
That is, she walks along a path such that whenever she pauses to look back at a point she passed before, she couldn't have made it from that point to where she is via a shorter path.
Imagine now two such mountaineers walking next to each other along a mountain ridge shaped like a saddle.
The ridge has negative curvature, which implies that the mountaineers eventually diverge from each other, ending up on different sides of the mountain.
On the other hand, if they were walking in a crater, or near the top of a hill, where curvature is positive, they'd converge towards each other and eventually cross paths.
Thus, geodesic motion is stable (i.e., converging) where curvature is positive and unstable (i.e., diverging) where it's negative.

Now take a leap of thought: just as the curvature of a two-dimensional surface signify stability, the curvature of hydrodynamics reveals stability of fluid motion.
This line of reasoning exemplifies the power of mathematics.

A mathematical equation is blind to its applications.
It's a blueprint of a perfect machine, potentially useful but with no predestined purpose.

Arnold's discovery showed that two previously distinct areas of mathematics were connected.
(i) Euler derived the hydrodynamic equations, (ii) Riemann generalized geometry, (iii) Arnold saw the former in the latter.
And these events happened one century apart.
Fascinating!

<!-- Let's review how it happened:
First, Newton realized that celestial and terrestrial bodies are governed by the same mathematical laws.
Then Euler derived equations for the motion of a fluid, Riemann generalized geometry, and Arnold saw the former in the latter, each one century apart.
Arnold's discovery that the two previously distinct areas of mathematics were connected

Isn't it fascinating? -->

We cannot write down a general formula that solves Euler's equations, so we need other ways to latch on to their solutions.
One possibility is to use "approximate" equations which we _can_ solve via computer algorithms.
But Euler's equations are evasive, as though designed to keep their solutions secret.
There are computer algorithms that approximate solutions on short time intervals, but they fail on longer time intervals. And "longer" is typically still quite short.
A different strategy is needed.

<!-- A remedy, advocated by  -->

In 1890, in his work on the stability of the solar system, [Henri Poincaré](https://www.mittag-leffler.se/about-us/history/prize-competition/) laid down a new strategy to understand dynamical systems: stop focusing on individual solutions and instead study the qualitative behavior of generic solutions.
And here Arnold's geometry enters, because it unravels qualitative features and thereby enables Poincaré's approach for the study of Euler's equations.
But for computer generated approximations there is still a problem: standard computer algorithms fail to preserve the geometry, so on long time intervals the qualitative properties disintegrate.
Viviani and I asked if there are computer algorithms that approximate solutions of Euler's equations in such a way that Arnold's geometric description remains intact.
I eventually remembered from my post-doc time in New Zealand that [Robert McLachlan](https://www.massey.ac.nz/massey/expertise/profile.cfm?stref=677230) had showed me a curious way to approximate the 2-D Euler equations via something called the _sine-bracket_.
I returned to it and learned that it's a method developed by Vladimir Zeitlin in 1991 which indeed preserves the geometric structure, and which at heart uses quantization theory to replace the continuous vector field in Euler's equations with a _matrix_.
My excitement went off the charts.

We plowed the literature for follow-up studies on Zeitlin's model, and we found -- not so much.
While the method preserves Arnold's geometry, it approximates individual solutions worse than standard algorithms and therefore didn't catch on in the computational mathematics community.
But we weren't bothered, since individual solutions can't be approximated for long times anyway, regardless of the choice of algorithm.
Instead, we set out to further study Zeitlin's model, which clearly was underexplored (and still is).

The beauty of Zeitlin's model, or _matrix hydrodynamics_, is that it gives a mathematical dictionary between matrix theory and hydrodynamics, which in turn enables new theory about matrices for addressing old questions about hydrodynamics.
Furthermore, computers are superb at matrix calculations, so we can explore theoretical ideas via computer experiments.
At the same time, the map from a fluid velocity field to a matrix is hard to grasp.
What do the matrix elements really mean?
Indeed, these days I often find myself late at night in front of the computer, half asleep, while thinking: "What is the matrix?"

<!-- So I've come full circle. -->

<!-- "Fate, it seems, is not without a sense of irony", as Morpheus said. -->
