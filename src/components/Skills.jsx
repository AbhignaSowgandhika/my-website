import { useState } from 'react';

export function Skills() {
  const domains = [
    {
      category: 'AI & LLM Development',
      skills: ['Python', 'LangChain', 'OpenAI API', 'FAISS', 'spaCy', 'Scikit-learn'],
    },
    {
      category: 'Frontend & Tools',
      skills: ['React', 'Streamlit', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'Git'],
    },
    {
      category: 'Backend & DevOps',
      skills: [
        'Java',
        'Spring Boot',
        'FastAPI',
        'REST APIs',
        'Redis',
        'Docker',
        'PostgreSQL',
        'MySQL',
        'Oracle',
      ],
    },
    {
      category: 'Visualization & Analysis',
      skills: ['Power BI', 'Tableau', 'Excel', 'ETL Pipelines', 'Pandas', 'Matplotlib', 'NumPy'],
    },
    {
      category: 'CRM & Other Platforms',
      skills: [
        'Microsoft Dynamics 365',
        'Power Platform',
        'C#',
        'Notion',
        'JIRA',
        'Agile Methodologies',
      ],
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 px-6 bg-[#1a0023] text-white text-center" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
        <div className="space-y-8">
          {domains.map((group, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full">
                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  className="cursor-expand w-full text-center px-6 py-3 bg-pink-600 text-white font-semibold rounded-xl shadow hover:bg-pink-700 transition"
                >
                  {group.category}
                </button>

                {open === idx && (
                  <div className="mt-4 px-6 py-4 bg-white/10 backdrop-blur-md rounded-xl grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-pink-300 w-full">
                    {group.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="cursor-expand bg-white/10 text-white px-3 py-1 rounded-full shadow transition text-center"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
