---
title: 디퓨젼 모델 리뷰 계획!!(A review plan for diffusion models)
# author: cotes
date: 2022-07-16 20:00
categories: [AI, Diffusion model]
tags: [Generative model, Diffusion model, review]
pin: True
---

<!-- ## Intro
Diffusion model은 generative model의 대세가 되어가는 모양새이다.(뇌피셜)  
그런데 정말 유명한 모델이 아니면 Diffusion model에 관한 한국어 리뷰가 별로 없어서, 기왕 논문으로 세미나한 김에 정리해서 올리자고 생각했다.  
근데 그 생각을 한 게 5월이고 지금은 8월을 앞두고 있다,,,^^  
인생의 관건은 역시 실행력 아닐까?  

무튼 이 블로그에 올라오는 모델 리뷰는 크게 두 가지 과정을 거친다.  
먼저 리뷰할 논문 선정하고 스터디 한 후에, 겻님이랑 친구들 모두 참석하는 논문 세미나에서 얘기를 한다.  
리뷰에는 그 과정을 거치면서 스스로 정리한 내용을 담았다.  

논문의 A to Z 까지 질척대는 글은 아닐 것이다.  
만약 누군가 이 논문에 대해 묻는다면 꼭 알려줘야지 싶은 내용만 읽기 편하게 압축했다.  
세미나에서 PPT를 활용하는데, 그 PPT는 내가 이해한 한도 안에서 흐름과 내용을 집약해놓은 것이다.  
다시말해 PPT가 곧 인생 최대 이해치이다.  

그래서 리뷰에서도 PPT 담긴 내용을 차례로 짚어가며 설명을 풀어나갈 예정이다!   -->

## writers!

| reviewer | homepage                  |
|----------|---------------------------|
| ssbae    | https://seongsubae.info/  |
| mjlee    | https://mjbooo.github.io/ |
| ebcho    |                           |

## paper list!

| # | Date     | Reviewer | Title                                                                   |
|---|----------|----------|-------------------------------------------------------------------------|
| 1 | 22-07-29 | mjlee    | [Classifier-Free Diffusion Guidance (Ho et al., 2021)](https://mjbooo.github.io/posts/Classifier-Free-Diffusion-Guidance-(Ho-et-al.,-2021)/)                    |
| 2 | 22-08-05 | ssbae    | [Diffusion-LM Improves Controllable Text Generation (XL Li et al., 2022)](https://seongsubae.info/2022/08/05/diffusion-lm-improves-controllable-text-generation/) |
| 3 | 22-09-20 | mjlee    | [Structured Denoising Diffusion Models in Discrete State-Spaces (Ho et al., 2021)] |

## 후보들
### Improved Denoising Diffusion Probabilistic Models (Nichol et al., 2021)
- DDPM에 몇 가지 modification을 더해서 높은 log-likelihood, 안정적인 학습 양상을 얻었음을 주장하는 논문  
- Introducing Improved DDPM which can be stably trained and achieve high log-likelihood by adding few modifications to DDPM)  
- <https://arxiv.org/abs/2102.09672>

### Classifier-Free Diffusion Guidance (Ho et al., 2021)
- Diffusion Models Beat GANs on Image Synthesis에서 수행한 classifier-guidance를 pre-trained classifier 없이도 (classifier-free) 수행할 수 있음을 보인 논문  
- Introducing classifier-free guidance which can perform the functionality of classifier-guidance without the pre-trained classifier, necessitated in previous paper ‘Diffusion Models Beat GANs on Image Synthesis’  
- <https://openreview.net/forum?id=qw8AKxfYbI>

### Structured Denoising Diffusion Models in Discrete State-Spaces (Ho et al., 2021)
- 기존 Multinomial diffusion model을 generalize시킴으로써 discrete state space에서 더 잘 작동하게 된 diffusion model (D3PM)을 선보인 논문
- Introducing Discrete Denoising Diffusion Probabilistic Model (D3PM) which works better in discrete state space as it generalizes the existing multinomial diffusion model.
- https://openreview.net/forum?id=h7-XixPCAL

### Imagen
- TBC..

### Glide (?)
- TBC..

### High-Resolution Image Synthesis with Latent Diffusion Models: Diffusion for  latent vectors
- TBC..

### Diffusion Autoencoders: Toward a Meaningful and Decodable Representation
- TBC..