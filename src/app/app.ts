import { Component } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Header }   from './components/header/header';
import { Nav }      from './components/nav/nav';
import { About}    from './components/about/about';
import { Skills}   from './components/skills/skills';
import { Experience} from './components/experience/experience';
import { Portfolio }  from './components/portfolio/portfolio';
import { Contact }    from './components/contact/contact';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, Nav, About, Skills, Experience, Portfolio, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Portafolio';
}
