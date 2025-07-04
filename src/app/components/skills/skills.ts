// src/app/components/skills/skills.ts
import { Component, signal, computed } from '@angular/core';
import { CommonModule, NgFor }         from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class Skills {
  skills = [
    { icon: 'filetype-html',    color: 'text-danger',  name: 'HTML5',      desc: 'Estructura web moderna' },
    { icon: 'filetype-css',     color: 'text-primary', name: 'CSS',        desc: 'Diseño visual adaptable' },
    { icon: 'filetype-js',      color: 'text-warning', name: 'JavaScript', desc: 'Lógica y dinamismo web' },
    { icon: 'code-slash',       color: 'text-info',    name: 'C++',        desc: 'Desarrollo de Software' },
    { icon: 'cup-hot-fill',     color: 'text-danger',  name: 'Java',       desc: 'Programación orientada a objetos' },
    { icon: 'hash',             color: 'text-dark',    name: 'C#',         desc: 'Aplicaciones empresariales con .NET' }
  ];

  // Ejemplo de uso de signal + computed (opcional)
  filter = signal<'all' | 'web' | 'oop'>('all');
  filteredSkills = computed(() => {
    const f = this.filter();
    if (f === 'all') return this.skills;
    // Podrías categorizar para filtrar, por ejemplo:
    return this.skills.filter(s => (f === 'web' ? ['filetype-html','filetype-css','filetype-js'].includes(s.icon) : ['code-slash','cup-hot-fill','hash'].includes(s.icon)));
  });
}
