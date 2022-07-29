---
title: 'Model review: Classifier-Free Diffusion Guidance (Ho et al., 2021)'
# author: cotes
date: 2022-07-29 14:00
categories: [AI, Diffusion model]
tags: [Generative model, Diffusion model, review]
pin: True
---
# Intro
Diffusion model은 generative model의 대세가 되어가는 모양새이다.(뇌피셜임)  
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

그래서 여기서도 PPT 담긴 내용을 차례로 짚어가며 설명을 풀어나갈 예정이다!  
아래 헤드라인으로 박힌 내용들은 다 ppt 슬라이드 제목에서 따온 것들이다. 

# Summary
- **kor**: Diffusion Models Beat GANs on Image Synthesis에서 수행한 classifier-guidance를 pre-trained classifier 없이도 (classifier-free) 수행할 수 있음을 보인 논문  
- **en**: Introducing classifier-free guidance which performing classifier-guidance without the pre-trained classifier, necessitated in previous paper ‘Diffusion Models Beat GANs on Image Synthesis’  
- **A link for the paper**: <https://openreview.net/forum?id=qw8AKxfYbI>
- **The PPT file I made for the review**: [220516_classifier_free_guidance_ mj.pdf](https://github.com/mjbooo/mjbooo.github.io/files/9216156/220516_classifier_free_guidance_with_ref_mj.pdf)

# Why Classifier-‘free’ Guidance? (vs. Classifier Guidance)
### Classifier Guidance  
논문제목이 Classifier-Free Diffusion Guidance인데, 그럼 Classifier Guidance도 있지 않을까?  
그걸 다룬 것이 Diffusion Models Beat GANs on Image Synthesis (Dhariwalet al., 2021)이다.  
classifier-guidance를 통해 fidelity와 diversity를 trade-off 시킬 수 있고, 그렇게 하면 diffusion model이 GAN 모델 중 SOTA인 BigGAN을 fidelity면에서 이긴다는 내용이다.
<!-- ### 여기에 사진넣고 -->


### Classifier-‘free’ Guidance
그럼 왜 Classifier-‘free’ Guidance가 필요할까?  
classifier-guidance는 noised data로 학습한 pre-trained classfier가 필요한데, 이게 data pipeline을 복잡하게 만든다.  
또 (저자들의 주장에 따르면) noised data를 사용한 것이 adversarial attack을 일으켜 성능 저하를 일으킨다.  
그래서 이 논문은 classifier 없이 순수하게 generative model만 이용해서 guidance를 주는 방법을 택했다.  
물론 그 대가로 sampling speed가 느려질 수 있는데, 보통 classifier보다 generative model이 크기 때문에 forward가 느려서 그렇다.

## Motivation: Classifier Guidance




TBC....



