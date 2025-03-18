---
layout: distill
title: What is the Matrix?
description: how matrix flows describe 2-D hydrodynamics
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
        {% include figure.html path="assets/img/neo-sleeping.jpg" title="turbulence" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


I left the cinema with goosebumps.

"This movie will change my life," I thought.
 
With lasting euphoria I wandered home, against the backdrop of Lund's [white university building](https://en.wikipedia.org/wiki/Lund_University_Main_Building#/media/File:Universitetsbyggnaden_080508.jpg) accentuated in the twilight.
The building appears rigorous and self-assured in daylight, as a token of knowledge.
But at night it bewilders.
<!-- Wandering home, I passed Lund's [white university building](https://en.wikipedia.org/wiki/Lund_University_Main_Building#/media/File:Universitetsbyggnaden_080508.jpg), which stood mysteriously accentuated in the twilight. -->
The year was 1999, and I was a university freshman. 
I had just watched [The Matrix](https://en.wikipedia.org/wiki/The_Matrix), and it did, in a way, change my life.

<!-- ## The Discovery of Zeitlin's Model -->

<!-- In 1999, the science fiction film [The Matrix](https://en.wikipedia.org/wiki/The_Matrix) packed cinema theaters around the globe.
It completely absorbed me and more or less every other teenager. -->

<!-- <p style="text-align: center;">~</p> -->

The momentous scene in The Matrix is when Neo, the computer hacker protagonist, first meets Trinity, at an underground nightclub. 
As the music turns edgy, the already alluring storyline becomes irresistible when Trinity whispers to Neo:

"I know why you're here Neo. I know why you hardly sleep, why you live alone, and why night after night you sit at your computer. I know, because I was once looking for the same thing. [...] It's the question that drives us, Neo. You know the question, just as I did."

"What is the Matrix?"

I learned that the English word *matrix* translates to the Swedish word *matris*, which I knew from high-school mathematics.
Intense curiosity followed.

<!-- These lines stayed with me. 
But at the time I didn't connect the English word *matrix* with its Swedish translation *matris*, which I knew from high-school mathematics. -->

<!-- I was admitted to study chemical engineering at [Lund University](https://www.lu.se).
The first semester featured Linear Algebra. -->

<p style="text-align: center;">~</p>

In high-school, I enjoyed science but had mixed feelings about mathematics.
It was dull to memorize algorithms and apply them to variations of the same, poorly motivated equations.
<!-- To blindly apply memorized algorithms was dull, I thought. -->
<!-- I didn't see the point. -->
But *programming* was fun.
Ever since my father had bought a [Macintosh Plus](https://en.wikipedia.org/wiki/Macintosh_Plus) and taught me to write simple programs in [ZBasic](https://en.wikipedia.org/wiki/ZBasic), I was hooked for life.

<!-- When I was seven my father bought a [Macintosh Plus](https://en.wikipedia.org/wiki/Macintosh_Plus) and taught me to write simple programs in [ZBasic](https://en.wikipedia.org/wiki/ZBasic). I got hooked for life. -->
<!-- I've been hooked ever since. -->
<!-- (I used [`GOTO`](https://en.wikipedia.org/wiki/Goto) statements all over the place.) -->

During high-school lessons we competed to write demo-programs on our [TI-82](https://en.wikipedia.org/wiki/TI-82) calculators.
The king of the hill was a classmate who quickly earned the nickname "Hacker-Björn".
One morning he kept energetically tapping his calculator while refusing to reveal anything.
As he finally and triumphantly announced his demo, we gathered over his calculator like a flock of hungry gulls. 
He unveiled a smooth animation resembling the twisting of DNA. 
It was beautiful. And the way he had programmed it was remarkable.
<!-- It wasn't the animation which was remarkable, but the way he had done it. -->
The rest of us had relied on the TI-82's lagging graphics engine, but Hacker-Björn used simple ASCII output to produce fast, animated graphics.
I was so impressed and jealous.
It was an extraordinary lesson of thinking outside the box.

<!-- I really believed, in high-school, I was able to solve any math problem by a computer program -- I remember this thought clearly. -->
<!-- How naive.  -->
<!-- Someone needed to put my feet back on the ground. -->
<!-- Someone needed to bring me back to reality. -->

After high-school I moved to the south of Sweden to study engineering at Lund University.
During the first year, soon after I had watched The Matrix, I began a course in linear algebra.
Our teacher was [Magnus Fontes](https://institut.roche.com/member/magnus-fontes/) and he was brilliant.
<!-- With wits, he filled our minds with a universe of vectors and linear transformations.  -->
With wits, he filled our minds with vectors and linear transformations, represented by *matrices* -- lo and behold.
He gave a motivation lecture, where he illustrated how his own research (in [harmonic analysis](https://en.wikipedia.org/wiki/Harmonic_analysis)) applies to the brewing of beer and to synthesizers in electronic music. 
Then suddenly, in-between sentences, he said:

"It's a well-hidden secret among math professors that most problems can't be solved."

These words grew in me over the years. 
They evolved into a mantra, applicable to mathematics, science, and life in general:
"The more I learn, the more I realize I don't know."
There's beauty in this awareness. 
It whispers of a world of possibilities.

The course in Linear Algebra transfigured my view of mathematics. 
It was no longer about memorizing algorithms. 
Linear Algebra is a self-contained theory.
It's abstract, yet concrete because it's geometric.
It evokes mental pictures.

<p style="text-align: center;">~</p>

Twenty years later, [Milo Viviani](https://www.sns.it/it/persona/milo-viviani) and I began to study how geometry reveals itself in the equations of hydrodynamics.
They were formulated by [Leonhard Euler](https://en.wikipedia.org/wiki/Leonhard_Euler) in 1757 but are still far from understood.
<!-- Considerable progress has been made since Euler, but the equations are still far from understood.  -->
The more mathematicians learn about these equations, the more peculiar their solutions appear to be.
<!-- They are thorny to decipher, but  -->
<!-- Yet, considerable progress has been made. -->
<!-- So how do we make head or tail of them? -->
Yet, there are ways to approach them.

In 1854, [Bernard Riemann](https://en.wikipedia.org/wiki/Bernhard_Riemann) developed a framework for describing generalized, higher-dimensional surfaces. 
Today we call this framework *Riemannian geometry* and it's a cornerstone of modern mathematics.
[Vladimir Arnold](https://en.wikipedia.org/wiki/Vladimir_Arnold) realized in 1966 that Riemannian geometry can be used to describe Euler's equations of hydrodynamics.
The discovery is important because it maps mental pictures of geometry to intuition about hydrodynamics.
<!-- The discovery is important because it allows mental pictures of geometry to guide our intuition about hydrodynamics. -->
A surface has curvature.
What's the curvature of hydrodynamics?
What does it mean that hydrodynamics has curvature?

Consider a mountaineer walking along *geodesics:* whenever she pauses to look back at a point she passed before, she couldn't have made it from that point to where she is via a shorter path.
Imagine now two such mountaineers walking next to each other along a mountain ridge shaped like a saddle.
The ridge has negative curvature, which implies that the mountaineers eventually diverge from each other, ending up on two different sides of the mountain. 
On the other hand, if they were walking in a crater, or near the top of a hill, where curvature is positive, they'd converge towards each other and eventually cross paths.
In summary, geodesic motion is stable (i.e., converging) where curvature is positive and unstable (i.e., diverging) where it's negative.
By a leap of thought, the curvature of hydrodynamics thus reveals the stability of fluid motion, which is amazing.

A mathematical equation is blind to its applications.
It's a blueprint of a perfect machine, potentially useful but with no predestined purpose.
Arnold's discovery is of the type where two supposedly distinct areas of mathematics turn out to be related.
It's fascinating how it happened.
Euler derived his equations, Riemann generalized geometry, and Arnold saw the former in the latter, each one century apart. 

We cannot write down a formula that solves Euler's equations. 
We need other ways to latch on to their solutions. 
One possibility is to replace the equations with simplified ones that computer algorithms *can* solve.
But Euler's equations are evasive, as though they're designed to keep their solutions secret.
There are computer algorithms that approximate solutions for short time interval, but they will fail for longer time intervals.
And "longer" is typically quite short.
A different strategy is needed.

<!-- A remedy, advocated by  -->
In 1890, in his work on the stability of the solar system, [Henri Poincaré](https://www.mittag-leffler.se/about-us/history/prize-competition/) laid down a new strategy to understand dynamical systems: stop focusing on individual solutions and instead study the qualitative behavior of generic solutions.
And here Arnold's geometry enters, because it unravels qualitative features and thereby enables Poincaré's approach for the study of Euler's equations.
But for computer generated approximations there is still a problem: standard computer algorithms fail to preserve the geometry, so on long time intervals the qualitative properties disintegrate.
Viviani and I asked if there are computer algorithms that approximate solutions of Euler's equations in such a way that Arnold's geometric description remains intact.
I eventually remembered from my post-doc time in New Zealand that [Robert McLachlan](https://www.massey.ac.nz/massey/expertise/profile.cfm?stref=677230) had showed me a curious way to approximate the 2-D Euler equations via something called the *sine-bracket*.
It's a method developed by Vladimir Zeitlin in 1991 which uses quantization theory to replace the continuous vector field in Euler's equations with a *matrix*.
Imagine my excitement.

We plowed the literature on Zeitlin's model and found -- not so much.
While the method preserves Arnold's geometry, it approximates individual solutions worse than standard algorithms and therefore didn't catch on in the computational mathematics community.
But we were not bothered, since individual solutions never can be approximated for long times, regardless of the choice of algorithm.
Instead, we set out to learn more about Zeitlin's model, which clearly was underexplored and still is.

The beauty of Zeitlin's model, or *matrix hydrodynamics*, is that it maps concepts from hydrodynamics to concepts about matrices, which enables new mathematical theory of matrices to address old questions about hydrodynamics.
Furthermore, computers are efficient for matrix calculations, so we can explore theoretical ideas via computer experiments.
At the same time, the map from a fluid velocity field to a matrix is hard to grasp.
What do the matrix elements really mean?
Indeed, these days I often find myself late at night in front of the computer, half asleep, while thinking:

"What is the matrix?"

Fate, it seems, is not without a sense of irony.
