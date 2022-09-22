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




- **Markov Chain**  
<!-- 3p 사진 --> 
$Q_{t+1}$: t 시점에 state $i$에 있을 때, 한 step 이후 state $j$로 움직일 확률을 $(i, j)$ element로 나타낸 matrix  
e.g., state 3에서 state 2로 transition할 확률은  $Q_{t+1}$의 (3,2)에 위치한 element이므로 0.3이다. 

- **1-step Forward**  
<!-- 4p 사진 -->  
$K$: 특정 시점에서 가질 수 있는 state의 개수(e.g., 단어라면 vocab수, MNIST라면 10 (0..9))  
$\mathbf{x_t}$ : t 시점의 state를 나타내는 one-hot row vector(e.g., 위 예시의 경우 $x_t=[0, 0, 1]$)  

$\mathbf{p}$에 비례해서 Multinomial sampling한다. 

- **t-step Forward** 
Property 1에서 보듯, DDPM에서는 original data $x_0$를 점차 corrupt시킬 필요 없이, 한번에 $x_t$를 sampling할 수 있었다.
마찬가지로 $Q_t$의 cumulative product $\bar{Q_t}$를 구해서 $\mathbf{p}$를 구하여 multinomial sampling할 수 있다.



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