import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
  ],
})
export class AppComponent {
  title = 'matheus-santos-portfolio';
  constructor(
    router: Router
  ) {
    router.initialNavigation();
  }

}
