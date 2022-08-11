---
title: 'Model review: Classifier-Free Diffusion Guidance (Ho et al., 2021)'
# author: cotes
date: 2022-07-29 14:00
categories: [AI, Diffusion model]
tags: [Generative model, Diffusion model, review, Classifier-Free Guidance, Classifier Guidance]
# pin: True
math: True
---
# Intro
gradient를 이용한 guidance나 truncation trick에 익숙하면 논문의 취지를 쉽게 파악할 수 있다.  

# One-sentence Summary
- **kor**: Diffusion Models Beat GANs on Image Synthesis에서 수행한 classifier-guidance를 pre-trained classifier 없이도 (classifier-free) 수행할 수 있음을 보인 논문  
- **en**: Introducing classifier-free guidance performing classifier-guidance without the pre-trained classifier, necessitated in previous paper ‘Diffusion Models Beat GANs on Image Synthesis’  
- **A link for the paper**: <https://openreview.net/forum?id=qw8AKxfYbI>
- **The PPT file I made for the review**: [220516_classifier_free_guidance_ mj.pdf](https://github.com/mjbooo/mjbooo.github.io/files/9216156/220516_classifier_free_guidance_with_ref_mj.pdf)

# Classifier Guidance
- **Diffusion Models Beat GANs on Image Synthesis (Dhariwalet al., 2021)**  
Classifier-Free Guidance가 있으면, 그냥 Guidance도 있지 않을까?  
그걸 다룬 것이 Dhariwalet al., 2021 논문이다.  
classifier-guidance를 통해 fidelity와 diversity를 trade-off 시킬 수 있고, 그렇게 하면 fidelity 측면에서 diffusion model이 GAN 모델 중 SOTA인 BigGAN을 이긴다는 내용이다.  

- **Diffusion model과 score-based model의 관계**  
DDPM (Denoising Diffusion Probabilistic Models) 논문의 의의는 근본 diffusion model을 제시한 것에 그치지 않는다.  
diffusion model과 score-based model의 내재적 연결성을 밝힌 것이 또다른 중요한 의의이다.  
다시말해, 원본 데이터와 timestep, epsilon을 샘플링해서 ($X_0\sim D$, timestep $t\sim T$, $\epsilon \sim N$ $X_t$를 만들고 그것으로 $\hat{\epsilon} (X_t, t)$를 output했을 때, 그 output $\hat{\epsilon}$ 가 score-function, 즉 gradients of log probability density functions이라는 것이다.  

<!-- 6p 사진 -->
![image](https://user-images.githubusercontent.com/58580193/181918422-cdcb8457-2693-44f7-971b-b865a9bbe866.png)

- **그 관계가 왜 중요한가?**  
이 점을 알고나면, classifier-guidance에서 왜 난데없이 diffusion model output $\hat{\epsilon}$ ${(z_{\lambda},c)}$에 score-function인 $\nabla_{z_{\lambda}} \log p_{\theta} (c|z_{\lambda})$ 를 더해버리는지 알 수 있다.  
위에서 언급한 관계에 의하면 사실 둘은 같은 개념이기 때문에 weighted sum (by $w$) 할 수 있었던 것이다!  
따라서 위 식의 흐름을 말로 풀어보면, 원래 diffusion model로 생성한 vector field에 classifier로 만든 vector field를 더해주어 원하는 class로 guide할 수 있고, 그 guide하는 정도는 weight $w$에 의해 조절된다고 할 수 있다. 


# Classifier-‘Free’ Guidance      
- **Classifier-‘Free’ Guidance의 필요성**  
그럼 왜 Classifier-‘free’ Guidance가 필요할까?  
classifier-guidance는 noised data로 학습한 pre-trained classfier가 필요한데, 이게 data pipeline을 복잡하게 만든다.  
또 (저자들의 주장에 따르면) noised data를 사용한 것이 adversarial attack을 일으켜 성능 저하를 일으킨다.  
그래서 이 논문은 classifier 없이 순수하게 generative model만 이용해서 guidance를 주는 방법을 택했다.  
물론 그 대가로 sampling speed가 느려질 수 있는데, 보통 classifier보다 generative model이 크기 때문에 forward가 느려서 그렇다.

<!-- 10, 11p 사진 -->
![image](https://user-images.githubusercontent.com/58580193/181918435-16dced49-88d7-4c29-bb2d-04ec706449ec.png)
![image](https://user-images.githubusercontent.com/58580193/181918446-63fba8bf-6962-46b3-b11c-33eddc4a7082.png)

- **Training & Inference in Classifier-Free Guidance**  
한 diffusion model을 (DDPM처럼 backbone은 U-net)을 train할 때  
-- class-conditional은 특정 class로 condition을 준 후 학습하고  
-- class-unconditional은 class를 random으로 섞어서 학습하고  
학습 후 inference할 때, conditional과 unconnditional의 output $\hat{\epsilon}$ ${(z_{\lambda},c)}$, $\hat{\epsilon}$ ${(z_{\lambda})}$ 을 weighted sum 한다!

- **Classifier-Free Guidance 식으로 이해하기**  
식이 보여주는 큰 흐름을 먼저 짚자면, 기존 classifier guidance식의 guidance term을 pre-trained classifier 없이 generative model의 output $\epsilon$만으로 나타낼 수 있다는 것이다.  
-- **implicit classifier**: classifier가 별도로 있는 것은 아니지만, 개념적으로 implicit한 classifier를 생각해보면 bayes rule을 이용해서 score function을 구할 수 있다. 
거기에 DDPM에서 밝힌 내재적 연관성을 얹으면 implicit classifier로부터 구한 score function은 conditional과 unconditinal  model의 output  $\epsilon_{\theta} (z_{\lambda}, c)$ 와 $\epsilon_{\theta} (z_{\lambda})$ 으로 표현된다.  
-- **Classifier-Free guidance**: 그럼 implicit classifier의 score function을 classifier guidance의 score function 식에 그대로 대입하면 $\tilde\epsilon_{\theta} (z_{\lambda}, c)$ 는 $\epsilon_{\theta} (z_{\lambda}, c)$ 와 $\epsilon_{\theta} (z_{\lambda})$ 의 Linear combination, 즉  conditional과 unconditional model outputs를 Linear combination한 값이 된다. 
그렇기에 학습해둔 model에서 sampling (inference) 할 때도 condition을 줘서 한번, condition 주지 않고 한번 output을 뽑아서 linear combination하는 것이다.  
이때 cond 와 uncond의 차이를 $w$로 scaling해주기 떄문에 weight $w$를 세게 주면 class 정보가 더 세게, 즉 condition과 uncondition의 차이가 강조되는 것으로 해석할 수 있다.
이는 곧 guidance를 세게 주는 것과 마찬가지이다.  


- **sidenote: $\epsilon$ 에 별을 붙여서 $\epsilon^*$로 나타낸 이유?**  
논문에 'If we had access to exact scores ...'라는 표현이 나온다.  
<!-- 그런데 classifier-free guidance에서는 unconditional과 conditional case가 generative model을 share하는 형태이다.   -->
Discussion 파트에 보면, 'Our diffusion models are parameterized by unconstrained neural networks and therefore their score estimates do not necessarily form conservative vector fields, unlike classifier gradients'라는 구절이 나온다.  
뭔 소린지는 좀더 봐야 제대로 이해할 것 같지만... conservative vector field가 있어야만 classifier log likelihood 같은 scalar potential이 존재한다는 것을 보장할 수 있나보다.  
classifier-guidance에서는 diffusion model과 완전히 분리된 pre-trained classifier의 gradient를 쓴다.  
그런데 classifier-free guidance에서는 unconstrained neural net을 썼기 때문에, model의 output인 score estimates가 non-conservative한 vector field이다.  
따라서 보통 classifier log likelihood 같은 scalar potential이 존재하지 않는다.  
이는 곧 위에서 언급한 $\epsilon_{\theta} (z_{\lambda}, c)$ 와 $\epsilon_{\theta} (z_{\lambda})$의 Linear combination을 classifier guided score로 가지는 classifier가 보통 존재하지 않는다는 소리이다.  
이론적으로는 그렇지만, 경험적으로 봤을 때는 implicit classifier 가정이 잘 먹히고 실험적으로도 증명되었기 때문에, 이론적 불완전성을 커버할 수 있다고 생각한 것 같다...(공부 더 필요.. 또르르)
<!-- 따라서 forward 과정에서 $\hat{\epsilon}$ ${(z_{\lambda},c)}$, $\hat{\epsilon}$ ${(z_{\lambda})}$ 를 완전히 분리해서 생각할 수 없다.   -->
<!-- 하지만 모델 $\epsilon_{\theta}$가 마치 분리된 것처럼 각각을 잘 estimate한다고 치고 implicit classifier 식을 도출하는 것 같다. -->

- **sidenote: 모든 image의 평균 image는 무엇인가?**
이건 겻님이 질문했던 내용이다.  
unconditional로 학습할 때는 class들을 random으로 섞어서 학습한다.  
그렇게 학습한 모델의 아웃풋은 모든 image의 평균 image일 텐데 그게 어떻게 생겼을까?라는 게 질문의 요지였다.  
사실상 classifier-free guidance는 특정 class의 image에서 평균 image를 빼는 방식으로 guidance를 주는 것이다.
답은 output을 직접 뽑아봐야 알겠지만, 이런 식으로 생각해본 적이 없어서 흥미로운 질문이었다,,