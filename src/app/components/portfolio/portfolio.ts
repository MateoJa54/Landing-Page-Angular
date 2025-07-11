// src/app/components/portfolio/portfolio.ts
import { Component, signal, computed } from '@angular/core';
import { CommonModule, NgFor }         from '@angular/common';

interface Project {
  title: string;
  img:   string;
  desc:  string;
  repo:  string;
  category: 'web' | 'oop';
}

const ALL_PROJECTS: Project[] = [
  { title: 'Generador de Cartas', img: 'assets/Carta.jpg', desc: 'Página web interactiva para crear cartas personalizadas con plantillas divertidas y coloridas.', repo: 'https://github.com/tu-usuario/carta-ninos', category: 'web' },
  { title: 'Tienda de Licores',    img: 'assets/sureno.jpg', desc: 'E-commerce sencillo con catálogo, carrito de compras y validaciones básicas, construido con HTML, CSS y JavaScript.', repo: 'https://github.com/MateoJa54/carta.git',          category: 'web' },
  { title: 'Gestión Hospitalaria', img: 'assets/Hospital.png', desc: 'Aplicación de escritorio en C# y SQL Server para gestionar pacientes, citas y expedientes médicos.', repo: 'https://github.com/MateoJa54/Primera-pagina-web.git', category: 'oop' },
  { title: 'Control de Temperatura', img: 'assets/Temperatura.png', desc: 'App y prototipo con Arduino para monitorizar y regular la temperatura ambiente en tiempo real.', repo: 'https://github.com/MateoJa54/Prueba.git',        category: 'oop' }
];

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class Portfolio{
  filter   = signal<'all'|'web'|'oop'>('all');
  projects = signal<Project[]>(ALL_PROJECTS);

  filtered = computed(() => {
    const f = this.filter();
    if (f === 'all') return this.projects();
    return this.projects().filter(p => p.category === f);
  });
}
