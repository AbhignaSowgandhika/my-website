import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

export function Contact() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let circles = [];
    const spacing = 60;
    const radius = 12;
    for (let y = spacing / 2; y < canvas.height; y += spacing) {
      for (let x = spacing / 2; x < canvas.width; x += spacing) {
        circles.push({ x, y, ox: x, oy: y });
      }
    }

    const draw = (mouseX, mouseY) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let circle of circles) {
        let dx = circle.x - mouseX;
        let dy = circle.y - mouseY;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          let angle = Math.atan2(dy, dx);
          let repel = 180 - dist;
          circle.x = circle.ox + Math.cos(angle) * repel;
          circle.y = circle.oy + Math.sin(angle) * repel;
        } else {
          circle.x += (circle.ox - circle.x) * 0.05;
          circle.y += (circle.oy - circle.y) * 0.05;
        }
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, radius / 2, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.stroke();
      }
    };

    const handleMouseMove = (e) => draw(e.clientX, e.clientY);
    window.addEventListener('mousemove', handleMouseMove);
    draw(-9999, -9999);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="py-24 px-6 bg-[#1a0023] text-center relative overflow-hidden" id="contact">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-xl relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-white">Let's Connect</h2>
        <p className="text-lg mb-6 text-white/80">
          I'm open to roles in AI, Data, or Software Engineering. Whether you have a project in mind or just want to say hi,
          drop me a message!
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <a
            href="mailto:abhignavadlamudi@outlook.com"
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full font-semibold transition cursor-expand"
          >
            <HiOutlineMail /> Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/abhigna-sowgandhika-vadlamudi-809049199/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full font-semibold transition cursor-expand"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/AbhignaSowgandhika"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full font-semibold transition cursor-expand"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

      <p className="text-sm text-white/40 mt-10 relative z-10">
        © {new Date().getFullYear()} Abhigna Vadlamudi — All rights reserved.
      </p>
    </section>
  );
}
