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
  { title: 'Generador de Cartas', img: 'assets/Carta.jpg', desc: '...', repo: 'https://github.com/tu-usuario/carta-ninos', category: 'web' },
  { title: 'Tienda de Licores',    img: 'assets/sureno.jpg', desc: '...', repo: 'https://github.com/MateoJa54/carta.git',          category: 'web' },
  { title: 'Gestión Hospitalaria', img: 'assets/Hospital.png', desc: '...', repo: 'https://github.com/MateoJa54/Primera-pagina-web.git', category: 'oop' },
  { title: 'Control de Temperatura', img: 'assets/Temperatura.png', desc: '...', repo: 'https://github.com/MateoJa54/Prueba.git',        category: 'oop' }
];

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class Portfolio{
  // Signal para filtrar categoría (opcional)
  filter   = signal<'all'|'web'|'oop'>('all');
  projects = signal<Project[]>(ALL_PROJECTS);

  filtered = computed(() => {
    const f = this.filter();
    if (f === 'all') return this.projects();
    return this.projects().filter(p => p.category === f);
  });
}
