export interface Project {
  title:   string;
  desc:    string;
  img:     string;
  repo:    string;
  category:string;
}

// Lista de proyectos (mock)
export const ALL_PROJECTS: Project[] = [
  {
    title:    'Generador de Cartas para Niños',
    desc:     'Página web interactiva para crear cartas personalizadas.',
    img:      'assets/Carta.jpg',
    repo:     'https://github.com/MateoJa54/carta-ninos',
    category: 'web'
  },
  {
    title:    'Tienda de Licores',
    desc:     'E‑commerce con catálogo y carrito de compras.',
    img:      'assets/sureno.jpg',
    repo:     'https://github.com/MateoJa54/tienda-licores',
    category: 'ecom'
  },
  {
    title:    'Gestión Hospitalaria',
    desc:     'App de escritorio en C# y SQL Server.',
    img:      'assets/Hospital.png',
    repo:     'https://github.com/MateoJa54/gestion-hospitalaria',
    category: 'desktop'
  },
  {
    title:    'Control de Temperatura',
    desc:     'Monitorización con Arduino y web dashboard.',
    img:      'assets/Temperatura.png',
    repo:     'https://github.com/MateoJa54/control-temperatura',
    category: 'iot'
  }
];
