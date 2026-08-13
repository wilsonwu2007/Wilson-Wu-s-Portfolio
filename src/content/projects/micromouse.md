---
title: "Micromouse: Autonomous Maze-Solving Robot"
summary: "Designed and built an autonomous robot capable of navigating a 16×16 maze, with integrated sensing, motor control, and orientation tracking on a custom PCB."
date: 2025-03-01
org: "IEEE Micromouse"
tags: ["PCB Design", "KiCad", "Embedded Systems", "Robotics", "STM32"]
featured: true
order: 3
image: "/images/projects/micromouse/pcb-render.png"
---

![Micromouse PCB 3D render](/images/projects/micromouse/pcb-render.png)

## Project Overview

My team and I designed and built an autonomous robot capable of navigating a 16×16 maze, with integrated sensing, motor control, and orientation tracking on a custom PCB.

**My contribution:** PCB architecture and schematic design, component selection, PCB layout, and hardware debugging.

## Technical Specifications

- PCB: 2-layer, designed in KiCad
- MCU: STM32F205
- Motor control: L293DD dual H-bridge
- Sensors: 4× IR emitter/detector pairs
- IMU: LSM6DSO 6-axis IMU
- Motors: independent left/right DC motor control
- Grounding: separate motor and logic ground planes
- Firmware: STM32 / C

## Schematic Design

**Wall-sensing circuit** — used four IR emitter–receiver pairs for front, back, left, and right wall detection. IR emitters send light pulses toward the wall, and reflected IR is detected by the receivers. Used MOSFETs to switch the IR emitters from the 3.3 V supply rather than driving them directly from the STM32 GPIO, allowing higher emitter current while protecting the microcontroller.

![Wall-sensing IR circuit schematic](/images/projects/micromouse/schematic-wall-sensing.png)

**H-bridge motor driver** — used the L293DD dual H-bridge to control the left and right DC motors, with H-bridge inputs connected to STM32 GPIOs for direction control. Separated motor and logic grounds to reduce noise in the STM32 and IR sensing circuits.

![H-bridge motor driver schematic](/images/projects/micromouse/schematic-h-bridge.png)

## PCB Implementation

Kept the PCB compact to reduce weight and maintain balanced weight distribution. Placed IR emitters and receivers along the board edges for clear wall detection. Placed decoupling capacitors close to IC power pins to reduce power-supply noise, and optimized component placement to minimize vias and keep routing short and simple.

![PCB layout render](/images/projects/micromouse/pcb-layout.png)

## Physical Testing & Firmware Issues

A handful of pin/peripheral conflicts surfaced during firmware integration:

- **TIM3 conflict:** motors needed PWM while encoders needed timer inputs, but both were assigned to TIM3 — remapped motors to TIM13 and TIM14 to separate the timer functions
- **PA9 conflict:** PA9 was assigned to both USART1 TX and a right encoder channel — removed USART1 since encoder feedback was more important for motor control
- **PC6 ADC limitation:** the bottom-left IR receiver was connected to PC6 for analog distance sensing, but PC6 is not ADC-capable on the STM32F205 — reconfigured it as a GPIO input for binary wall detection

![Assembled Micromouse board](/images/projects/micromouse/physical-photo.jpg)

**Current state:** the robot can move, but flood fill, movement primitives, and the main state machine remain incomplete. IR thresholds and PID gains have not yet been calibrated on hardware.

**What I'd do differently:** create a peripheral/pin map before PCB layout, prioritizing required timers and ADC channels to avoid the conflicts discovered during firmware integration.
