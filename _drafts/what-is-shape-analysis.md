---
layout: distill
title: What is shape analysis?
description: a brief introduction to the geometry of shape warping
giscus_comments: false
tags: undergraduate shape-analysis
date: 2023-01-24


authors:
  - name: Klas Modin
    affiliations:
      name: Chalmers and GU
    url: "/"

bibliography: shape-analysis.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
# toc:
#   - name: Equations
#     # if a section has subsections, you can add them as follows:
#     # subsections:
#     #   - name: Example Child Subsection 1
#     #   - name: Example Child Subsection 2
#   - name: Citations
#   - name: Footnotes
#   - name: Code Blocks
#   - name: Interactive Plots
#   - name: Layouts
#   - name: Other Typography?

# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
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

In school we're taught how to utilize Pythagoras' theorem to compute the distance between points in Euclidean space.
But how do you compute the similarity between geometric shapes?
And what exactly does *similarity* mean? 
What does even *shape* mean? <d-footnote>This post is loosely based on <a href="https://slides.com/kmodin/what-is-shape-analysis">slides for a short presentation</a> I gave at Chalmers in 2020.</d-footnote>

We all share an intuition for similarity between shapes.
For example, most of us would say that an equilateral triangle resembles a right-angled triangle more than a circle.

<div class="row justify-content-md-center">
    <div class="col-sm-8">
        {% include figure.html path="assets/img/simple-shapes.svg" title="shapes" class="img-fluid" %}
    </div>
</div>

<div class="caption">
Which two shapes are more alike?
</div>

Whether so mathematically depends on the definition of a *distance* between shapes.
Indeed, in mathematics the concept of distance (or metric) is abstract and goes well beyond Euclidean space.
Thus, two shapes are similar if the distance between them is small.
But we have to be careful: there's no universally given shape distance.
What is suitable depends on the application.
The mathematical theory of shape analysis is flexible enough to allow many choices, yet rigid enough to admit mathematical analysis and numerical computations.

## Historical overview

