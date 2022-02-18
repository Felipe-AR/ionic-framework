import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any = {};

  constructor() {}

  confirmar(): void {
    console.log('confirmar');
    console.log(this.data);
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
