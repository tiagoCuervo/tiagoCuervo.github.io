/**
 * EDIT THIS FILE for profile details, homepage copy, page introductions,
 * navigation labels, and footer text. Presentation and animation settings live
 * separately in ../config/site.ts.
 */
export const siteContent = {
  profile: {
    name: 'Santiago Cuervo',
    role: 'PhD Candidate in Computer Science',
    affiliation: 'Laboratoire d’Informatique et Systèmes (LIS, CNRS)',
    email: 'santiago.cuervo@lis-lab.fr',
    scholar: 'https://scholar.google.com/citations?user=ws1qbwIAAAAJ&hl=en',
    github: 'https://github.com/tiagoCuervo',
    websiteUrl: 'https://tiagocuervo.github.io',
    cvUrl: '/cv/',
    portrait: '/images/santiago-cuervo-v3.png',
    portraitAlt: 'Portrait of Santiago Cuervo',
  },

  metadata: {
    title: 'Santiago Cuervo — Speech Language Models & Multimodal AI',
    description:
      'Research on speech language models, self-supervised learning, scaling, and cross-modal adaptation of language models to speech.',
    knowsAbout: [
      'speech language models',
      'multimodal AI',
      'self-supervised learning',
      'large language models',
    ],
  },

  navigation: {
    writing: 'Writing',
    publications: 'Publications',
    cv: 'CV',
  },

  home: {
    // Set to true to show the second introductory paragraph on the homepage.
    showSupportingIntroduction: false,
    supporting:
      'My work spans self-supervised speech representation learning, scaling laws for generative speech language models, and cross-modal adaptation of text-trained language models.',
    // Set to true to show the standalone Research section on the homepage.
    showResearchSection: false,
    researchHeading: 'Research',
    research:
      'My research moves between bottom-up representation learning and top-down transfer from language models. I am particularly interested in what predictable scaling can solve, what it cannot, and how architectural and training choices can close the remaining text–speech understanding gap.',
    writingHeading: 'Perspectives',
    // Maximum number of the latest published articles shown on the homepage.
    writingLimit: 3,
    writingLink: 'All writing →',
    publicationsHeading: 'Selected publications',
    publicationsLink: 'Complete publication list →',
  },

  publicationsPage: {
    title: 'Publications',
    eyebrow: 'Research record',
    description:
      'Publications by Santiago Cuervo on speech language modeling, representation learning, and multimodal AI.',
    introduction:
      'Peer-reviewed and accepted work',
  },

  writingPage: {
    title: 'Writing',
    eyebrow: 'Essays and research notes',
    description:
      'Long-form writing by Santiago Cuervo about speech, language models, scaling, and multimodal AI.',
    introduction:
      'Longer arguments, visual explanations, and notes from research in speech and language modeling.',
    articleEyebrow: 'Research perspective',
  },

  notFoundPage: {
    title: 'Page not found',
    description: 'The requested page could not be found.',
    heading: 'Off the map.',
    message: 'That page does not exist, or it may have moved.',
    link: 'Return home →',
  },

  footer: {
    tagline: 'Speech and Multimodal ML Researcher.',
  },
} as const;
