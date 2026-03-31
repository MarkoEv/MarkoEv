import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Inicio', href: '#' },
    { name: 'Proyectos', href: '#Proyectos' },
    { name: 'Habilidades', href: '#Habilidades' },
    { name: 'Blog', href: '#Blog' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1c1c1c]/80 backdrop-blur-md border-b border-white/10">
      <div className="px-4 sm:px-12 lg:px-46  h-16 flex items-center justify-between">
        <a href="/" className="text-lg font-bold">
          <span className="text-white">{'[" Marko'}</span>
          <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            {'Ev "]'}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition relative group "
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-xl">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-4 sm:px-12 pb-4 flex flex-col gap-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export { Header };
