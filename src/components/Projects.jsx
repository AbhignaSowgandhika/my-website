export function Projects() {
  const projects = [
    {
      title: 'Multiformat Document Chatbot',
      description:
        'LangChain + FAISS-powered Q&A chatbot that handles PDF, Excel, and PPT. Vector search, semantic retrieval, and Streamlit UI.',
      tech: ['Python', 'LangChain', 'FAISS', 'Streamlit'],
      link: 'https://github.com/AbhignaSowgandhika/pdf-qa-genai',
    },
    {
      title: 'Resume Critique Assistant',
      description:
        'Uses GPT to review resumes vs job descriptions. Structured prompt engineering with feedback scoring and tips.',
      tech: ['Python', 'OpenAI API', 'Streamlit', 'spaCy'],
      link: 'https://github.com/AbhignaSowgandhika/resume-critique-gpt',
    },
    {
      title: 'High-Concurrency E-Commerce Cart System',
      description:
        'Java-based cart service using Redis and Docker, handling 500+ concurrent users with 99.9% uptime under stress tests.',
      tech: ['Java', 'Spring Boot', 'Redis', 'Docker'],
      link: 'https://github.com/AbhignaSowgandhika/pdf-qa-genai',
    },
    {
      title: 'TubePulse: YouTube Analytics on AWS',
      description:
        'Serverless ETL pipeline on AWS for analyzing YouTube metrics. Automated using Glue, Lambda, and visualized in Power BI.',
      tech: ['AWS Lambda', 'Glue', 'Athena', 'QuickSight', 'Power BI'],
      link: 'https://github.com/AbhignaSowgandhika/TubePulse-CloudComputing-Project-Fall2023',
    },
    {
      title: 'Job Hiring Portal',
      description:
        'Full-stack job platform connecting seekers and recruiters. Built with PHP and Java backend with an intuitive front end.',
      tech: ['PHP', 'Java', 'CSS', 'JavaScript', 'HTML'],
      link: 'https://github.com/AbhignaSowgandhika/JobHiringPortal-DBMT-Project-Fall2023',
    },
    {
      title: 'Visual Cyber Threat Analysis',
      description:
        'Used PCA and t-SNE to visualize network intrusion patterns in KDD Cup 1999 dataset, offering threat intelligence insights.',
      tech: ['Python', 'Scikit-learn', 'PCA', 't-SNE'],
      link: 'https://github.com/AbhignaSowgandhika/VisualCyberThreatAnalysis-Visualization-Project-Fall2023',
    },
    {
      title: 'Outcome Prediction for Austin Animal Shelter',
      description:
        'Built predictive models using Naive Bayes, k-NN, Decision Tree, and Random Forest to forecast animal shelter outcomes.',
      tech: ['Python', 'Jupyter', 'Scikit-learn'],
      link: 'https://github.com/AbhignaSowgandhika/OutcomePrediction-MachineLearning-Project-Spring2024',
    },
    {
      title: 'Video Super Resolution',
      description:
        'Compared pixel-loss vs perceptual-loss training for video upscaling. Focused on improving perceptual quality metrics.',
      tech: ['Python', 'TeX', 'Jupyter Notebook'],
      link: 'https://github.com/AbhignaSowgandhika/VideoSuperResolution-DeepLearning-Project-Spring2024',
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#1a0023] text-white text-center" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-left"
            >
              <h3 className="text-xl font-semibold mb-1 text-pink-300">{project.title}</h3>
              <p className="text-sm text-white/90 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="bg-pink-700 text-white px-2 py-1 rounded-full text-xs shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:underline text-sm font-medium cursor-expand"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
