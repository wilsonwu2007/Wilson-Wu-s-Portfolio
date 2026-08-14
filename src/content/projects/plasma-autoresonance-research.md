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

- Built **numerical models** of a driven pendulum oscillator to simulate autoresonant wave amplitude growth under different drive constants, validating behavior against theoretical predictions.
- Configured and ran **OSIRIS particle-in-cell simulations**, simulating electromagnetic waves propagating into plasma.
- Wrote a **Python data pipeline** using SciPy, NumPy, and matplotlib to process simulation outputs and visualize laser field envelopes and plasma wave dynamics.

**Tools:** OSIRIS (UCLA-developed particle-in-cell simulation framework), Python (SciPy, NumPy, matplotlib)

## Results

**Auto-resonant control of a nonlinear pendulum**

- **Simulated** a driven nonlinear oscillator across four drive strengths to characterize autoresonant behavior.
- **Analyzed** the effects of drive strength and frequency chirping on phase-locking and amplitude growth.
- **Validated** the numerical model by reproducing the expected autoresonance threshold and growth behavior reported in published research.

![Pendulum oscillator autoresonance simulation across drive constants](/images/projects/plasma-autoresonance-research/pendulum-graph.png)

**Auto-resonant control of PWBA using laser chirping**

- **Modeled** plasma beat-wave dynamics with different chirp rates.
- **Compared** chirped and unchirped wave growth.
- **Validated** sustained amplitude growth under autoresonance.

![Plasma beat wave acceleration under three chirp modes](/images/projects/plasma-autoresonance-research/chirp-graph.png)

## What I Learned

This was my first exposure to a research-grade simulation workflow. I learned how numerical models and large-scale simulations cross-validate each other, and how to extract meaningful signal from noisy raw data.

![Research poster: Auto-Resonance in 1D Plasma Beat-Wave Acceleration](/images/projects/plasma-autoresonance-research/poster.jpg)

