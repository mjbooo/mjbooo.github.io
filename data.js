// ============================================================
//  data.js  —  Edit this file to update the homepage content
// ============================================================

// ----------------------------------------------------------
// COAUTHORS
// Add a person here to make their name a clickable link
// anywhere they appear as a coauthor.
// Key must exactly match the name string used in PAPERS below.
// ----------------------------------------------------------
const COAUTHORS = {
  "Wonjun Kang":          "https://scholar.google.com/citations?user=Wonjun_Kang",
  "Byeongkeun Ahn":       null,
  "Christian Classen":    null,
  "Kevin Galim":          "https://scholar.google.com/citations?user=Kevin_Galim",
  "Seunghyuk Oh":         null,
  "Minghao Yan":          null,
  "Hyung Il Koo":         null,
  "Kangwook Lee":         "https://kangwooklee.com",
  "Ethan Ewer":           null,
  "Thomas Zeng":          null,
  "Shuibai Zhang":        null,
  "Shutong Wu":           null,
  "Daewon Chae":          null,
  "Heeju Kim":            null,
  "Jackson Kunde":        null,
  "Ying Fan":             null,
  "Jungtaek Kim":         "https://jungtaekkim.github.io",
  "Kannan Ramchandran":   "https://people.eecs.berkeley.edu/~kannanr/",
  "Dimitris Papailiopoulos": "https://papail.io",
  "Yuchen Zeng":          null,
  "Coleman Hooper":       null,
  "Yuezhou Hu":           null,
  "Nam Ik Cho":           null,
  "Minseo Kim":           null,
  "Hanbaek Lyu":          null,
  "Ziqian Lin":           null,
  "Chungpa Lee":          null,
  "Jy-yong Sohn":         null,
  "Eunbyeol Cho":         null,
  "Jiyoun Kim":           null,
  "Sungjin Park":         null,
  "Edward Choi":          "https://mp2893.com/index.html",
  "Kyunghoon Hur":        null,
  "Jinsung Yoon":         null,
  "Kyunghoon Hur":        null,
  "Jungwoo Oh":           null,
  "Junu Kim":             null,
  "Seong-Eun Moon":       null,
  "Young-Hak Kim":        null,
  "Louis Atallah":        null,
  "Sehoon Park":          null,
  "Soomin Chung":         null,
  "Yisak Kim":            null,
  "Sun-Ah Yang":          null,
  "Soie Kwon":            null,
  "Jeong Min Cho":        null,
  "Jiwon Ryu":            null,
  "Sejoong Kim":          null,
  "Jeonghwan Lee":        null,
  "Hyung Jin Yoon":       null,
  "Kwangsoo Kim":         null,
  "Hajeong Lee":          null,
  "Sunah Yang":           null,
  "Chung Hee Baek":       null,
  "Ji In Park":           null,
  "Jin Ho Hwang":         null,
  "Ji Eun Kim":           null,
  "Hyung-Jin Yoon":       null,
  "Aditya Tomar":         null,
  "Haocheng Xi":          null,
  "Rishabh Tiwari":       null,
  "Luca Manolache":       null,
  "Michael W. Mahoney":   "https://www.stat.berkeley.edu/~mmahoney/",
  "Kurt Keutzer":         null,
  "Amir Gholami":         "https://amirgholami.org",
  "Joonwon Lee":          null,
  "Jeehoon Kang":         null,
};

