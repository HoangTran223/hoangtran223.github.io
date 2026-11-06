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
  author    = {Le, Tue and Tran, Hoang and Tran, Quyen and Ngo, Linh and Harandi, Mehrtash and Le, Trung},
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
    orthosam: `@misc{vuong2026orthosam,
  title  = {{OrthoSAM}: Orthogonal Perturbations for Sharpness-Aware Minimization},
  author = {Vuong, Hoang Tran and Truong, Minh-Phuc and Le, Tue and Dam, Tuan Quang and Tran, Son N. and Le, Trung},
  year   = {2026},
  note   = {Under review at ICLR 2027}
}`,
    rollouts: `@misc{vuong2026rollouts,
  title = {Not All Rollouts Are Negative: Adaptive Polarity in Self-Play Fine-Tuning},
  year  = {2026},
  note  = {Under review at ACL 2027}
}`,
    "reasoning-survey": `@misc{le2026reasoning,
  title  = {Beyond the Training Distribution: A Survey of Reasoning Generalization in Large Language Models},
  author = {Le, Tue and Le, Van Dong and Luu, Hai Dang and Duan, Bui Duc and Vuong, Hoang Tran and Nguyen, Huy Huu and Van, Linh Ngo and Dinh, Ngoc-Thanh and Tran, Son N. and Nguyen, Thien Huu and Le, Trung},
  year   = {2026},
  url    = {https://github.com/tue09/awesome-reasoning-generalization/blob/main/full_paper/paper.pdf},
  note   = {Under review at ACL 2027}
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

  document.querySelectorAll("[data-bib]").forEach((btn) => {
    const panel = document.createElement("pre");
    panel.className = "bibtex";
    panel.hidden = true;
    panel.textContent = BIBS[btn.dataset.bib] || "";
    const host = btn.closest("p, .pub-card__meta") || btn.parentElement;
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
