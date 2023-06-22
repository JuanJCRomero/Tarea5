import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Portada', url: '/portada', icon: 'mail' },
    { title: 'Personajes', url: '/personajes', icon: 'paper-plane' },
    { title: 'Momentos', url: '/momentos', icon: 'heart' },
    { title: 'Acerca de', url: '/acercade', icon: 'archive' },
    { title: 'En mi Vida', url: '/en-mi-vida', icon: 'trash' },
    { title: 'Contratame', url: '/contratame', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
