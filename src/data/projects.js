import curp from "../assets/images/projects/curp.png";
import rickmorty from "../assets/images/projects/rickmorty.png";
import tasksmanager from "../assets/images/projects/tasksmanager.png";
import snapventas from "../assets/images/projects/snapventas.png";
import slavdigital from "../assets/images/projects/slavdigital.png";
import dfa from "../assets/images/projects/dfa.png";

export const proyectos = [
  {
    id: 1,
    nombre: "CURP Generator",
    descripcion:
      "Generador de CURP mexicano con validación en tiempo real y efecto de tipeo.",
    stack: ["Vite", "Tailwind", "Swiper.js"],
    imagen: curp,
    github: "https://github.com/MarkoEv/generador-de-curp",
    live: "https://generador-de-curp.vercel.app",
  },
  {
    id: 2,
    nombre: "Rick & Morty Explorer",
    descripcion:
      "Explorador de personajes y episodios con fetch, paginación y animaciones.",
    stack: ["Vite", "JavaScript", "Tailwind", "DaisyUI"],
    imagen: rickmorty,
    github: "https://github.com/MarkoEv/rickmorty-explorer",
    live: "https://rickmorty-explorer-iota.vercel.app",
  },
  {
    id: 3,
    nombre: "Tasks Manager",
    descripcion:
      "Gestor de tareas con modo oscuro, drag & drop y persistencia en localStorage.",
    stack: ["React", "Vite", "Tailwind"],
    imagen: tasksmanager,
    github: "https://github.com/MarkoEv/tasksmanager",
    live: "https://tasksmanager.vercel.app",
  },
  {
    id: 4,
    nombre: "SnapVentas",
    descripcion:
      "Sistema de punto de venta (POS) con gestión de productos, ventas y reportes.",
    stack: ["PHP", "MySQL"],
    imagen: snapventas,
    github: "https://github.com/MarkoEv/snapventas",
    live: "https://snapventas.com",
  },
  {
    id: 5,
    nombre: "Slav Digital",
    descripcion:
      "Rastreador de vehiculos con funciones para asignar rutas y administrar los vehiculos en tiempo real",
    stack: ["Laravel", "MySQL", "PHP"],
    imagen: slavdigital,
    github: "https://github.com/MarkoEv/slav-digital",
    live: "https://slav.digital",
  },
  {
    id: 6,
    nombre: "Simulador de AFD",
    descripcion:
      "Simulador de Autómatas Finitos Deterministas con visualización de grafos.",
    stack: ["Vue.js", "Bootstrap", "Cytoscape.js"],
    imagen: dfa,
    github:
      "https://github.com/MarkoEv/Simulador-de-Automatas-Finitos-Deterministas-AFD",
    live: "",
  },
];