The rich mathematical foundation of shape analysis springs from its history. 
The genesis can be found in [D'Arcy Wentworth Thompson's](https://en.wikipedia.org/wiki/D%27Arcy_Wentworth_Thompson) influential 1917 book *On Growth and Form* <d-cite key="Th1917"></d-cite>.
Thompson drew shapes of species of fish and related them by mathematical transformations.
Later, from about 1970, [Ulf Grenander](https://en.wikipedia.org/wiki/Ulf_Grenander) at Brown University was inspired by Thompson's work and developed [pattern theory](https://en.wikipedia.org/wiki/Pattern_theory), with a model for continuous deformation mechanisms <d-cite key="Gr1993"></d-cite>.
It comprises of a Lie group $$G$$ acting on a metric space $$S$$ of "shapes".
Deformations are then modeled as the group $$G$$ acting on a fixed *template shape* $$s_0\in S$$.
In other words, deformations are of the form $$g\cdot s_0$$ with $$g\in G$$.

<div class="row justify-content-md-center">
    <div class="col-sm-8">
        {% include figure.html path="https://upload.wikimedia.org/wikipedia/commons/e/e9/Transformation_of_Argyropelecus_olfersi_into_Sternoptyx_diaphana.jpg" title="fish" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
Image drawn by D'Arcy Wentworth Thompson (Public domain, via Wikimedia Commons)
</div>

During the 1990's, together with biomechanical engineer [Michael Miller](https://en.wikipedia.org/wiki/Michael_I._Miller) at John Hopkins University, Grenander applied the deformable template framework to variability in human anatomy.
The need for such a model, and by extension the birth of **computational anatomy**, was a direct consequence of the increased availability of [magnetic resonance imaging (MRI)](https://en.wikipedia.org/wiki/Magnetic_resonance_imaging) and other medical imaging techniques. 

The mathematical leap by Grenander and Miller was an infinite-dimensional setting, with $$G$$ as a group of diffeomorphisms acting on a template 3-D image of, for example, the brain.
The continued mathematical developments were influenced by a series of events. 

In the spring of 1997, Grenander and Miller presented their work in a symposium celebrating the 50th anniversary of the Division of Applied Mathematics at Brown.
[David Mumford](https://en.wikipedia.org/wiki/David_Mumford), colleague and friend of Grenander, organized the symposium.
At about this time came another breakthrough.
It was understood that computational anatomy is closely tied to **topological hydrodynamics** - the theory of geodesic equations on groups of diffeomorphisms, initiated by [Vladimir Arnold's](https://en.wikipedia.org/wiki/Vladimir_Arnold) 1966 discovery that the incompressible Euler equation is a reduced form of a geodesic equation on volume preserving diffeomorphisms <d-cite key="Ar1966"></d-cite>.
In one go, a large array of advanced mathematical theories was thereby enabled.
Mumford went on to organize the 1998 trimester at [Institute Henri Poincaré](https://www.ihp.fr/en) titled *Questions Mathématiques en Traitement du Signal et de l'Image*.
The meeting fostered connections to global analysis and several rigorous results;
notably those building on the work of [Alain Trouvé](https://atrouve.perso.math.cnrs.fr/) at Ecole Normale Supérieure-Cachan on the metric structure of groups of diffeomorphisms induced by reproducing kernel Hilbert spaces <d-cite key="Tr1995"></d-cite>.
In a paper for the proceedings, Mumford generalized Arnold's approach to obtain the partial differential equation for geodesics on diffeomorphisms <d-cite key="Mu1998"></d-cite>.

By the year 2000, computational anatomy was thereby established at Brown, John Hopkins, and ENS-Cachan.
Via [Jerrold Marsden](http://www.cds.caltech.edu/~marsden/) at Caltech it also began to appear in contexts of geometric mechanics  <d-cite key="HiMaAr2001"></d-cite>.

As a next event, [Sarang Joshi](https://faculty.utah.edu/u0492366-SARANG_JOSHI/research/index.hml), student of Miller at the time, was working with a model where diffeomorphisms act on *landmark points*.
Following a 2002 meeting on image analysis at Los Alamos National Laboratory, Miller discussed Joshi's model with [Darryl Holm](https://en.wikipedia.org/wiki/Darryl_Holm), in particular its connection to soliton solutions in the [Camassa-Holm shallow water equation](https://en.wikipedia.org/wiki/Camassa%E2%80%93Holm_equation).
Through Marsden, Holm, and many collaborators, computational anatomy then quickly spread also in the geometric mechanics community.

From these and other events, the mathematical field of **shape analysis** took form.

## Warps by geodesics

The starting point in shape analysis is a Riemannian manifold $$M$$, usually compact.
To keep it simple, we continue here with $$M$$ as the [$$n$$-dimensional cube](https://en.wikipedia.org/wiki/Hypercube)

$$
  M = \{ (x_1,\ldots,x_n)\mid x_k \in [0,1]  \}
$$

equipped with periodic boundary conditions for each coordinate.
(It is called the *flat torus* in geometry and is usually though of as the quotient space $$\mathbb{R}^n/\mathbb{Z}^n$$).

A *diffeomorphism* on $$M$$ is a smooth, bijective map $$\varphi\colon M\to M$$ whose inverse $$\varphi^{-1}$$ is also smooth.
Such a map deforms $$M$$ but keeps its manifold structure intact.
It is helpful here to think of a uniform grid on $$M$$ and then apply the map to each point on the gridlines to obtained a warped grid.
If $$\varphi$$ is a diffeomorphism, initially parallell gridlines cannot intersect or collide in the warped grid.

<div class="row justify-content-md-center">
    <div class="col-sm-7">
        {% include figure.html path="https://github.com/klasmodin/oit-random/raw/48f1d761e96149ff8d6295063396487e8aa3a01e/figures/example1_phi.jpg" title="warp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
A diffeomorphisms can be visualized as the warp of a uniform grid.
</div>

The warped grid is important in applications of shape analysis.
We'll return to it soon, but first something about the mathematical structure of diffeomorphisms.

The set of all diffeomorphisms on $$M$$ form a group $$\operatorname{Diff}(M)$$ with composition as group multiplication.
Indeed, if $$\varphi$$ and $$\eta$$ are diffeomorphisms then $$\varphi\circ\eta$$ is also a diffeomorphism.
The group inversion is $$\varphi\mapsto\varphi^{-1}$$, so the group identity is the map $$\operatorname{id}\colon M\to M$$ defined by $$\operatorname{id}(x) = x$$.
One should think of $$\operatorname{Diff}(M)$$ as an infinite-dimensional Lie group.
This notion is precise in the cathegory of *Fréchet Lie groups* (cf. Hamilton <d-cite key="Ha1982"></d-cite>), but we do not get into technical details in this post. 

Take now a smooth path $$\gamma: [0,\epsilon) \to \operatorname{Diff}(M)$$ such that $$\gamma(0) = \operatorname{id}$$.
It is useful to picture $$\gamma$$ as a *continuous* warp.
Indeed, we can interpret $$\gamma$$ as a map $$\gamma:[0,\epsilon)\times M \to M$$. 
A point $$x\in M$$ is then continuously moved along the path $$[0,\epsilon)\ni t\mapsto \gamma(t,x) \in M$$.
If we differentiate this path we obtain a vector 

$$
  \frac{\partial \gamma(t,x)}{\partial t} \in T_{\gamma(t,x)} M \simeq \mathbb R^n.
$$

This vector depends smoothly on $$t$$ and $$x$$, but we can also think of it as a vector depending on $$t$$ and the variable $$y \equiv \gamma(t,x)$$.
Since $$x = \gamma^{-1}(t,y)$$ depends smoothly on $$y$$, we obtain a smooth map

$$
  (t,y) \mapsto v(t,y) \equiv  \frac{\partial \gamma(\tau,\gamma^{-1}(t,y))}{\partial \tau}\Bigg|_{\tau=t}  \in T_{y} M \simeq \mathbb R^n .
$$

If we now instead fix $$t$$, then $$v(t,\cdot) \equiv v_t$$ maps a point $$y\in M$$ to a vector in $$T_{y}M$$.
Thus, $$v_t$$ is a smooth, time-dependent vector field on $$M$$.
By construction, the path $$t\mapsto \gamma(t,x)$$ is a solution to the non-autonomous ordinary differential equation

$$
  \frac{\partial\gamma(t,x)}{\partial t} = v\big(t,\gamma(t,x)\big).
$$

It can be written for all $$x\in M$$ simultaneously if we again think of $$\gamma$$ as a path on $$\operatorname{Diff}(M)$$:

\begin{equation}\label{eq:ode}
  \dot\gamma = v_t \circ \gamma, \quad \gamma(0) = \operatorname{id}
\end{equation}

where $$\dot\gamma$$ denotes differentiation with respect to $$t$$ (the notation originates from mechanics, where $$t$$ is the time variable).
Equation \eqref{eq:ode} captures a golden rule in shape analysis:

<p style="text-align:center"><b>Warps are generated by integrating time-dependent vector fields.</b></p>

If we interpret our derivations in the framework of Lie groups, the Lie algebra of $$\operatorname{Diff}(M)$$ is the space of smooth vector fields $$\mathfrak{X}(M)$$.
The associated bracket 

$$[\cdot,\cdot]\colon \mathfrak{X}(M)\times \mathfrak{X}(M) \to \mathfrak{X}(M)$$ 

is the [Jacobi-Lie bracket](https://en.wikipedia.org/wiki/Lie_bracket_of_vector_fields), in coordinates given by

$$
  [v,u]^i = \sum_{j=1}^n v^j \frac{\partial u^i}{\partial x^j} - u^j \frac{\partial v^i}{\partial x^j} .
$$

Or, in vector calculus notation with $$u$$ and $$v$$ as column vectors,

$$
  [v,u] = \nabla u \cdot v - \nabla v\cdot u
$$

where "dot" denotes matrix multiplication and $$\nabla u$$ is the elementwise gradient (geometrically it is the [co-variant derivative](https://en.wikipedia.org/wiki/Covariant_derivative)).

We're finally in position to discuss geodesics on $$\operatorname{Diff}(M)$$.

If $$\varphi$$ and $$\eta$$ are diffeomorphisms joined via a smooth path $$\gamma\colon [0,1] \to \operatorname{Diff}(M)$$ then $$\gamma$$ 


To get started in shape analysis the following data is needed:

1. A Riemannian manifold $$M$$, usually compact. This is the domain where the geometric shapes live.
2. A group of diffeomorphisms of $$M$$, usually the set of all diffeomorphisms $$\operatorname{Diff}(M)$$.
3. A space of *shapes* on $$M$$, for example smooth functions, volume forms, differential forms, closed curves, or landmarks; any set on which $$\operatorname{Diff}(M)$$ naturally acts.

Today, the abstract formulation of CA consists in the following: given a template $$s_0\in S$$ and a target $$s_1\in S$$, find a curve $$\xi\colon[0,1]\to \mathfrak{g}$$ on the Lie algebra that minimizes the action functional
$$
  E(\xi) = \int_0^1\{\xi(t),\xi(t)\}\, dt + \frac{1}{\sigma^2} d_S^2(g(1)\cdot s_0, s_1).
$$
Here, $$\{\cdot,\cdot\}$$ is an inner product on $$\mathfrak{g}$$, the parameter $$\sigma$$ balances regularity versus accuracy, $$d_S$$ is the distance on $$S$$, and $$g\colon [0,1]\to G$$ is related to $$\xi$$ through the \textbf{reconstruction equation}
\begin{equation}
  g_t = \xi\cdot g, \quad g(0)=e .
\end{equation}
Now the strong connection to geometry: 
If $$\xi$$ is a minimizer, then $$g$$ is a geodesic curve with respect to the \textbf{right invariant Riemannian metric} on $$G$$ defined by $$\{\cdot,\cdot\}$$.
This gives the strong connection to geometry, in particular Arnold's framework of right invariant metrics.

The standard setting of CA is when $$G$$ is the group of diffeomorphisms $$\operatorname{Diff}(\Omega)$$ of some volume $$\Omega\subset \RR^3$$ and $$S$$ is the space of non-negative functions on $$\Omega$$, corresponding to volumetric gray-scale images.
The Lie algebra $$\mathfrak g$$ is then the space of vector fields on $$\Omega$$, and geodesics on $$\operatorname{Diff}(\Omega)$$ are solutions of the \textbf{EPDiff equation}
$$
  \frac{\partial m}{\partial t} + \xi\cdot \nabla m + \nabla \xi^\top \cdot m + m(\nabla\cdot \xi) = 0,
  \quad
  m = \mathcal A\, \xi,   \quad
  g_t = \xi\circ g
$$
Here, $$\mathcal A\colon \mathfrak g \to \mathfrak g^*$$ is an self-adjoint differential operator that defines the inner product $$\{\cdot,\cdot\}$$, and thereby the Riemannian structure.
To obtain a rigorous setting for analysis, one usually works with Sobolev $$H^s$$ completions of the space of smooth vector fields, which, if $$s>5/2$$, leads to a corresponding completion $$\operatorname{Diff}^s(\Omega)$$ of the group.


## Equations

This theme supports rendering beautiful math in inline and display modes using [MathJax 3](https://www.mathjax.org/) engine.
You just need to surround your math expression with `$$`, like `$$ E = mc^2 $$`.
If you leave it inside a paragraph, it will produce an inline expression, just like $$ E = mc^2 $$.

To use display mode, again surround your expression with `$$` and place it as a separate paragraph.
Here is an example:

$$
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
$$

Note that MathJax 3 is [a major re-write of MathJax](https://docs.mathjax.org/en/latest/upgrading/whats-new-3.0.html) that brought a significant improvement to the loading and rendering speed, which is now [on par with KaTeX](http://www.intmath.com/cg5/katex-mathjax-comparison.php).

***

## Citations

Citations are then used in the article body with the `<d-cite>` tag.
The key attribute is a reference to the id provided in the bibliography.
The key attribute can take multiple ids, separated by commas.

The citation is presented inline like this: <d-cite key="gregor2015draw"></d-cite> (a number that displays more information on hover).
If you have an appendix, a bibliography is automatically created and populated in it.

Distill chose a numerical inline citation style to improve readability of citation dense articles and because many of the benefits of longer citations are obviated by displaying more information on hover.
However, we consider it good style to mention author last names if you discuss something at length and it fits into the flow well — the authors are human and it’s nice for them to have the community associate them with their work.

***

## Footnotes

Just wrap the text you would like to show up in a footnote in a `<d-footnote>` tag.
The number of the footnote will be automatically generated.<d-footnote>This will become a hoverable footnote.</d-footnote>

***

## Code Blocks

Syntax highlighting is provided within `<d-code>` tags.
An example of inline code snippets: `<d-code language="html">let x = 10;</d-code>`.
For larger blocks of code, add a `block` attribute:

<d-code block language="javascript">
  var x = 25;
  function(x) {
    return x * x;
  }
</d-code>

**Note:** `<d-code>` blocks do not look good in the dark mode.
You can always use the default code-highlight using the `highlight` liquid tag:

{% highlight javascript %}
var x = 25;
function(x) {
  return x * x;
}
{% endhighlight %}

***


## Layouts

The main text column is referred to as the body.
It is the assumed layout of any direct descendants of the `d-article` element.

<div class="fake-img l-body">
  <p>.l-body</p>
</div>

For images you want to display a little larger, try `.l-page`:

<div class="fake-img l-page">
  <p>.l-page</p>
</div>

All of these have an outset variant if you want to poke out from the body text a little bit.
For instance:

<div class="fake-img l-body-outset">
  <p>.l-body-outset</p>
</div>

<div class="fake-img l-page-outset">
  <p>.l-page-outset</p>
</div>

Occasionally you’ll want to use the full browser width.
For this, use `.l-screen`.
You can also inset the element a little from the edge of the browser by using the inset variant.

<div class="fake-img l-screen">
  <p>.l-screen</p>
</div>
<div class="fake-img l-screen-inset">
  <p>.l-screen-inset</p>
</div>

The final layout is for marginalia, asides, and footnotes.
It does not interrupt the normal flow of `.l-body` sized text except on mobile screen sizes.

<div class="fake-img l-gutter">
  <p>.l-gutter</p>
</div>

***

## Other Typography?

Emphasis, aka italics, with *asterisks* (`*asterisks*`) or _underscores_ (`_underscores_`).

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

Inline `code` has `back-ticks around` it.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $$1600 |
| col 2 is      | centered      |   $$12 |
| zebra stripes | are neat      |    $$1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.


Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.
