import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      requestAnimationFrame(updateCursor);
    };

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const applyExpand = () => cursor.classList.add('expand');
    const removeExpand = () => cursor.classList.remove('expand');

    const targets = document.querySelectorAll('a, button, .cursor-expand');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', applyExpand);
      el.addEventListener('mouseleave', removeExpand);
    });

    updateCursor();

    return () => {
      document.removeEventListener('mousemove', () => {});
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', applyExpand);
        el.removeEventListener('mouseleave', removeExpand);
      });
    };
  }, []);

  return (
    <div className="font-sans bg-[#1a0023] text-white">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <div className="custom-cursor"></div>
    </div>
  );
}
