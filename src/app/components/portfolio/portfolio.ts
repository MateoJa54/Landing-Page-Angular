import { Component, signal, computed } from '@angular/core';
import { CommonModule, NgFor }        from '@angular/common';
import { ALL_PROJECTS, Project }      from '../../shared/portfolio.data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class Portfolio {
  private projects = signal<Project[]>(ALL_PROJECTS);
  filter       = signal<string>('all');
  filtered     = computed(() =>
    this.filter() === 'all'
      ? this.projects()
      : this.projects().filter(p => p.category === this.filter())
  );

  setFilter(category: string) {
    this.filter.set(category);
  }
}
