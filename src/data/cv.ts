// Single source of truth for the CV page.
// Edit this file to update your CV - the page and PDF link both read from here.

export const cv = {
  // Shown on the CV page and in its page-description metadata.
  name: 'Stanley (Sidan) Wang',
  // Shown on the homepage.
  homeName: 'Stanley Wang',
  title: 'Data Scientist',
  location: 'London, UK',
  email: 'stanw.edin@gmail.com',
  links: [
    { label: 'GitHub', url: 'https://github.com/stanw-edin' },
    { label: 'LinkedIn', url: 'https://uk.linkedin.com/in/stanley-wang-1941a3157' },
  ],
  // Short teaser shown on the homepage.
  shortBio:
    "Hi! I am Stan - a data scientist from Edinburgh, Scotland. I graduated with a BSc in Computer Science from The University of Edinburgh. I also have an MSc in Speech & Language Processing.",

  // Longer bio shown in the Summary section on the CV page.
  summary: [
    "I have 8 years experience building data functions from the ground up, shipping ML models into live, consumer-facing products, and growing data talent along the way. I have led analytics strategies alongside commercial and product leadership, and am comfortable moving between classical ML, deep learning, experimentation, and production pipelines. I am happiest when turning messy data problems into decisions people can trust and act on.",
  ],

  experience: [
    {
      company: 'KoffeeCup',
      companyUrl: 'https://www.koffeecup.net/',
      description:
        'KoffeeCup is an award-winning digital production studio working across VR, AR, experiential, and DOOH, with original titles including Hoomanz! and partnerships on Meta Horizon. I joined as the first data hire, defining the analytics strategy from scratch and embedding data thinking across a fast-moving studio where priorities shift weekly. Key stakeholders include studio leadership, game designers, engineering, live-ops, marketing, and external partners at Meta.',
      roles: [
        {
          role: 'Senior Data Scientist',
          period: '2024 - Present',
          points: [
            'Partnered with studio leads to shape game goals, KPI frameworks, and an end-to-end analytics strategy across VR, desktop, and mobile titles.',
            'Line-managed a data analyst, setting direction, coaching on technical and stakeholder work, and supporting their development.',
            'Embedded with developers through live cycles to design instrumentation, implement event tracking, and QA data quality, ensuring metrics are trusted from day one.',
            'Turned gameplay and commercial data into decision-ready insight on DAU, MAU, retention, engagement, session length, and conversion, directly guiding product, live-ops, and marketing priorities.',
            'Built predictive models supporting roadmap planning, target-setting, and post-release forecasting, and communicated the measured impact of updates and releases to leadership.',
            'Delivered dashboards, automated KPI monitoring, and fast-turnaround BI and financial analysis, while keeping privacy, consent, and legal requirements front and centre.'
          ],
        },
      ],
    },
    {
      company: 'SEGA Europe',
      companyUrl: 'https://www.sega.co.uk/',
      description:
        'SEGA Europe is the EMEA arm of SEGA Corporation, publishing and localising franchises including Sonic the Hedgehog, Total War, Yakuza, and Football Manager. I joined in the data team in 2018 as the first data scientist and played a pivotal role in building a scalable data strategy across the business. Promotion to Senior Data Scientist in 2021 shifted my focus toward forecasting, generative AI, and cross-functional ML integration. Core stakeholders spanned Commercial, Operations, Marketing, Product, and studio teams across EMEA.',
      roles: [
        {
          role: 'Senior Data Scientist',
          period: '2021 - 2024',
          points: [
            'Led cross-functional integration of AI and ML across the business, enabling a data-driven operating model and improving decision-making in commercial, marketing, and product functions.',
            'Built generative AI workflows to produce image assets and concept art variations, accelerating style exploration for artists; trained models to recognise and replicate distinctive visual themes across SEGA titles. (This work was showcased at Data+AI Summit 2024).',
            'Developed and deployed recommendation systems for storefront and in-game surfaces, predicting next-best purchase and improving cross-title discovery.',
            'Mentored a University of West London summer intern and line-managed a junior data scientist, providing technical direction and performance support.'
          ],
        },
        {
          role: 'Data Scientist',
          period: '2018 - 2021',
          points: [
            'Created predictive sales forecasting pipelines that improved inventory planning and optimised marketing spend.',
            'Developed unsupervised clustering models to identify distinct player cohorts, informing personalised marketing and feature prioritisation across titles including Two Point Hospital and the Football Manager series.',
            'Implemented NLP workflows on player reviews to track sentiment trends and surface key themes impacting player experience.'
          ],
        },
      ],
    },
  ],
  education: [
    {
      qualification: 'MSc Speech and Language Processing',
      institution: 'University of Edinburgh',
      period: '2017',
      grade: 'Distinction',
      thesis: 'Modelling Biological Systems as Communicating Processes using Continuous-Pi Calculus',
    },
    {
      qualification: 'BSc Computer Science',
      institution: 'University of Edinburgh',
      period: '2016',
      grade: 'First Class',
      thesis: 'Representation Learning for Emotion Recognition',
    },
  ],
  // Shown above the Public Speaking list.
  publicSpeakingIntro:
    'Regular speaker on games data, building data culture in studios, and responsible generative AI.',

  publicSpeaking: [
    {
      title: 'Unlocking Game Data @ Koffeecup',
      event: 'Develop:Brighton',
      period: '2025',
      points: ['Lessons from building a data-informed culture at KoffeeCup and its role in developing Hoomanz.'],
    },
    {
      title: 'Unlocking Game Data @ Koffeecup',
      event: 'Gamescom Latam, São Paulo',
      period: '2025',
      points: ['An indie-focused take on going from "no data" to a lightweight, scalable analytics setup.'],
    },
    {
      title: 'Crafting Worlds: Enhancing Creative Storyboarding with AI at SEGA',
      event: 'Data+AI Summit, San Francisco',
      period: '2024',
      points: [
        "Partnered with Databricks on responsible generative AI in concept art, showcasing a studio-safe image-generation workflow trained only on SEGA's own data.",
      ],
    },
    {
      title: 'AI and Data Science in Computer Gaming',
      event: 'RSS Merseyside Local Group, Liverpool',
      period: '2023',
      points: ['Real-world examples of using analytics to improve games and build a data-driven culture.'],
    },
    {
      title: 'Data Science at SEGA Europe',
      event: 'Big Data London',
      period: '2019',
      points: ['Establishing data science foundations, from sales forecasting to behavioural clustering on Two Point Hospital.'],
    },
    {
      title: 'Guest Lecturer',
      event: 'University of West London',
      period: '2018 - 2024',
      points: ['Recurring guest lectures on applied data science and machine learning in the games industry.'],
    },
  ],
  skills: [
    {
      category: 'Languages & Frameworks',
      items: [
        'Python',
        'Apache Spark',
        'scikit-learn',
        'TensorFlow',
        'XGBoost & LightGBM',
        'PyTorch',
        'Keras',
        'Pandas',
        'NumPy',
        'Matplotlib', 
        'Seaborn',
        'Plotly',
        'SQL',
        'APIs'],
    },
    {
      category: 'ML & Analytics',
      items: [
        'Predictive Modelling',
        'Forecasting',
        'Recommender Systems',
        'Unsupervised Learning',
        'NLP',
        'Sentiment Analysis',
        'Deep Learning',
        'LLMs',
        'Experimentation',
        'Statistics',
      ],
    },
    {
      category: 'Data Engineering & Production',
      items: [
        'ML Pipelines',
        'Big Data Processing',
        'Data Modelling',
        'Event Instrumentation',
        'MLFlow',
        'Delta Lake',
        'Kubernetes',
        'Docker',
        'CI/CD'
      ],
    },
    {
      category: 'Platforms & BI',
      items: [
        'Databricks',
        'GCP',
        'Azure',
        'AWS',
        'Tableau',
        'Power BI'
      ],
    },
    {
      category: 'Leadership & Soft Skills',
      items: [
        'KPI Frameworks',
        'Effective Communication',
        'Line Management',
        'Data Storytelling',
        'Critical Thinking',
        'Stakeholder Management',
        'Cross-Functional Collaboration'
      ],
    },
  ],

  // Drop a real PDF at public/cv/cv.pdf and this link will work as-is.
  pdfPath: '/cv/cv.pdf',
};