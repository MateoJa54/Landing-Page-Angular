import { Component } from '@angular/core';
import { Header }    from './components/header/header';
import { Nav }       from './components/nav/nav';
import { About }     from './components/about/about';
import { Skills }    from './components/skills/skills';
import { Experience }from './components/experience/experience';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact }   from './components/contact/contact';
import { Footer }    from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Header,
    Nav,
    About,
    Skills,
    Experience,
    Portfolio,
    Contact,
    Footer
  ],
  templateUrl: './app.html'
})
export class App {}
