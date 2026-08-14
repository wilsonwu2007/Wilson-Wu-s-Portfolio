---
title: "IdeaHacks: Gacha Thrifting Machine"
summary: "A gacha-style vending machine that dispenses thrifted clothing in capsule balls, built in 36 hours, with a joystick that triggers an on-screen gacha animation and a physical capsule dispense."
date: 2025-02-01
org: "IdeaHacks"
tags: ["Embedded Systems", "ESP32", "Motor Control", "Hackathon"]
featured: false
order: 4
image: "/images/projects/ideahacks-gacha-machine/machine-photo.jpg"
---

![Finished gacha thrifting machine](/images/projects/ideahacks-gacha-machine/machine-photo.jpg)

## Project Overview

Built a gacha-style vending machine that dispenses thrifted clothing in capsule balls. In 36 hours, our team designed and assembled a working prototype where a joystick triggers an on-screen gacha animation followed by a physical capsule dispense.

**My contribution:** designed and implemented the electrical and firmware system, integrating an ESP32-S3, a BTS7960 motor driver, a DC motor, a rotary encoder, and a joystick.

## Hardware & Control

- **Hardware:** ESP32-S3, BTS7960 H-bridge, DC motor with rotary encoder, analog joystick
- **Control:** 20 kHz PWM, encoder-based position control, Arduino IDE / C++

## Electrical Implementation

- Integrated the BTS7960 motor driver with the ESP32-S3 to control the carousel.
- Held the motor driver's enable pins LOW during boot to prevent unintended motor movement before firmware initialization.
- Used a rotary encoder interrupt to track carousel position and control the motor's stopping position.
- Implemented a speed ramp near the target position to reduce carousel overshoot.
- Calibrated the joystick on startup and added debounce logic to prevent accidental activation.
- Tuned encoder counts and motor speed through repeated physical testing to achieve consistent capsule dispensing.

## Challenges

The main challenge was getting the carousel to stop consistently despite changes in mechanical load. I iteratively adjusted the target encoder count and speed ramp through repeated testing until the mechanism reliably reached the dispensing position.

![Electronics and wiring for the motor/encoder/joystick system](/images/projects/ideahacks-gacha-machine/wiring-photo.jpg)

## Result

The prototype successfully demonstrated the complete joystick to motor control to capsule dispense sequence at the hackathon. A future version could add an IR sensor or limit switch to detect the actual capsule drop rather than relying only on encoder position.
