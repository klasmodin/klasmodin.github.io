---
layout: distill
title: The reversibility paradox in Zeitlin's model
description: a hydrodynamical version of the enigma by Boltzmann and Poincaré 
giscus_comments: true
tags: graduate hydrodynamics
date: 2023-08-24 08:00:00+0100


authors:
  - name: Klas Modin
    affiliations:
      name: Chalmers and GU
    url: "/"

bibliography: zeitlin-reversibility.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Boltzmann versus Poincaré
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Zeitlins model in a nutshell
  - name: Recurrence in Zeitlins model
  - name: Numerical errors in a nutshell
  - name: First experiment times arrow
  - name: Reversible and symplectic schemes
  - name: Second experiment there and back again
  - name: Statistics in Zeitlins model
  - name: Summary

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

During the pandemic, I gave an online seminar where I unveiled some numerical simulations of incompressible 2-D hydrodynamics on the sphere, which indicated a connection between the long-time behavior of 2-D Euler equations and integrability conditions for point-vortex dynamics (as I shall explain below).
After the seminar, Anton Izosimov and Boris Khesin asked me an insightful question:

The Lie group $$\mathrm{SU}(N)$$, underlying the model for the simulations, is compact.
Because the dynamics in the model is also Hamiltonian, we have Poincaré recurrence.
But the dynamics in the simulations, leading to blob formations, seem contractive.
Isn't the mechanism for blob formations instead induced by fictitious dissipation, introduced via the numerical time-discretization?

I didn't have a good answer at the time, but the question stayed with me. 
Today I have an answer -- the subject of the post.
Before I reveal it, however, we shall need some background.


## Boltzmann versus Poincaré

