export function Hero() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#1a0023] text-center px-4">
      <div className="pb-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-[1.3] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 pb-2">
          Hi, I'm Abhigna.
        </h1>

        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-6">
          Artificial Intelligence | Full Stack Development | Data Analysis
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button onClick={() => scrollTo('about')} className="bg-pink-600 text-white px-4 py-2 rounded shadow hover:bg-pink-700">
            About Me
          </button>
          <button onClick={() => scrollTo('skills')} className="bg-pink-600 text-white px-4 py-2 rounded shadow hover:bg-pink-700">
            Skills
          </button>
          <button onClick={() => scrollTo('experience')} className="bg-pink-600 text-white px-4 py-2 rounded shadow hover:bg-pink-700">
            Experience
          </button>
          <button onClick={() => scrollTo('projects')} className="bg-pink-600 text-white px-4 py-2 rounded shadow hover:bg-pink-700">
            Projects
          </button>
          <button onClick={() => scrollTo('contact')} className="bg-pink-600 text-white px-4 py-2 rounded shadow hover:bg-pink-700">
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
}
