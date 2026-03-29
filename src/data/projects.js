import curp from '../assets/images/projects/curp.jpg';
import rickmorty from '../assets/images/projects/rickmorty.jpg';
import tasksmanager from '../assets/images/projects/tasksmanager.jpg';
import snapventas from '../assets/images/projects/snapventas.svg';
import slavdigital from '../assets/images/projects/slavdigital.jpg';
import dfa from '../assets/images/projects/fda.jpg';

export const proyectos = [
  {
    id: 1,
    nombre: 'SnapVentas',
    descripcion:
      'Sistema de punto de venta (POS) con gestión de productos, ventas y reportes.',
    stack: ['PHP', 'MySQL', 'AJAX'],
    imagen: snapventas,
    github: '',
    category: 'Comercial',
    live: 'https://snapventas.com',
  },
  {
    id: 2,
    nombre: 'Slav Digital',
    descripcion:
      'Rastreador de vehiculos, rutas y administrar los vehiculos en tiempo real',
    stack: ['Laravel', 'MySQL', 'PHP'],
    imagen: slavdigital,
    github: '',
    category: 'Escolar',
    live: 'https://slav.digital',
  },
  {
    id: 3,
    nombre: 'Rick & Morty Explorer',
    descripcion:
      'Explorador de personajes y episodios, para la comunidad de fans de la serie.',
    stack: ['Vite', 'JavaScript', 'Tailwind'],
    imagen: rickmorty,
    github: 'https://github.com/MarkoEv/rickmorty-explorer',
    category: 'Comunidad',
    live: 'https://rickmorty-explorer-iota.vercel.app',
  },
  {
    id: 4,
    nombre: 'CURP Generator',
    descripcion: 'Generador de CURP mexicano con validación en tiempo real.',
    stack: ['Vite', 'Tailwind', 'Swiper.js'],
    imagen: curp,
    github: 'https://github.com/MarkoEv/generador-de-curp',
    category: 'Hobby',
    live: 'https://generador-de-curp.vercel.app',
  },
  {
    id: 5,
    nombre: 'Tasks Manager',
    descripcion:
      'Un Gestor de tareas gratuito con persistencia en localStorage.',
    stack: ['React', 'Vite', 'Tailwind'],
    imagen: tasksmanager,
    github: 'https://github.com/MarkoEv/tasksmanager',
    category: 'Hobby',
    live: 'https://tasksmanager-kappa.vercel.app/',
  },

  {
    id: 6,
    nombre: 'Simulador de AFD',
    descripcion:
      'Simulador de Autómatas Finitos Deterministas con visualización de grafos.',
    stack: ['Vue.js', 'Bootstrap', 'Cytoscape.js'],
    imagen: dfa,
    github:
      'https://github.com/MarkoEv/Simulador-de-Automatas-Finitos-Deterministas-AFD',
    category: 'Hobby',
    live: 'https://automatafinito.netlify.app/',
  },
];
