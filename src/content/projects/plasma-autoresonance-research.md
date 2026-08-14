---
title: "Computational Autoresonance Research"
summary: "Built numerical models and ran particle-in-cell simulations to study autoresonant control of plasma beat-wave acceleration, as part of UCLA's Laser-Plasma Group."
date: 2025-08-01
org: "UCLA Plasma Accelerator / Laser-Plasma Interactions Group"
tags: ["Computational Physics", "Python", "OSIRIS", "Particle-in-Cell Simulation"]
featured: true
order: 2
image: "/images/projects/plasma-autoresonance-research/pendulum-graph.png"
---

## Background

Particle accelerators are used in medical treatments, X-ray generation, and physics research, but traditional designs span kilometers. Plasma-based accelerators could shrink that to meters. My research focused on a key challenge: keeping the laser frequency matched to the plasma wave as it grows, a problem called **autoresonance**.

## What I Did

- Built numerical models of a driven pendulum oscillator to simulate autoresonant wave amplitude growth under different drive constants, validating behavior against theoretical predictions.
- Configured and ran OSIRIS particle-in-cell simulations, simulating electromagnetic waves propagating into plasma.
- Wrote a Python data pipeline using SciPy, NumPy, and matplotlib to process simulation outputs and visualize laser field envelopes and plasma wave dynamics.

**Tools:** OSIRIS (UCLA-developed particle-in-cell simulation framework), Python (SciPy, NumPy, matplotlib)

## Results

**Auto-resonant control of a nonlinear pendulum**

- Simulated a driven nonlinear oscillator across four drive strengths to characterize autoresonant behavior.
- Analyzed the effects of drive strength and frequency chirping on phase-locking and amplitude growth.
- Validated the numerical model by reproducing the expected autoresonance threshold and growth behavior reported in published research.

![Pendulum oscillator autoresonance simulation across drive constants](/images/projects/plasma-autoresonance-research/pendulum-graph.png)

**Auto-resonant control of PWBA using laser chirping**

- Modeled plasma beat-wave dynamics with different chirp rates.
- Compared chirped and unchirped wave growth.
- Validated sustained amplitude growth under autoresonance.

![Plasma beat wave acceleration under three chirp modes](/images/projects/plasma-autoresonance-research/chirp-graph.png)

## What I Learned

This was my first exposure to a research-grade simulation workflow. I learned how numerical models and large-scale simulations cross-validate each other, and how to extract meaningful signal from noisy raw data.

## Poster: Auto-Resonance in 1D Plasma Beat-Wave Acceleration

*Wilson Wu, Yohannes Mergia, Chan Joshi. UCLA Plasma Accelerator / Laser-Plasma Interactions Group, Department of Electrical and Computer Engineering.*

**Objective**

- Use particle-in-cell simulation to model plasma waves.
- Investigate auto-resonant control methods in plasma beat-wave acceleration, including laser chirping.
- Use Python to verify and analyze auto-resonant control techniques in nonlinear systems.
- Analyze the impact of chirping techniques on maintaining resonance and improving plasma wave excitation.

**Conclusions**

Introducing a chirp to a nonlinear pendulum system with a driving force allows the driving force and pendulum to stay in resonance, resulting in increasing angular amplitude. Analytically deriving the relationship between drive strength and chirp rate gives the threshold drive strength for the system to stay in resonance. Introducing a chirp rate in laser results in higher normalized amplitudes.

**Future Directions**

- Experimentally validate auto-resonant control of PWBA on real lasers, plasma, and electron injectors.
- Expand the techniques and simulation into 2D and 3D simulations.
- Explore thermal correction and other forms of autoresonance.

![Research poster: Auto-Resonance in 1D Plasma Beat-Wave Acceleration](/images/projects/plasma-autoresonance-research/poster.jpg)

*With thanks to Professor Joshi for the research opportunity, Yohannes for his mentorship, and SURP for the opportunity to participate in this program. I would also like to thank Prof. Dolecek and the Fast Track to Success program, and the Department of Energy High Energy Program and UCLA for funding this research.*
