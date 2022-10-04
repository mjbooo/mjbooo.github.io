---
title: 'Model review: Structured Denoising Diffusion Models in Discrete State-Space (Ho et al., 2021)'
# author: cotes
date: 2022-09-20 14:00
categories: [AI, Diffusion model]
tags: [Generative model, Diffusion model, review, D3PM, Discrete State Space, DDPM in Discrete State-Space]
# pin: True
math: True
---
# Intro
continuous state-space를 다루던 DDPM을 discrete state space에서 작동하게 만든 것이 D3PM이다.
때문에 DDPM과 비유를 통했을 때(특히 Jonathan Ho가 논문에 참여한만큼) 훨씬 수월하게 이해할 수 있다.

# One-sentence Summary

- **kor**: 기존 Multinomial diffusion model을 generalize시킴으로써 discrete state space에서 더 잘 작동하게 된 diffusion model (D3PM)을 선보인 논문
- **en**: Introducing Discrete Denoising Diffusion Probabilistic Model (D3PM) which works better in discrete state space as it generalizes the existing multinomial diffusion model
- **A link for the paper**: <https://openreview.net/forum?id=h7-XixPCAL>
- **The PPT file I made for the review**: [220920_Structured Denoising Diffusion Models in Discrete State-Space]()

# Analogy with DDPM
- **Denoising Diffusion Probabilistic Model (Ho et al., 2020)**  
Intro에서 언급
DDPM: Gaussian kernel (continuous space)-> known stationary distribution
<!-- song forward & stationary distribution 사진 --> 
D3PM: Transition matrix (discrete space)-> known stationary distribution
forward를 단계적으로 할 필요는 없이, 전체 timestep 1..T 중 arbitrary t를 sampling할 수 있다.

|      | state-space | diffuses input with                   | converges to                | according to   | forwards by t with | model outputs (reverse) |
|------|-------------|---------------------------------------|-----------------------------|----------------|--------------------|-------------------------|
| **D3PM** | discrete    | Transition Matrix (Multinomial dist.) | stationary dist.            | Markov chain   | cumulative product | t-step reverse          |
| **DDPM** | continuous  | Gaussian Kernel (Gaussian dist.)      | stationary dist. (Gaussian) | noise schedule | noise schedule     | 1-step reverse          |




# Forward Process
<!-- DDPM에서는 noise schedule에 따라 gaussian noise를 sampling해서, original data $x_0$를  corrupt (diffuse)한다.
D3PM에서는 Markov chain에 따라 multinomial distribution을 sampling해서, original data $x_0$를  corrupt (diffuse)한다. -->
forward process를 표로 간단하게 도식화해보자면,  

|      | sampling (stochasticity) with | according to.. |
|------|-------------------------------|----------------|
| DDPM |         Gaussian dist.        | noise schedule |
| D3PM |       Multinomial dist.       |  Markov chain  |

**still writing..**