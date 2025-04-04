---
layout: post
title:  Simulation of Kähler potentials
date: 2025-02-22 13:00:00+0100
giscus_comments: true
description: Preliminary results on spherical simulations corresponding to statistical mechanics for Kähler potentials
tags: internal
published: true
hidden: true
---
For a given probability density $$\sigma$$, consider the vorticity-type equations

$$
\dot\rho + \{\psi,\rho\}=0, \qquad \Delta \psi = \rho -\sigma 
$$

where $\rho$ is a probability density and $\psi$ is the stream function. 
We can discretize these equations via matrix hydrodynamics, which yields the isospectral matrix flow

$$
\dot R = \frac{1}{\hbar}[P,R],\qquad \Delta_N P = R - F .
$$

It is interesting to compare long-time simulations of such systems with the predictions from statistical mechanics (corresponding to optimal potentials in Kähler geometry).

We randomly generate three background measures $$R$$ (via a spherical harmonics expansion with maximum wave-number $$\ell=3$$).
Then we use random initial conditions (with maximum wave-number $$\ell=10$$) and run the simulations.
The results are given below (to the left is the background measure $$R$$).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/berman_shift_F_seed_1_N_512.png" class="img-fluid rounded z-depth-1" %}
        <!-- {% include video.html path="assets/video/sqg2_beta_0_25_N_512.mp4" class="img-fluid rounded z-depth-1" controls=true %} -->
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="assets/video/berman_shift_seed_1_N_512.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>
<!-- <div class="caption">
Left: beta=0.25,
Middle: beta=0.5,
Right: beta=1.0
</div> -->

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/berman_shift_F_seed_2_N_512.png" class="img-fluid rounded z-depth-1" %}
        <!-- {% include video.html path="assets/video/sqg2_beta_0_25_N_512.mp4" class="img-fluid rounded z-depth-1" controls=true %} -->
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="assets/video/berman_shift_seed_2_N_512.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/berman_shift_F_seed_3_N_512.png" class="img-fluid rounded z-depth-1" %}
        <!-- {% include video.html path="assets/video/sqg2_beta_0_25_N_512.mp4" class="img-fluid rounded z-depth-1" controls=true %} -->
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="assets/video/berman_shift_seed_3_N_512.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/berman_shift_F_seed_4_N_512.png" class="img-fluid rounded z-depth-1" %}
        <!-- {% include video.html path="assets/video/sqg2_beta_0_25_N_512.mp4" class="img-fluid rounded z-depth-1" controls=true %} -->
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="assets/video/berman_shift_seed_4_N_512.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>


Observations:

- In most simulations, the mass gets concentrated around the strongest stationary blobs.

- In one simulation (a single blob found an "integrable-like" motion)




