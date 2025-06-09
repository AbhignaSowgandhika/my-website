import { useEffect, useState } from 'react';

const experienceData = [
  {
    title: 'Backend Developer Intern',
    org: 'Eitacies Inc.',
    date: 'Mar 2022 – Jul 2022',
    description:
      'Built Java Spring Boot/Kafka microservices, resolved memory inefficiencies, and improved latency. Integrated real-time APIs for conferencing (35% user engagement boost) and built Python ETL pipelines across 10+ data sources.',
  },
  {
    title: 'QA Intern',
    org: 'AlcoveX Product Studio',
    date: 'Aug 2021 – Feb 2022',
    description:
      'Tested a large-scale academic web app with 50+ test cases across unit, integration, and regression levels. Logged 40+ bugs using JIRA/Notion, worked in 6 Agile sprints, and helped cut post-release issues by 20%.',
  },
  {
    title: 'Senior Marketing Manager',
    org: 'AIESEC in India',
    date: 'Feb 2021 – Jul 2022',
    description:
      'Led campus marketing initiatives, managed a cross-functional team, and boosted engagement by 35%. Collaborated with global partners, organized events, and crafted digital content strategies that elevated student participation and brand visibility.',
  },
];

export function Experience() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('experience');
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) {
          setVisible(true);
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="experience" className="py-24 px-6 bg-[#1a0023] text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Experience</h2>
        <div className="relative border-l-2 border-white/20 ml-6">
          {experienceData.map((exp, i) => (
            <div
              key={i}
              className={`relative mb-16 pl-10 group transition-opacity duration-700 ease-in-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-30px] top-4 w-3 h-3 bg-pink-500 rounded-full shadow-md"></div>

              {/* Experience card */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md">
                <p className="text-sm text-pink-400 mb-1">{exp.date}</p>
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <p className="italic text-white/70 mb-2">{exp.org}</p>
                <p className="text-white/90 text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
