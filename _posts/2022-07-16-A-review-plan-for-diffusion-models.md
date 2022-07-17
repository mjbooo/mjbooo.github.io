---
title: 디퓨젼 모델 리뷰 계획!!(A review plan for diffusion models)
# author: cotes
date: 2022-07-16 20:00
categories: [AI, Diffusion model]
tags: [Generative model, Diffusion model, review]
pinned: True
---

## Plan (in Kor, 기존에 없는 리뷰 위주)

### Improved Denoising Diffusion Probabilistic Models (Nichol et al., 2021)
- DDPM에 몇 가지 modification을 더해서 높은 log-likelihood, 안정적인 학습 양상을 얻었음을 주장하는 논문  
- Introducing Improved DDPM which can be stably trained and achieve high log-likelihood by adding few modifications to DDPM)  
- <https://arxiv.org/abs/2102.09672>

### Classifier-Free Diffusion Guidance (Ho et al., 2021)
- Diffusion Models Beat GANs on Image Synthesis에서 수행한 classifier-guidance를 pre-trained classifier 없이도 (classifier-free) 수행할 수 있음을 보인 논문  
- Introducing classifier-free guidance which can perform the functionality of classifier-guidance without the pre-trained classifier, necessitated in previous paper ‘Diffusion Models Beat GANs on Image Synthesis’  
- <https://openreview.net/forum?id=qw8AKxfYbI>

### D3PM
- TBC..