// src/app/components/nav/nav.ts
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss']
})
export class Nav{
  isOpen = signal(false);

  toggle() { this.isOpen.set(!this.isOpen()); }
  close()  { this.isOpen.set(false); }

  scrollTo(sectionId: string) {
    this.close();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
