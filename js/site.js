(() => {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");

  function apply(theme) {
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    if (toggle) {
      toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
    try {
      localStorage.setItem("site-theme", theme);
    } catch (error) {
      /* private browsing */
    }
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  const BIBS = {
    survey: `@inproceedings{vuong-etal-2026-survey,
  title     = {A Survey on Knowledge Distillation of Vision-Language Models},
  author    = {Vuong, Hoang Tran and Dao, Dat and Chi, Pham Khanh and Truong, Minh-Phuc and Tran, Quyen and Van, Linh Ngo and Nguyen, Thien Huu and Do, Thanh-Toan and Le, Trung},
  booktitle = {Findings of the Association for Computational Linguistics: EMNLP 2026},
  month     = oct,
  year      = {2026},
  address   = {Budapest, Hungary},
  publisher = {Association for Computational Linguistics},
  pages     = {3806--3846},
  doi       = {10.18653/2026.findings-emnlp.180},
  url       = {https://aclanthology.org/2026.findings-emnlp.180/}
}`,
    dispat: `@inproceedings{vuong2026dispat,
  title     = {{$f$-Divergence Self-Play for Tabular Anomaly Detection via Large Language Models}},
  author    = {Vuong, Hoang Tran and Van, Linh Ngo and Nguyen, Dang and Nguyen, Thin and Nguyen, Phuoc and Harandi, Mehrtash and Le, Trung},
  booktitle = {International Conference on Machine Learning},
  year      = {2026},
  url       = {https://icml.cc/virtual/2026/poster/63240}
}`,
    "mcw-kd": `@inproceedings{vuong2026mcwkd,
  title     = {{MCW-KD}: Multi-Cost {Wasserstein} Knowledge Distillation for Large Language Models},
  author    = {Vuong, Hoang Tran and Le, Tue and Tran, Quyen and Van, Linh Ngo and Le, Trung},
  booktitle = {Proceedings of the {AAAI} Conference on Artificial Intelligence},
  volume    = {40},
  number    = {39},
  pages     = {33332--33340},
  year      = {2026},
  doi       = {10.1609/aaai.v40i39.40619},
  url       = {https://ojs.aaai.org/index.php/AAAI/article/view/40619}
}`,
    swift: `@inproceedings{le2025swift,
  title     = {Token-Level Self-Play with Importance-Aware Guidance for Large Language Models},
  author    = {Le, Tue and Vuong, Hoang Tran and Tran, Quyen and Ngo, Linh and Harandi, Mehrtash and Le, Trung},
  booktitle = {Advances in Neural Information Processing Systems},
  volume    = {38},
  pages     = {133933--133968},
  year      = {2025},
  doi       = {10.52202/085713-4030},
  url       = {https://neurips.cc/virtual/2025/loc/san-diego/poster/120030}
}`,
    msoo: `@inproceedings{le-etal-2025-multi,
  title     = {Multi-Surrogate-Objective Optimization for Neural Topic Models},
  author    = {Le, Tue and Vuong, Hoang Tran and Nguyen, Tung and Van, Linh Ngo and Sang, Dinh Viet and Le, Trung and Nguyen, Thien Huu},
  booktitle = {Findings of the Association for Computational Linguistics: EMNLP 2025},
  month     = nov,
  year      = {2025},
  address   = {Suzhou, China},
  publisher = {Association for Computational Linguistics},
  pages     = {135--151},
  doi       = {10.18653/v1/2025.findings-emnlp.9},
  url       = {https://aclanthology.org/2025.findings-emnlp.9/}
}`,
    hicot: `@inproceedings{vuong-etal-2025-hicot,
  title     = {{HiCOT}: Improving Neural Topic Models via Optimal Transport and Contrastive Learning},
  author    = {Vuong, Hoang Tran and Le, Tue and Vu, Tu and Nguyen, Tung and Van, Linh Ngo and Dinh, Sang and Nguyen, Thien Huu},
  booktitle = {Findings of the Association for Computational Linguistics: ACL 2025},
  month     = jul,
  year      = {2025},
  address   = {Vienna, Austria},
  publisher = {Association for Computational Linguistics},
  pages     = {13894--13920},
  doi       = {10.18653/v1/2025.findings-acl.715},
  url       = {https://aclanthology.org/2025.findings-acl.715/}
}`,
    "sam-ntm": `@inproceedings{nguyen-etal-2025-sharpness,
  title     = {Sharpness-Aware Minimization for Topic Models with High-Quality Document Representations},
  author    = {Nguyen, Tung and Le, Tue and Vuong, Hoang Tran and Nguyen, Quang Duc and Nguyen, Duc Anh and Van, Linh Ngo and Dinh, Sang and Nguyen, Thien Huu},
  booktitle = {Proceedings of the 2025 Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers)},
  month     = apr,
  year      = {2025},
  address   = {Albuquerque, New Mexico},
  publisher = {Association for Computational Linguistics},
  pages     = {4507--4524},
  doi       = {10.18653/v1/2025.naacl-long.231},
  url       = {https://aclanthology.org/2025.naacl-long.231/}
}`,
    core: `@misc{vuong2026core,
  title         = {{CORE}: Coarse-to-Fine Search with Context Management for Deep Research},
  author        = {Vuong, Hoang Tran and Pham, Ngoc Quan and Bui, Hung and Porikli, Fatih and Nguyen, Dat Quoc},
  year          = {2026},
  eprint        = {2611.07859},
  archivePrefix = {arXiv},
  primaryClass  = {cs.CL},
  url           = {https://arxiv.org/abs/2611.07859v1},
  note          = {Under review at NAACL 2027}
}`,
    hicolt: `@article{khanh2026hicolt,
  title   = {A Framework for Neural Topic Modeling using Hierarchical Clustering and Contrastive Learning with Optimal Transport},
  author  = {Khanh, Chi Pham and Vuong, Hoang Tran and Viet, Sang Dinh and Van, Linh Ngo},
  journal = {Neurocomputing},
  volume  = {670},
  pages   = {132530},
  year    = {2026},
  doi     = {10.1016/j.neucom.2025.132530},
  url     = {https://www.sciencedirect.com/science/article/abs/pii/S0925231225032023?via=ihub}
}`,
  };

  const ABS = {
    dispat: `Anomaly detection in tabular data poses significant challenges due to heterogeneous feature types—mixing numerical, categorical, and textual attributes, which complicate learning meaningful representations of normality. Recent work has applied large language models (LLMs) to this problem by serializing table rows as text sequences, yet these approaches rely on one-shot supervised fine-tuning that offers limited signal to tighten the model’s description of normality. We propose DiSPaT, a self-play fine-tuning framework that strengthens the model’s understanding of normal data. Building on the theoretical foundation of <em>f</em>-divergence minimization, we derive a tight approximation connecting our training objective to reducing the distributional gap between real normal data and model-generated samples. DiSPaT operates through an alternating optimization: at each iteration, the current policy generates synthetic samples that serve as pseudo-anomalies, while a critic discriminator learns to distinguish these from real normal samples; this signal drives policy updates that progressively align the model distribution with the true normal-data distribution. Extensive experiments on diverse benchmarks demonstrate that DiSPaT consistently outperforms prior LLM-based methods, deep learning approaches, and classical unsupervised detectors for tabular anomaly detection.`,
    "mcw-kd": `Knowledge distillation (KD) is widely recognized as an effective approach for compressing large language models (LLMs). However, standard KD methods often falter when confronted with architectural or tokenization heterogeneity between teacher and student models, which creates a mismatch in their representations. While Optimal Transport (OT) provides a promising solution to align these representations, most OT-based methods rely on a single cost function, which isn’t enough to capture the multifaceted discrepancies between models with distinct designs. To address this limitation, we introduce Multi-Cost Wasserstein Knowledge Distillation (MCW-KD), a novel framework that enhances KD by simultaneously optimizing several cost functions within a unified OT formulation. MCW-KD employs specific cost matrices to effectively align both the final hidden states and the output distributions of the models. We also provide a rigorous theoretical foundation for the proposed Multi-Cost Wasserstein Distance, ensuring both mathematical validity and computational ability. Extensive experiments on instruction-following datasets demonstrate that MCW-KD significantly improves student model performance compared to state-of-the-art KD baselines, especially when teacher and student models have different tokenizers.`,
    swift: `Leveraging the power of Large Language Models (LLMs) through preference optimization is crucial for aligning model outputs with human values. Direct Preference Optimization (DPO) has recently emerged as a simple yet effective method by directly optimizing on preference data without the need for explicit reward models. However, DPO typically relies on human-labeled preference data, which can limit its scalability. Self-Play Fine-Tuning (SPIN) addresses this by allowing models to generate their own rejected samples, reducing the dependence on human annotations. Nevertheless, SPIN uniformly applies learning signals across all tokens, ignoring the fine-grained quality variations within responses. As the model improves, rejected samples increasingly contain high-quality tokens, making the uniform treatment of tokens suboptimal. In this paper, we propose SWIFT (Self-Play Weighted Fine-Tuning), a fine-grained self-refinement method that assigns token-level importance weights estimated from a stronger teacher model. Beyond alignment, we also demonstrate that SWIFT serves as an effective knowledge distillation strategy by using the teacher not for logits matching, but for reward-guided token weighting. Extensive experiments on diverse benchmarks and settings demonstrate that SWIFT consistently surpasses both existing alignment approaches and conventional knowledge distillation methods.`,
    survey: `Vision-language models (VLMs) achieve strong multimodal performance but remain expensive to deploy. Knowledge distillation (KD) is an effective approach for compressing these models and transferring their capabilities to more efficient student models. While KD for large language models (LLMs) is already well surveyed, no existing work provides systematic coverage of KD for VLMs, where the addition of a visual modality introduces challenges that text-only distillation does not face. This paper presents the first dedicated survey of knowledge distillation for vision-language models. We propose a unified taxonomy that organizes methods along three orthogonal views: knowledge type, teacher accessibility, and structural compatibility, use it to organize methods across major VLM distillation settings. We also survey the associated datasets and evaluation protocols, identify open challenges and outline directions for future research. We further maintain a GitHub repository at https://github.com/HoangTran223/Awesome-Knowledge-Distillation-of-VLMs to compile all surveyed papers, which we will actively update.`,
    hicot: `Recent advances in neural topic models (NTMs) have improved topic quality but still face challenges: weak document-topic alignment, high inference costs due to large pretrained language models (PLMs), and limited modeling of hierarchical topic structures. To address these issues, we introduce HiCOT (Hierarchical Clustering and Contrastive Learning with Optimal Transport for Neural Topic Modeling), a novel framework that enhances topic coherence and efficiency. HiCOT integrates Optimal Transport to refine document-topic relationships using compact PLM-based embeddings, captures semantic structure of the documents. Additionally, it employs hierarchical clustering combine with contrastive learning to disentangle topic-word and topic-topic relationships, ensuring clearer structure and better coherence. Experimental results on multiple benchmark datasets demonstrate HiCOT’s superior effectiveness over existing NTMs in topic coherence, topic performance, representation quality, and computational efficiency.`,
    msoo: `Neural topic modeling has substantially improved topic quality and document topic distribution compared to traditional probabilistic methods. These models often incorporate multiple loss functions. However, the disparate magnitudes of these losses can make hyperparameter tuning for these loss functions challenging, potentially creating obstacles for simultaneous optimization. While gradient-based Multi-objective Optimization (MOO) algorithms offer a potential solution, they are typically applied to shared parameters in multitask learning, hindering their broader adoption, particularly in Neural Topic Models (NTMs). Furthermore, our experiments reveal that naïve MOO applications on NTMs can yield suboptimal results, even underperforming compared to implementations without the MOO mechanism. This paper proposes a novel approach to integrate MOO algorithms, independent of hard-parameter sharing architectures, and effectively optimizes multiple NTMs loss functions. Comprehensive evaluations on widely used benchmark datasets demonstrate that our approach significantly enhances baseline topic model performance and outperforms direct MOO applications on NTMs.`,
    "sam-ntm": `Recent advanced frameworks in topic models have significantly enhanced the performance compared to conventional probabilistic approaches. Such models, mostly constructed from neural network architecture together with other advanced techniques such as contextual embedding, optimal transport distance and pretrained language model, etc. have effectively improved the topic quality and document topic distribution. Despite the improvements, these methods lack considerations of effective optimization for complex objective functions that contain log-likelihood and additional regularization terms. In this study, we propose to apply an efficient optimization method to improve the generalization and performance of topic models. Our approach explicitly considers the sharpness of the loss landscape during optimization, which forces the optimizer to choose directions in the parameter space that lead to flatter minima, in which the models are typically more stable and robust to small perturbations in the data. Additionally, we propose an effective strategy to select the flatness region for parameter optimization by leveraging the optimal transport distance between doc-topic distributions and doc-cluster proportions, which can effectively enhance document representation. Experimental results on popular benchmark datasets demonstrate that our method effectively improves the performance of baseline topic models.`,
    hicolt: `Recent advances in Neural Topic Models (NTMs) have significantly improved topic quality; however, several key issues remain. These problems include poor alignment between document representations and topic distributions, lack of global structural consistency, and the absence of a clear, hierarchical structure in the discovered topics. To address these limitations, we introduce HiCOLT (Hierarchical Clustering and Contrastive Learning with Optimal Transport for Neural Topic Modeling), a novel and modular framework that integrates hierarchical clustering and multi-level contrastive learning with optimal transport—designed to enhance the representational and structural capabilities of modern NTMs. As a general-purpose framework, it can easily adapt to various existing topic modeling architectures, improving their semantic alignment and structure through two main components. First, HiCOLT introduces an approach that uses Optimal Transport to align topic distributions with document representations produced by a pre-trained language model (PLM). This approach leverages PLM knowledge and enhances global structural consistency. Second, we develop a hierarchical contrastive module, which first dynamically groups a hierarchical structure among topics and then systematically refines it using a triple-level contrastive learning loss. Differing from prior flat contrastive learning in NTMs, this multi-level strategy explicitly models and enforces hierarchical relationships at the intra-cluster, inter-cluster, and document–topic granularities, addressing a critical gap in existing models that often yield flat topic structures. This approach thereby better captures the inherent hierarchical nature of topics in natural language, improves topic coherence and inter-group separation, and directly addresses the semantic gap between documents and their topic distributions. Through extensive experiments on multiple benchmark datasets, we show that adding HiCOLT to several well-known NTMs leads to significant improvements across a wide range of evaluation metrics. Together, these results demonstrate the flexibility and effectiveness of HiCOLT and its potential to set a new standard in neural topic modeling.`,
    orthosam: `Sharpness-Aware Minimization (SAM) improves generalization by minimizing the worst-case loss within a local neighborhood, encouraging the optimizer to find flatter minima. However, standard SAM treats neural network weights as flattened vectors and applies unconstrained perturbations in the Euclidean space, ignoring the intrinsic matrix structure of modern neural networks. As a result, the adversarial perturbation can become dominated by a few large singular directions, while other important directions receive much less attention. In this work, we propose OrthoSAM, a matrix-aware optimization method based on the idea that flatness should be explored more evenly across different directions. Instead of using unrestricted perturbations, OrthoSAM constrains perturbations to a structured manifold with orthogonality properties, reducing the imbalance caused by dominant singular values. This encourages a more uniform exploration of the local loss landscape across matrix directions. To make the method efficient in practice, we use the Newton–Schulz iteration to obtain approximately orthogonal perturbations without requiring expensive singular value decomposition (SVD). Extensive experiments on multiple architectures and datasets show that OrthoSAM consistently improves generalization and provides stronger robustness to label noise.`,
    core: `Deep research agents answer complex questions through repeated search. They rely on a harness that runs their tool calls and returns evidence to their context. This creates a trade-off: Search works best over long passages, which give enough context for reliable semantic matching. But the returned evidence should be short, because every observation stays in the agent’s context for the rest of the trajectory. We introduce CORE, a training-free harness that combines coarse-to-fine search with context management. CORE retrieves passages with a dense retriever. It then reuses the token-level similarities from a late-interaction reranker to return only the most relevant snippet from each passage. Context management lets the agent expand the context around sources it has already retrieved and suppresses repeated snippets. In controlled closed-search comparisons with the Tongyi DeepResearch and OpenResearcher harnesses, CORE achieves state-of-the-art answer accuracy and evidence recall across three agent models and three benchmarks (BrowseComp-Plus, BrowseComp-Wikipedia and BrowseComp-Plus<sub>CM</sub>), on corpora containing up to 553M documents.`,
    rollouts: `Self-Play Fine-Tuning (SPIN) adapts large language models with limited human data by iteratively training on real responses and synthetic responses generated by the model itself. However, SPIN assigns every synthetic response the same negative role. As the model improves, many of these responses already agree with the data, and suppressing them together with responses that remain far from the data becomes suboptimal. To address this limitation, we propose Adaptive Polarity Self-Play (APSP), which adaptively assigns this role once for each prompt rather than fixing it in advance. When the current policy is close to the data distribution, the synthetic response is promoted; otherwise, the negative role is kept. As a result, responses that already agree with the data reinforce the model, while those still far from the data remain suppressed. Extensive experiments across the Open LLM Leaderboard, multi-turn conversation, and open-ended queries demonstrate that APSP consistently surpasses existing self-play methods.`,
    "reasoning-survey": `Large language models (LLMs) have achieved strong performance on mathematical, logical, and scientific reasoning tasks. However, this progress is commonly measured on benchmarks that remain close to the distributions encountered during training. Small changes in notation or problem structure, as well as deeper reasoning or new domains, can lead to substantial performance degradation, raising a central question: when and how can LLMs generalize their reasoning beyond their training distributions? This paper presents a comprehensive survey of reasoning generalization in LLMs. We organize existing work into four complementary pillars: (1) training methods that encourage transferable reasoning, (2) inference strategies that adapt computation at test time, (3) architectural designs that support reusable operations, and (4) analyses that characterize when and why generalization succeeds or fails. Building on this taxonomy, we compare the assumptions, evaluation settings, and generalization claims of representative approaches. We further summarize the main empirical findings and theoretical results, and discuss the evaluation practices and open challenges that shape this emerging research direction.`,
    impact: `Knowledge distillation is an effective approach for compressing large language models, but most existing methods assume that teacher and student share the same tokenizer. When tokenizers differ, the same text is segmented differently, making token-level transfer unstable; differences in model depth further complicate intermediate-layer supervision. Existing cross-tokenizer distillation methods have made important progress by aligning output distributions or token sequences, but they still overlook how intermediate representations should be transferred across models. In this work, we propose IMPACT, an importance-aware objective for cross-tokenizer distillation. IMPACT first learns a vocabulary projection, initialized from overlapping vocabulary items, to map teacher representations into the student space. It then identifies informative teacher layers using Block Influence and reweights their supervision accordingly. Finally, it aligns each student token with the teacher’s contextual update over the same raw-text interval through boundary-interpolated prefix increment alignment. The resulting objective is architecture-agnostic and can be integrated with existing cross-tokenizer distillation methods. Extensive experiments on instruction-following benchmarks show that IMPACT yields consistent improvements across datasets, teacher-student pairs, enabling more effective distillation for diverse LLM families.`,
  };

  document.querySelectorAll("[data-bib]").forEach((btn) => {
    const panel = document.createElement("pre");
    panel.className = "bibtex";
    panel.hidden = true;
    panel.textContent = BIBS[btn.dataset.bib] || "";
    const host = btn.closest(".paper__actions, .pub-card__meta, p") || btn.parentElement;
    host.insertAdjacentElement("afterend", panel);

    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      panel.hidden = open;
    });
  });

  document.querySelectorAll("[data-abs]").forEach((btn) => {
    const panel = document.createElement("p");
    panel.className = "abstract";
    panel.hidden = true;
    panel.innerHTML = ABS[btn.dataset.abs] || "";
    const host = btn.closest(".paper__actions, .pub-card__meta, p") || btn.parentElement;
    host.insertAdjacentElement("afterend", panel);

    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      panel.hidden = open;
    });
  });

  const follow = document.getElementById("follow-btn");
  const links = document.getElementById("author-links");
  if (follow && links) {
    follow.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      follow.setAttribute("aria-expanded", String(open));
    });
  }
})();
