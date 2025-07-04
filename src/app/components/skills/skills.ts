// src/app/components/skills/skills.ts
import { Component }      from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class Skills{
  skills = [
    { icon: 'filetype-html',    color: 'text-danger',  name: 'HTML5',      desc: 'Estructura web moderna' },
    { icon: 'filetype-css',     color: 'text-primary', name: 'CSS',        desc: 'Diseño visual adaptable' },
    { icon: 'filetype-js',      color: 'text-warning', name: 'JavaScript', desc: 'Lógica y dinamismo web' },
    { icon: 'code-slash',       color: 'text-info',    name: 'C++',        desc: 'Desarrollo de Software' },
    { icon: 'cup-hot-fill',     color: 'text-danger',  name: 'Java',       desc: 'POO y aplicaciones' },
    { icon: 'hash',             color: 'text-dark',    name: 'C#',         desc: 'Aplicaciones .NET' }
  ];
}