In 1872 Ludwig Boltzmann published his [H-theorem](https://en.wikipedia.org/wiki/H-theorem). It states that, in a closed system of interacting, idealized gas particles, **entropy increases with time**.
Some time later, in 1888, Henri Poincaré formulated and proved the [recurrence theorem](https://en.wikipedia.org/wiki/Poincar%C3%A9_recurrence_theorem) as part of his quest to secure the [prize competition](https://www.mittag-leffler.se/about-us/history/prize-competition/) organized by Gösta Mittag-Leffler in honor of King Oscar II of Sweden (a remarkable episode in the history of science, but one I shall not elaborate on here).
Since then, the two results had widespread influences on subsequent developments in mathematics and physics.
The former is the hallmark of [thermodynamics](https://en.wikipedia.org/wiki/Thermodynamics) and [statistical mechanics](https://en.wikipedia.org/wiki/Statistical_mechanics), and is considered by some scientists the [most fundamental principle of modern physics](https://www.quantamagazine.org/physicists-trace-the-rise-in-entropy-to-quantum-information-20220526/) (although still far from well understood).
The latter led to the modern mathematical theory of dynamical systems, to ergodic theory, and to the concept of homoclinic orbits and chaos.
At the same time, the juxtaposition of the two results brought about one of the most intriguing debates in modern science: **the reversibility paradox**.
How can a system governed by reversible laws of motion give rise to seemingly irreversible behavior?

<div class="row justify-content-center">
    <div class="col-8 col-sm-6">
        {% include figure.liquid path="assets/img/gas-particles-in-box.svg" title="shapes" class="img-fluid" %}
    </div>
</div>

<div class="caption">
A closed box with gas particles initially in the first chamber
</div>

Here is the classical illustration of the paradox, pointed out in 1876 by [Johann Josef Loschmidt](https://en.wikipedia.org/wiki/Johann_Josef_Loschmidt), in relation to time-reversibility, and in 1896 by [Ernst Zermelo](https://en.wikipedia.org/wiki/Ernst_Zermelo), in relation to recurrence.
Consider a closed box of finite volume, containing two chambers with an opening between them.
Now populate the first chamber with a large but finite number of gas particles that interact in a pair-wise, time-reversible fashion according to Newtonian mechanics.
As the system is released, the gas particles begin to diffuse into the second chamber. 
According to Boltzmann's H-theorem, they continue doing so until a macroscopic equilibrium is reached, in which the particles on average are distributed uniformly across the two chambers.
On the other hand, according to Poincaré's recurrence theorem, for each choice of $$\delta>0$$, there is a finite time $$t_\delta$$ at which each particle has returned to within a distance $$\delta$$ of its initial position and velocity. 
In particular, if one waits long enough, the particles should eventually come to a configuration where they all reside in the first chamber.
But, according to the H-theorem, that cannot happen, since such a macroscopic state has lower entropy than a mixed chamber state.
Furthermore, no-one has ever witnessed anything like that in experiments.
And so the paradox arises.<d-footnote>An entertaining, popular account of the entropy law and the controversies it brought can be found in the book <i>Mysteries of Modern Physics: Time</i> by Sean Carrol.</d-footnote>

Of course, it is not truly a "paradox". 
Poincaré's recurrence theorem is undoubtedly valid under its assumptions (volume preservation of the phase flow and boundedness of the phase orbits), whereas the H-theorem is a probabilistic statement that requires undesirable assumptions to be proved rigorously.
In this sense, Poincaré's result has the upper hand.
But, as mentioned, it is Boltzmann's entropy law that physicists over and over again confirm in experiments, that we observe in our everyday life (you never see an egg "un-crack"), and that successfully explains the [arrow of time](https://en.wikipedia.org/wiki/Arrow_of_time) and the [past hypothesis](https://en.wikipedia.org/wiki/Past_hypothesis) in cosmology.
In short, despite the rigorousness of the recurrence theorem, the behavior predicted by the entropy law is more ubiquitous.
How, then, can we explain that we never see the gas particles returning to the first chamber?

An obvious thesis is that the governing laws of motion for real gas particles are more complicated than the Newtonian particles in an idealized gas.
This argument is correct, but it does not get to the heart of the matter.
Indeed, in computer simulations it is possible to *exactly* model the motion of a [hard sphere gas](https://en.wikipedia.org/wiki/Hard_spheres).
In such simulations, one *never* observes a return of the particles to the first chamber.
Yet, the conditions of the recurrence theorem are fulfilled, so there *must* be a time $$T$$ at which the particles return.
Herein lies the crux of the issue.

The resolution is that $$T$$ is *enormously large* -- much larger than the age of the universe.
Let us estimate it.

Assume that the closed box is $$10\mathrm{cm}\times 10\mathrm{cm}\times 10\mathrm{cm}$$, with two chambers of equal volume.
The average kinetic energy of a monatomic gas particle is given by $$3/2 k_B T$$, where $$k_B$$ is the Boltzmann constant and $$T$$ is the absolute temperature.
For helium at [standard temperature](https://en.wikipedia.org/wiki/Standard_conditions_for_temperature_and_pressure), this gives an average particle speed of $$\bar v \approx 1300~\mathrm{m/s}$$.
The total number of particles at standard temperature and pressure is about $$2\cdot 10^{22}$$, but we would like to work with a very low density of particles, so let us take $$N=10^{20}$$.
The length of each chamber is $$5\mathrm{cm}$$, so, depending on how the barrier between the chambers is set up, the average "escape time" for a particle is at least $$0.05/1300 \approx 4\cdot 10^{-5}\,\mathrm{s}$$.
We therefore sample the state of all the particles every $$10^{-5}\,\mathrm{s}$$.
We further assume that the location of each particle is uncorrelated to its position at the previous sample (this is likely false, but anyway makes the recurrence time shorter and is therefore safe).
Finally, we assume that the particle density is so low that the particles are uncorrelated.
Since the chambers have equal volume, the probability of finding particle $$i$$ in the first chamber at any sample is thereby 1/2.
Consequently, the expected number of samples until all particles are simultaneously in the first chamber is $$2^{N}$$, which corresponds to about $$10^{(\log_{10} 2)N-11} > 10^{10^{19}}$$ years.
That is a long time to wait.
The age of the universe is about $$10^{10}$$ years.
Even in a modest computer simulation, for a very small box corresponding to $$N=10^5$$ particles, we would have to simulate for $$> 10^{10^4}$$ years (assuming the simulation can run in real-time).
To summarize, we see that the Poincaré recurrence theorem does not yield practically applicable predictions, unless the phase space dimension is tiny.
It nevertheless provides many useful theoretical insights, for example the impossibility of a continuous, strictly definite [Lyapunov function](https://en.wikipedia.org/wiki/Lyapunov_function).

All this is fine, and known since long, but how is it related to Zeitlin's model of hydrodynamics? 
What *is* Zeitlin's model anyway?


## Zeitlin's model in a nutshell

The Euler equations on a 2-dimensional Riemannian manifold $$M$$ are given by

\begin{equation}\label{eq:euler2d}
  \dot\omega = \\{\psi, \omega \\},\qquad \Delta\psi = \omega,
\end{equation}

where $$\omega$$ is the *vorticity* and $$\psi$$ is the *stream function*, related to the fluid velocity $$v$$ via the skew-gradient $$v = \nabla^{\bot}\psi$$.

The *Poisson bracket*, given by $$\{f,g \} = \nabla^\bot f \cdot \nabla g$$, makes $$C^\infty(M)$$ into an infinite-dimensional Lie algebra.
Thus, the geometric structures needed to define the 2-D Euler equations are

1. a Lie algebra $$\mathfrak g = (C^\infty(M),\{\cdot,\cdot\})$$ (the pre-dual phase space), and
2. a Laplacian operator $$\Delta: C^\infty(M)\to C^\infty(M)$$.

This rich geometric structure gives rise to many conservation laws. In particular,

- the phase flow preserves a *Lie-Poisson structure* <d-cite key="Ar1989"></d-cite>;
- the *Hamiltonian function* $$H(\omega) = \int_M \omega\psi$$ is conserved;
- there are infinitely many additional conserved quantities, called *Casimir functions*, given by $$C_k(\omega) = \int_M \omega^k$$;
- the phase flow is the reduced version of a geodesic flow on the infinite-dimensional group of area-preserving diffeomorphisms of $$M$$ <d-cite key="Ar1966"></d-cite>.

In 1991, Vladimir Zeitlin <d-cite key="Ze1991"></d-cite> had the brilliant idea to construct an approximation to the 2-D Euler equations \eqref{eq:euler2d} by specifying a sequence of Lie algebras $$\mathfrak g_N$$ so that (in some sense) $$\mathfrak g_N \to \mathfrak g$$ as $$N\to\infty$$.
He had, to his help, results from quantization theory, in particular those derived by Jens Hoppe <d-cite key="Ho1989"></d-cite> a few years earlier, which exactly gave such an approximation (but without reference to the Euler equations).
For the flat 2-torus $$M=\mathbb T^2$$, Zeitlin thereby constructed a finite-dimensional model of the 2-D Euler equations evolving on $$\mathfrak g_N = \mathfrak{su}(N)$$.
This gives rise to a matrix flow analogous to the 2-D Euler equations \eqref{eq:euler2d}

\begin{equation}\label{eq:zeitlin}
  \dot W = \frac{1}{\hbar}[P, W ],\qquad \Delta_N P  = W,
\end{equation}

where $$\hbar = 1/N$$ is a normalizing factor, $$W\in \mathfrak{su}(N)$$ is the *vorticity matrix*, and $$P \in \mathfrak{su}(N)$$ is the *stream matrix*.
The operator $$\Delta_N:\mathfrak{su}(N)\to \mathfrak{su}(N)$$ is the *quantized Laplacian*.
As mentioned, Zeitlin originally considered a version of $$\Delta_N$$ that corresponds to $$M=\mathbb{T}^2$$.
However, it turns out that the approximation works even better for the sphere $$M=\mathbb{S}^2$$, due to the special structure of $$\Delta_N$$ in this case (corresponding to the symmetric space and Kähler structure of the sphere, *cf.* Hoppe and Yau <d-cite key="HoYa1998"></d-cite>).
The Zeitlin flow \eqref{eq:zeitlin} is *isospectral*, so the spectrum of $$W$$ is conserved. This corresponds to the conservation of Casimirs.
Indeed, the quantized Casimirs are given by $$C_k(W) = \mathrm{tr}(W^k)$$.

At about 2016, in my work with Milo Viviani, we began a special study of Zeitlin's model.
We quickly realized it is under-explored, probably due to the difficulty to construct a numerically feasible algorithm for the projection $$C^\infty(\mathbb{S}^2)\to \mathfrak{su}(N)$$ and the corresponding inclusion $$\mathfrak{su}(N) \to C^\infty(\mathbb{S}^2)$$.
Overcoming this difficulty, we found all sorts of interesting phenomena (see <d-cite key="MoVi2020a"></d-cite><d-cite key="MoVi2020"></d-cite><d-cite key="MoVi2021"></d-cite><d-cite key="MoVi2022"></d-cite><d-cite key="CiViLuMoGe2022"></d-cite><d-cite key="CiViMo2022"></d-cite>).
Perhaps most strikingly, there seems to be a connection between low-dimensional Hamiltonian "blob-dynamics" and the long-term mixing states.
Indeed, our long-term simulations strongly suggest the following mechanisms for mixing:

1. Smaller vortex formations of the same sign merge to larger formations when their trajectories come close enough (the inverse energy cascade).
2. The motion of $$n$$ vortex blobs is accurately described by $$n$$ "fixed blob-shape" vortices as long as the blobs are well separated (so that no merging occurs).
3. If the motion of $$n$$ vortex blobs is not integrable, then, sooner or later, two vortex blobs of equal sign will reach a point in phase space where they are close enough to merge.
4. If, however, the motion of the $$n$$ vortex blobs is integrable (or at least close enough to integrable in the Kolmogorov–Arnold–Moser (KAM) sense) then the large-scale motion remains quasi-periodic with well-separated trajectories and no further merging occurs (integrability acts as a barrier in phase space, preventing further merging of blobs).

This mechanism gives explicit predictions on how many blobs we expect to see: the largest $$n$$ for which the dynamics is integrable.
In the case $$M=\mathbb{S}^2$$, we have $$n=3$$ for generic angular momentum and $$n=4$$ for vanishing angular momentum (see <d-cite key="MoVi2021"></d-cite>).
Milo and I ran many simulations. All of them conform to this rule: whenever the angular momentum is (close to) zero we get 4 blobs interacting quasi-periodically, otherwise we get 3 blobs <d-cite key="MoVi2020"></d-cite> also interacting quasi-periodically.
The videos below illustrate our conjecture (the sphere is visualized using the [Hammer projection](https://en.wikipedia.org/wiki/Hammer_projection)).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/nonvanishing2_forward_N_512_time_150_isofix.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/vanishing_forward_N_512_time_150_isofix.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>
<div class="caption">
Left: random initial conditions. The mixing settles at 3 blobs.<br>
Right: random initial conditions with vanishing angular momentum. The mixing settles at 4 blobs.
</div>

## Recurrence in Zeitlin's model

Here is the precise statement of the recurrence theorem (continuous version):

<div class="fake-img l-body">
  <p>
    Consider a dynamical system on a volume manifold \((M,\mu)\) with flow \(\varphi_t:M\to M\).
    If the flow is volume preserving, i.e., \(\varphi_t^*\mu = \mu\), and has only bounded orbits, then, for each open set, any orbit that intersects this open set intersects it infinitely often.
  </p>
</div>

Let me now explain how the recurrent paradox comes up in Zeitlin's model.
The Euler--Zeitlin equations \eqref{eq:zeitlin} constitute, as mentioned, a Lie--Poisson system.
As such, it evolves on the *co-adjoint orbit* defined by the initial conditions:

$$
  \mathrm{Orb}(W_0) = \{F^\dagger W_0 F \mid \varphi \in F\in \mathrm{SU}(N) \}.
$$

Since $$\mathrm{SU}(N)$$ is a compact Lie group, it follows that $$\overline{\mathrm{Orb}(W_0)}$$ is compact for any $$W_0\in\mathfrak{su}(N)$$.
Furthermore, $$\mathrm{Orb}(W_0)$$ is a *symplectic leaf* for the Poisson structure, which means it carries a natural symplectic structure preserved by the flow and compatible with the manifold structure of $$\mathrm{SU}(N)$$. 
In turn, this symplectic structure induces a phase volume form on $$\mathrm{Orb}(W_0)$$ also preserved by the flow.
Thus, the phase flow on $$\mathrm{Orb}(W_0)$$ is volume preserving and the orbits are bounded (since $$\overline{\mathrm{Orb}(W_0)}$$ is compact), so the recurrence theorem is applicable.

We conclude that, if we wait long enough, there should eventually appear a phase state visually indistinguishable from the initial state.
In our simulations of the Zeitlin system, we **never** saw this phenomenon: we always end up with a mixed state of 3 or 4 interacting blobs, and no further large-scale mixing after that.

But wait! Which dynamics do we actually see in our simulations? 
Any numerical time-stepping method implemented in the computer introduces numerical errors.
Could the apparent convergence to blobs be a numerical artifact not present in the exact Euler--Zeitlin solutions?
In other words, perhaps the convergence to blobs a consequence of the numerical time-discretization errors.

## Numerical errors in a nutshell

Our simulations are based on a time-discretization given in a paper by Viviani and myself <d-cite key="MoVi2020a"></d-cite>.
For the actual computer implementation, the numerical errors come in three flavors.


**Local truncation errors** <br>
At the first level, think of the time-discretization, for a time-step length $$h>0$$, as the iteration of a map $$\tilde\Phi_h:\mathbb{C}^{N\times N} \to \mathbb{C}^{N\times N}$$ which is an approximation to the exact flow map $$\Phi_h\colon \mathfrak{su}(N)\to\mathfrak{su}(N)$$.
Contrary to the exact flow, the approximation $$\tilde\Phi_h$$ is *not* (in general) a one-parameter flow map, i.e., $$\tilde\Phi_h\circ\tilde\Phi_h \neq \tilde\Phi_{2h}$$.
Now, each such sub-step $$W_{k+1} \mapsto \tilde\Phi_h(W_k) \equiv W_{k+1}$$ gives rise to the local truncation error $$W_{k+1}-\Phi_h(W_k)$$, where $$\Phi_h$$ is the exact flow.

**Root-finding error** <br>
The map $$\tilde\Phi_h:W_k \mapsto W_{k+1}$$ is typically not defined explicitly. 
In the case of our method, it is defined by the equations

$$
    W_k = (I- \frac{h}{2}P_{k+1/2})W_{k+1/2}(I + \frac{h}{2} P_{k+1/2}), \quad \Delta_N P_{k+1/2} = W_{k+1/2}
$$

$$
    W_{k+1} = (I + \frac{h}{2}P_{k+1/2})W_{k+1/2}(I - \frac{h}{2} P_{k+1/2}).
$$

It is a system of non-linear equations for the unknowns $$W_{k+1/2}$$ and $$W_{k+1}$$ (only $$W_{k+1}$$ is used in the next step).
Such a system of equations is called a *numerical scheme*.
To solve the equations on the computer, we use an iterative root-finding algorithm, for example fixed-point iterations or Newton's method.
Such an algorithm requires a stopping tolerance to decide if the iterate is close enough to the limiting element. 
Thus, we introduce another error whose size depends on the chosen tolerance.

**Round-off errors**<br>
So far, we dealt with the numerical discretization as if it takes values in $$\mathbb{R}$$ (or rather $$\mathbb{C}$$), which, of course, is false.
Indeed, the computer can only represent a subset of $$\mathbb{R}$$ given by the [floating-point numbers](https://en.wikipedia.org/wiki/Floating-point_arithmetic).
Since this subset is finite, and therefore not closed under arithmetic operations, any computer implementation gives rise to [round-off errors](https://en.wikipedia.org/wiki/Round-off_error).
Typically, double precision floating-point arithmetics is used, in which round-off errors are small: for numbers of order 1, round-off errors in the arithmetic operations are of the order $$10^{-16}$$.
This is roughly the ratio between the hair's breadth ($$\approx 15~\mu m$$) and the distance to the sun ($$\approx 1~\mathrm{au}$$).

Numerical analysts, nowadays, are predominantly concerned with local truncation errors, since these typically dominate the total error.
So, when you read in [Numerische Mathematik](https://www.springer.com/journal/211) about the latest convergence result for some method, it really means convergence under the assumption of no root finding or round-off errors.
There are, however, situations where those errors do play a role; long-time simulations of Zeitlin's model is an example, as we shall see.
But before I get to that issue, let me first show you an interesting numerical experiment.

## First experiment: time's arrow

Like every Hamiltonian system, the Euler--Zeitlin equations \eqref{eq:zeitlin} are *time-reversible* with respect to changing the sign of the Hamiltonian $$H(W)$$.
In other words, if $$\Phi_t$$ is the flow of the system with Hamiltonian $$H$$, and $$\Psi_t$$ is the flow of the system with Hamiltonian $$-H$$, then $$\Phi_{t} = \Psi_t^{-1}$$.

In the simulations above, however, it certainly looks like the dynamics is irreversible: we start from some randomly chosen initial $$W_0$$ and from that we observe "convergence" to a blob configuration, possibly associated with an attractor.
But, due to the Hamiltonian nature of the equations, there cannot exist such an attractor in the exact Zeitlin equations.
Instead, if an attractor exists, it should come from [numerical dissipation](https://en.wikipedia.org/wiki/Numerical_diffusion) introduced via the numerical errors.

Let us now carry out the following experiment: for the vanishing momentum initial condition $$W_0$$ as above, run one simulation for the Hamiltonian $$H$$ (just as the second simulation above) and another one for $$-H$$.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/vanishing_forward_N_512_time_150_isofix.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/vanishing_reverse_N_512_time_150_isofix.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>
<div class="caption">
Left: forward simulation with random initial conditions.<br>
Right: the same initial conditions, but with time-reversed dynamics \(H\leftrightarrow -H \).
</div>

Both simulations "convergence" to a 4 blob configuration.
This behavior appears to be inconsistent with the time-reversible nature of the exact Euler--Zeitlin solutions: such a solution would start from a blob configuration at $$t \ll 0$$, then unwrap itself to the smooth, non-blob configuration $$W_0$$ at $$t=0$$, only to again form a blob configuration at $$t \gg 0$$.
Consequently, numerical dissipation causes the blob formations, it seems.

But, not too fast now, please keep reading.

## Reversible and symplectic schemes

In most situations, local truncation is the error source responsible for numerical dissipation.
If we take, for example, the simplest Hamiltonian system, the harmonic oscillator, and discretize it by the [backward Euler method](https://en.wikipedia.org/wiki/Backward_Euler_method), we obtain, from the local truncation error, a numerical dissipation that can be re-interpreted as physical damping proportional to the stepsize $$h$$.
In contrast, however, any numerical dissipation in our method above, for the Euler--Zeitlin equations, cannot originate from local truncation errors.
Let me explain why.

If you study the scheme above, defining $$W_{k+1} = \tilde\Phi_h(W_k)$$, notice that the equations are symmetric under the substitution $$P_{k+1/2}\leftrightarrow -P_{k+1/2}$$.
That is, if $$\tilde\Psi_h$$ is the map $$W_k \mapsto W_{k+1}$$ defined after this substitution, then $$\tilde\Phi_h = \tilde\Psi_h^{-1}$$.
Since $$P_{k+1/2}\leftrightarrow -P_{k+1/2}$$ is exactly the same method under the above mentioned Hamiltonian substitution $$H\leftrightarrow -H$$, we see that the method **preserves the time-reversibility of the original system**.
Thus, in absence of root-finding and round-off errors, the method is time-reversible: if we take $n$ steps with the method, and from there apply another $$n$$ steps with the same method but for the time-reversed Hamiltonian, then we then get back to the initial state.

Even more structure is preserved by the method.
Indeed, in our paper <d-cite key="MoVi2020a"></d-cite> we proved that $$\tilde\Phi_h$$ is a Lie--Poisson map that evolves on the co-adjoint orbits.
It means that the method itself defines a symplectic, discrete dynamical system on $$\mathrm{Orb}(W_0)$$.
Furthermore, one can, via *backward error analysis*, prove that this discrete dynamical system corresponds to the exact flow of a continuous Lie--Poisson system for a slightly modified Hamiltonian (cf. <d-cite key="HaLuWa2006"></d-cite>).<d-footnote>More precisely, this statement is true up to exponentially small terms.</d-footnote>

In summary, we see that the method $$\tilde\Phi_h$$ itself is a time-reversible Lie--Poisson system and therefore cannot be dissipative or have an attractor.
Thus, any numerical dissipation must originate from either root-finding or round-off errors.
But how can we find out?
The plot thickens.

## Second experiment: there and back again

It is possible to give an estimate of how many time-steps are needed in order for root-finding and round-off errors to have a tangible effect on the dynamics.
For a time-reversible method, as here, it can be directly tested by the following numerical experiment.

1. With initial conditions $$W_0$$ as above, run a simulation forward for $$n$$ time-steps, well beyond the formation of the blobs. This gives us the state $$W_n$$.

2. With initial conditions $$W_n$$, re-start a new simulation, but now corresponding to the time-reversed system, and carry out $$n$$ of time-steps. 
If the resulting state, let us call it $$W_{0\leftarrow n}$$, is close to $$W_0$$ (for example in max-norm $$\lVert W_{0\leftarrow n} - W_0\rVert_{\infty}$$), then any numerical dissipation caused by root-finding and round-off errors is neglectable in that time interval.

Below is the outcome of the experiment.

<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/reversibility_vanishing_N_512_time_120_isofix_compsum.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>

Voilà! The simulation returned to a state indistinguishable from the initial conditions.
The key observation is that the four blobs emerge long before the stop and restart at $$W_n$$.
The conclusion is decisive: **the mechanism for blob formations is not caused by numerical dissipation**.

Before I continue, let me give a few more details of the experiment. 
Even if the magnitude of each individual root-finding or round-off error is as the breadth of a hair to one astronomical unit, the accumulated error $$\lVert W_{0\leftarrow n} - W_0\rVert_{\infty}$$ grows exponentially with $$n$$.
Thus, eventually these errors will reach the magnitude of $$\lVert W_0 \rVert_\infty$$.
Below is a diagram, in semi-log scale, displaying the relative error $$\lVert W_{0\leftarrow n} - W_0\rVert_{\infty}/\lVert W_0 \rVert_\infty$$ for increasing $$n$$.

<div class="row justify-content-center">
    <div class="col-10 col-sm-8"> 
        {% include figure.liquid path="assets/img/reversibility-error.svg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The first dashed line indicates when the mixing phase leading to the four blobs is over (the *mixing time*).
The second dashed line indicates which $$n$$ I used to produce the animation above.
At $$n=7\cdot 10^5$$, the relative error is about 1, so the accumulated error is as large as the initial data.
After this point, $$n$$ needs to be at least doubled again before the unwrapping of the blobs at $$W_{0\leftarrow n}$$ has completely vanished.

## Statistics in Zeitlin's model

From the experiment just conducted, we conclude that mixing leading to blob formations occurs in Zeitlin's model (to be precise, we showed it for the near-by Hamiltonian flow $$\tilde\Phi_h$$).
Indeed, our previous rejection was too hasty: there are solutions that begin in a seemingly stable four blob configuration, then suddenly unwrap, only to return to a blob configuration again.
But we never see generic solutions unwrap, for the same reason we never see the gas particles return to the first chamber: it is extraordinarily unlikely to happen within reasonable time intervals.
And so the old paradox of Boltzmann and Poincaré appear again, but in the new shape of Zeitlin's model.

Here is a conjecture, intentionally vague in the spirit of V. Arnold (cf. <d-cite key="KhTa2014"></d-cite>):

<div class="fake-img l-body">
  <p>
    For \(N\) large enough and \(W_0\in\mathfrak{su}(N)\) corresponding to smooth, generic vorticity, there exists a measure on \(\mathrm{Orb}(W_0)\), (close to) invariant under the Euler--Zeitlin equations \eqref{eq:zeitlin}, for which there is an overwhelming probability of blob-like configurations corresponding to large-scale integrable motion as described above.
  </p>
</div>

The notion of using statistical mechanics in hydrodynamics is old: it was first suggested by Lars Onsager in an absolutely brilliant paper from 1949 <d-cite key="On1949"></d-cite>.
Onsager considered, instead of gas particles, a square with a large but finite number of point vortices.
These are weak solutions of the form $$\omega = \sum_{i=1}^N \Gamma_i \delta_{x_i}$$.
He then applied Boltzmann's framework to the finite-dimensional dynamical system for the point-vortex positions $$x_i \in [0,1]\times[0,1]$$, which preserves phase volume (owing to the Hamiltonian structure discovered already in 1858 by Helmholtz <d-cite key="He1858"></d-cite>).
Our approach is similar to Onsager's, only it is based on Zeitlin's model instead of point-vortices.
It can therefore address smooth vorticity fields, for which Casimirs are preserved (all the Casimirs break down for point-vortices, only energy survives as a first integral).

**Remark**<br>
There are other approaches to adopt Onsager's idea to smooth vorticity fields.
Typically, these are based on some truncation that does not respect the conservation of Casimirs, except possibly enstrophy (cf. <d-cite key="BoEc2012"></d-cite><d-cite key="BoVe2012"></d-cite>).
These theories, however, assume ergodicity and predict large-scale steady blob configurations. 
That is not what we see.
Rather, near integrability of the large-scale blob interactions seem to block these predictions from happening, or at least significantly slow down the mixing, so it does not happen within feasible time-intervals.


## Summary

In this post I reviewed the classical paradox that came to light through Boltzmann's H-theorem and Poincaré's recurrence theorem.
I demonstrated how blob formations in numerical simulations based on Zeitlin's model, which at first sight appears to originate from numerical dissipation, actually turn out to display the same old paradox, but in a different setting.

The question of a rigorous understanding of the generic long-time behavior of the 2-D Euler equations is a *jewel* of mathematical fluid dynamics.
My long-term aspiration is that Zeitlin's model, and numerical simulations based on it, shall prove important for further progress.