// ----------------------------------------------------------
// PUBLICATIONS
// Each entry:
//   id        : short label shown in "All" view, e.g. "[C5, W1]"
//   selected  : true → show in "Selected" view
//   title     : paper title
//   url       : link for the title and [Paper] button (null = no link)
//   authors   : array of author entries, each either:
//                 a string  → plain name
//                 { name, equal, advising } → equal=true adds *, advising=true adds †
//               Use "Minjae Lee" to bold yourself (handled automatically)
//   venues    : array of venue strings (rendered as separate lines)
//   award     : optional award string (e.g. "Oral (top ~1%)")
//   links     : optional extra links besides [Paper], e.g. { "Code": "https://..." }
// ----------------------------------------------------------
const PAPERS = [
  // ── 2026 ──────────────────────────────────────────────
  {
    id: "[C5, W1]",
    selected: true,
    title: "TABED: Test-Time Adaptive Ensemble Drafting for Robust Speculative Decoding in LVLMs",
    url: "https://arxiv.org/abs/2601.20357",
    authors: [
      { name: "Minjae Lee", equal: true },
      { name: "Wonjun Kang", equal: true },
      "Byeongkeun Ahn", "Christian Classen", "Kevin Galim",
      "Seunghyuk Oh", "Minghao Yan", "Hyung Il Koo", "Kangwook Lee",
    ],
    venues: [
      "EACL Findings, 2026",
      "ICLR Workshop on Scalable Optimization for Efficient and Adaptive Foundation Models, 2026",
    ],
  },
  {
    id: "[C7]",
    selected: false,
    title: "Draft-based Approximate Inference for LLMs",
    url: "https://arxiv.org/abs/2506.08373",
    authors: [
      "Kevin Galim", "Ethan Ewer", "Wonjun Kang",
      "Minjae Lee", "Hyung Il Koo", "Kangwook Lee",
    ],
    venues: ["ICLR, 2026"],
  },
  {
    id: "[C6]",
    selected: false,
    title: "ParallelBench: Understanding the Trade-offs of Parallel Decoding in Diffusion LLMs",
    url: "https://arxiv.org/abs/2510.04767",
    authors: [
      "Wonjun Kang", "Kevin Galim", "Seunghyuk Oh", "Minjae Lee",
      "Yuchen Zeng", "Shuibai Zhang", "Coleman Hooper", "Yuezhou Hu",
      "Hyung Il Koo", "Nam Ik Cho", "Kangwook Lee",
    ],
    venues: ["ICLR, 2026"],
  },
  {
    id: "[W3]",
    selected: false,
    title: "Inference-Aligned SFT for Diffusion LLMs via Group-based Trajectory Sampling",
    url: null,
    authors: [
      "Seunghyuk Oh", "Minjae Lee", "Kevin Galim", "Minseo Kim",
      "Hyung Il Koo", "Wonjun Kang", "Hanbaek Lyu", "Kangwook Lee",
    ],
    venues: ["ICLR Workshop on Deep Generative Model in Machine Learning, 2026"],
  },
  {
    id: "[J4, W2]",
    selected: false,
    title: "Transformers in the Dark: Navigating Unknown Search Spaces via Noisy Feedback",
    url: "https://openreview.net/forum?id=Transformers-in-the-Dark",
    authors: [
      "Jungtaek Kim", "Ziqian Lin", "Thomas Zeng", "Minjae Lee",
      "Chungpa Lee", "Jy-yong Sohn", "Hyung Il Koo", "Kangwook Lee",
    ],
    venues: ["TMLR", "NeurIPS Workshop on What Can('t) Transformers Do?, 2026"],
  },
  {
    id: "[J3]",
    selected: false,
    title: "UNCAGE: Contrastive Attention Guidance for Masked Generative Transformers in Text-to-Image Generation",
    url: "https://arxiv.org/abs/2508.05399",
    authors: [
      "Wonjun Kang", "Byeongkeun Ahn", "Minjae Lee", "Kevin Galim",
      "Seunghyuk Oh", "Hyung Il Koo", "Nam Ik Cho",
    ],
    venues: ["IEEE Access, 2026"],
  },

  // ── 2025 ──────────────────────────────────────────────
  {
    id: "[C4]",
    selected: false,
    title: "Generating Multi-Table Time Series EHR from Latent Space with Minimal Preprocessing",
    url: "https://arxiv.org/abs/2507.06996",
    authors: [
      "Eunbyeol Cho", "Jiyoun Kim", "Minjae Lee", "Sungjin Park", "Edward Choi",
    ],
    venues: ["NeurIPS, 2025"],
  },
  {
    id: "[C3]",
    selected: true,
    title: "VersaPRM: Multi-Domain Process Reward Model via Synthetic Reasoning Data",
    url: "https://arxiv.org/abs/2502.06737",
    authors: [
      "Thomas Zeng", "Shuibai Zhang", "Shutong Wu", "Christian Classen",
      "Daewon Chae", "Ethan Ewer", "Minjae Lee", "Heeju Kim",
      "Wonjun Kang", "Jackson Kunde", "Ying Fan", "Jungtaek Kim",
      "Hyung Il Koo", "Kannan Ramchandran", "Dimitris Papailiopoulos", "Kangwook Lee",
    ],
    venues: ["ICML, 2025"],
    award: "Oral (top ~1%)",
  },
  {
    id: "[C2]",
    selected: false,
    title: "State-offset Tuning: State-based Parameter-Efficient Fine-Tuning for State Space Models",
    url: "https://arxiv.org/abs/2503.03499",
    authors: [
      { name: "Wonjun Kang", equal: true },
      { name: "Kevin Galim", equal: true },
      "Yuchen Zeng", "Minjae Lee", "Hyung Il Koo", "Nam Ik Cho",
    ],
    venues: ["ACL, 2025"],
  },
  {
    id: "[J2]",
    selected: false,
    title: "A deep-learning algorithm using real-time collected intraoperative vital sign signals for predicting acute kidney injury after major non-cardiac surgeries: A modelling study",
    url: "https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1004566",
    authors: [
      "Sehoon Park", "Soomin Chung", "Yisak Kim", "Sun-Ah Yang",
      "Soie Kwon", "Jeong Min Cho", "Minjae Lee", "Eunbyeol Cho",
      "Jiwon Ryu", "Sejoong Kim", "Jeonghwan Lee", "Hyung Jin Yoon",
      "Edward Choi", "Kwangsoo Kim", "Hajeong Lee",
    ],
    venues: ["PLOS Medicine, 2025"],
  },

  // ── 2023 ──────────────────────────────────────────────
  {
    id: "[C1]",
    selected: true,
    title: "Rediscovery of CNN's Versatility for Text-based Encoding of Raw Electronic Health Records",
    url: "https://arxiv.org/abs/2303.08290",
    authors: [
      { name: "Eunbyeol Cho", equal: true },
      { name: "Minjae Lee", equal: true },
      "Kyunghoon Hur", "Jiyoun Kim", "Jinsung Yoon", "Edward Choi",
    ],
    venues: ["CHIL, 2023"],
    award: "Oral (top ~10 papers)",
  },
  {
    id: "[J1]",
    selected: false,
    title: "GenHPF: General Healthcare Predictive Framework for Multi-Task Multi-Source Learning",
    url: "https://arxiv.org/abs/2207.09858",
    authors: [
      "Kyunghoon Hur", "Jungwoo Oh", "Junu Kim", "Jiyoun Kim",
      "Minjae Lee", "Eunbyeol Cho", "Seong-Eun Moon",
      "Young-Hak Kim", "Louis Atallah", "Edward Choi",
    ],
    venues: ["IEEE Journal of Biomedical and Health Informatics (JBHI), 2023"],
  },

  // ── Preprints / Under Review ───────────────────────────
  {
    id: "[P1]",
    selected: false,
    title: "Privacy-preserving synthetic data enhances postoperative acute kidney injury prediction in data-scarce clinical settings: a multicenter modeling study",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5416409",
    authors: [
      "Soie Kwon", "Eunbyeol Cho", "Minjae Lee", "Yisak Kim",
      "Sunah Yang", "Jeong Min Cho", "Sehoon Park", "Chung Hee Baek",
      "Jiwon Ryu", "Sejoong Kim", "Jeonghwan Lee", "Ji In Park",
      "Jin Ho Hwang", "Ji Eun Kim", "Kwangsoo Kim", "Hyung-Jin Yoon",
      { name: "Edward Choi", advising: true },
      { name: "Hajeong Lee", advising: true },
    ],
    venues: ["Preprint, 2025"],
  },
  {
    id: "[U2]",
    selected: false,
    title: "XQuant: Breaking the Memory Wall for LLM Inference with KV Cache Rematerialization",
    url: "https://arxiv.org/abs/2508.10395",
    authors: [
      { name: "Aditya Tomar", equal: true },
      { name: "Coleman Hooper", equal: true },
      "Minjae Lee", "Haocheng Xi", "Rishabh Tiwari",
      "Wonjun Kang", "Luca Manolache", "Michael W. Mahoney",
      "Kurt Keutzer", "Amir Gholami",
    ],
    venues: ["Under Review, 2025"],
  },
];
