export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  url: string;
  codeUrl?: string;
  summary: string;
  image?: string;
  selected?: boolean;
  note?: string;
};

/**
 * EDIT THIS LIST to add, remove, or update papers.
 *
 * - Keep newest papers first.
 * - Set selected: true to feature a paper on the homepage.
 * - image and note are optional; omit either line when it is not needed.
 * - Put paper images in public/images/papers/ and use a /images/papers/... URL.
 * - The full publications page, homepage, and structured metadata update
 *   automatically from this single list.
 */
export const publications: Publication[] = [
  {
    id: 'closing-gap-text-speech',
    title: 'Closing the Gap Between Text and Speech Understanding in LLMs',
    authors: ['Santiago Cuervo', 'Skyler Seto', 'Maureen de Seyssel', 'Richard He Bai', 'Zijin Gu', 'Tatiana Likhomanenko', 'Navdeep Jaitly', 'Zakaria Aldeneh'],
    venue: 'International Conference on Learning Representations (ICLR)',
    year: 2026,
    url: 'https://iclr.cc/virtual/2026/poster/10008429',
    summary: 'Measured forgetting and cross-modal misalignment in speech-aware LLMs and identified them as drivers of the capability gap between text and speech, then introduced SALAD to narrow it through cross-modal distillation and active data selection. SALAD models rival Qwen 2.5-Omni while using over 10× less speech data.',
    image: '/images/papers/salad-gap-data-front.png',
    selected: true,
  },
  {
    id: 'layerwise-abstraction-refinement',
    title: 'LF²AR: Accounting for Layerwise Dynamics to Improve Multimodal Adaptation of Language Models',
    authors: ['Santiago Cuervo', 'Adel Moumen', 'Yanis Labrak', 'Sameer Khurana', 'Antoine Laurent', 'Mickael Rouvier', 'Phil Woodland', 'Ricard Marxer'],
    venue: 'Conference on Language Modeling (COLM)',
    year: 2026,
    url: 'https://colm.eventhosts.cc/Conferences/2026/AcceptedPapers',
    codeUrl: 'https://github.com/tiagoCuervo/interleaved_lm',
    summary: 'Studied how layerwise abstraction and refinement govern cross-modal transfer, then introduced LF²AR: late fusion, late fission, and attention residuals matched to those dynamics. The architecture outperforms substantially larger baselines and supports 1.9× faster generation through adaptive depth.',
    image: '/images/papers/lf2ar-architecture.png',
    selected: true,
    // note: 'Accepted; proceedings forthcoming',
  },
  {
    id: 'scaling-properties-speech-lms',
    title: 'Scaling Properties of Speech Language Models',
    authors: ['Santiago Cuervo', 'Ricard Marxer'],
    venue: 'Conference on Empirical Methods in Natural Language Processing (EMNLP)',
    year: 2024,
    url: 'https://aclanthology.org/2024.emnlp-main.21/',
    codeUrl: 'https://github.com/tiagoCuervo/slm_scaling',
    summary: 'Characterized the scaling of generative speech language models, relating loss to linguistic capabilities while isolating the effects of data distribution and tokenization. Speech models scale predictably, but remain markedly less efficient than text models.',
    image: '/images/papers/scaling-speech-lms.png',
    selected: true,
  },
  {
    id: 'whisper-intelligibility',
    title: 'Transfer Learning from Whisper for Microscopic Intelligibility Prediction',
    authors: ['Paul Best', 'Santiago Cuervo', 'Ricard Marxer'],
    venue: 'Interspeech',
    year: 2024,
    url: 'https://www.isca-archive.org/interspeech_2024/best24_interspeech.html',
    summary: 'Adapted Whisper representations to predict microscopic, listener-dependent intelligibility patterns, showing that pretrained speech features capture structure relevant to human perception beyond conventional signal-level metrics.',
  },
  {
    id: 'speech-foundation-intelligibility',
    title: 'Speech Foundation Models on Intelligibility Prediction for Hearing-Impaired Listeners',
    authors: ['Santiago Cuervo', 'Ricard Marxer'],
    venue: 'IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)',
    year: 2024,
    url: 'https://ieeexplore.ieee.org/document/10447907/',
    summary: 'Systematically evaluated ten frozen speech foundation models with a lightweight, listener-conditioned prediction head for binaural speech intelligibility. The resulting model was the winning submission to the Clarity Prediction Challenge 2.',
    image: '/images/papers/intelligibility-architecture-v3.png',
    selected: true,
  },
  {
    id: 'phonetic-misperceptions',
    title: 'On the Benefits of Self-supervised Learned Speech Representations for Predicting Human Phonetic Misperceptions',
    authors: ['Santiago Cuervo', 'Ricard Marxer'],
    venue: 'Interspeech',
    year: 2023,
    url: 'https://www.isca-archive.org/interspeech_2023/cuervo23_interspeech.html',
    summary: 'Showed that self-supervised speech representations improve the prediction of human phonetic misperceptions, connecting learned acoustic structure to the confusions listeners make under adverse conditions.',
  },
  {
    id: 'variable-rate-cpc',
    title: 'Variable-rate Hierarchical CPC Leads to Acoustic Unit Discovery in Speech',
    authors: ['Santiago Cuervo', 'Adrian Łańcucki', 'Ricard Marxer', 'Paweł Rychlikowski', 'Jan Chorowski'],
    venue: 'Advances in Neural Information Processing Systems (NeurIPS)',
    year: 2022,
    url: 'https://proceedings.neurips.cc/paper_files/paper/2022/hash/e2b0a30ea6a67cba58134e57348afb91-Abstract-Conference.html',
    summary: 'Introduced a variable-rate hierarchical CPC model whose linguistically informed feedback learns segment boundaries and acoustic units jointly, improving phonetic representations and unsupervised unit discovery.',
    image: '/images/papers/variable-rate-cpc.png',
    selected: true,
  },
  {
    id: 'contrastive-prediction-segmentation',
    title: 'Contrastive Prediction Strategies for Unsupervised Segmentation and Categorization of Phonemes and Words',
    authors: ['Santiago Cuervo', 'Maciej Grabias', 'Jan Chorowski', 'Grzegorz Ciesielski', 'Adrian Łańcucki', 'Paweł Rychlikowski', 'Ricard Marxer'],
    venue: 'IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)',
    year: 2022,
    url: 'https://ieeexplore.ieee.org/document/9746102',
    summary: 'Compared contrastive prediction strategies for jointly segmenting continuous speech and categorizing the discovered phoneme- and word-like units, exposing the trade-offs between boundary discovery and unit discrimination.',
  },
];

export const selectedPublications = publications.filter((publication) => publication.selected);
