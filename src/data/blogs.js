// iconos de empreas o institucions
import iconGtu from '../assets/images/blogs/01-07-2025/iconuteq.png';
// fotos del proyecto de feria
import pos1010725 from '../assets/images/blogs/01-07-2025/pos1.jpg';
import pos2010725 from '../assets/images/blogs/01-07-2025/pos2.jpg';
import pos3010725 from '../assets/images/blogs/01-07-2025/pos3.jpg';

// foto del proyecto slav
import slav3070825 from '../assets/images/blogs/07-08-2025/slav3.jpg';
import slav2070825 from '../assets/images/blogs/07-08-2025/slav2.jpg';
import slav1070825 from '../assets/images/blogs/07-08-2025/slav1.jpg';

export const blogs = [
  {
    id: 1,
    slug: 'pos-snapventas-feria-ingenieria',
    fecha: '2025-07-01',
    titulo: 'Presentación de POS SnapVentas en feria de ingeniería',
    descripcion:
      'Participé en una feria de ingeniería presentando mi sistema de punto de venta SnapVentas, mostrando su funcionamiento en tiempo real a los asistentes.',
    imagenes: [
      {
        src: pos1010725,
        alt: 'Presentación del sistema POS SnapVentas en feria de ingeniería',
      },
      {
        src: pos2010725,
        alt: 'Demostración del sistema a asistentes',
      },
      {
        src: pos3010725,
        alt: 'Interfaz del sistema de ventas',
      },
    ],
    institucion: {
      nombre: 'Universidad Tecnológica de Querétaro',
      logo: iconGtu,
      url: 'https://uteq.edu.mx',
    },
    proyecto: {
      nombre: 'POS SnapVentas',
      url: 'https://snapventas.com',
    },
  },
  {
    id: 2,
    slug: 'sistema-localizador-de-vehiculos-proyecto-integrador',
    fecha: '2025-08-07',

    titulo: 'Presentación del proyecto integrador SLAV',

    descripcion:
      'Desarrollé una aplicación web que simula un sistema localizador de vehículos (SLAV), mostrando su funcionamiento en tiempo real.',

    imagenes: [
      {
        src: slav2070825,
        alt: 'Presentación del sistema SLAV en proyecto integrador',
      },
      {
        src: slav3070825,
        alt: 'Demostración del sistema localizador de vehículos SLAV',
      },
      {
        src: slav1070825,
        alt: 'Interfaz del sistema SLAV mostrando rastreo en tiempo real',
      },
    ],

    institucion: {
      nombre: 'Universidad Tecnológica de Chilpancingo',
      logo: iconGtu,
      url: 'https://utchilpancingo.edu.mx',
    },

    proyecto: {
      nombre: 'SLAV',
      url: 'https://slav.digital',
    },
  },
];
