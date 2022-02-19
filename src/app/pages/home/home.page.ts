import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

interface Formacao {
  key: string;
  value: string;
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any = {};

  formacoes: Formacao[] = [
    {
      key: 'graduacao',
      value: 'Graduação',
      title: 'Gr',
    },
    {
      key: 'pos-graduacao',
      value: 'Pós-Graduação',
      title: 'Esp',
    },
    {
      key: 'mestrado',
      value: 'Mestrado',
      title: 'Me',
    },
    {
      key: 'doutorado',
      value: 'Doutorado',
      title: 'Dr',
    },
  ];

  constructor(private router: Router) {}

  confirmar(): void {
    const extras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(this.data),
      },
    };

    this.router.navigate(['details'], extras);
  }

  cancelar(): void {
    console.log('cancelar');
    this.data = {};
  }

  remover(): void {
    console.log('remover');
    this.data = {};
  }
}
