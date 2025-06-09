import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export function About() {
  return (
    <section className="py-24 px-6 bg-[#1a0023] text-white text-left" id="about">
      <div className="max-w-3xl mx-auto text-justify">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

        <p className="text-lg mb-4">
          I’m a Computer Science graduate who’s endlessly curious about how technology works, and how we can <strong>build</strong> tools that make life smoother, faster, and more meaningful.
        </p>

        <p className="text-lg mb-4">
          During my <strong>Master’s</strong>, I challenged myself to bring ideas to life using AI, automation, and full-stack development. My <strong>internships</strong> as a Quality Analyst at AlcoveX Product Studio and a Backend Developer at Eitacies shaped my mindset and gave me a clearer understanding of how organizations function in real time.
        </p>

        <p className="text-lg mb-4">
          Before all this, I was leading marketing at <strong>AIESEC</strong> in India, and managing my team while juggling creative briefs and community partnerships. I also worked on the floor at <strong>Chick-fil-A</strong>, where I learned customer service, teamwork, and how to stay calm during chaos.
        </p>

        <p className="text-lg mb-6">
          At the heart of everything I do is a desire to keep learning, keep experimenting, and keep improving, both in the products I build and the person I am becoming. I am currently exploring opportunities where I can contribute from day one as a developer, analyst, or AI enthusiast.
        </p>

        <p className="text-lg mb-6 text-center">
          If you'd like to talk tech or discuss the world, please drop me a message!
        </p>

        <div className="flex justify-center gap-6 mt-4 flex-wrap">
          <a
            href="mailto:abhignavadlamudi@outlook.com"
            className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded shadow hover:bg-pink-700 transition"
          >
            <HiOutlineMail className="text-xl" /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/abhigna-sowgandhika-vadlamudi-809049199/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded shadow hover:bg-pink-700 transition"
          >
            <FaLinkedin className="text-xl" /> LinkedIn
          </a>
          <a
            href="https://github.com/AbhignaSowgandhika"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded shadow hover:bg-pink-700 transition"
          >
            <FaGithub className="text-xl" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
