import { Component, inject, OnInit } from '@angular/core';
import { InkaMedicService } from './services/inka-medic.service';
import { IProductUi } from './models/inka-medic.model';

@Component({
  selector: 'app-inka-medic',
  standalone: true,
  imports: [],
  templateUrl: './inka-medic.component.html',
  styleUrl: './inka-medic.component.scss'
})
export class InkaMedicComponent implements OnInit {
  private _inkaMedicService = inject(InkaMedicService);
  product: IProductUi = {} as IProductUi;

  ngOnInit(): void {
    this.getProductServ();
  }

  // SERVICES
  getProductServ() {
    this._inkaMedicService.getProduct("009703").subscribe({
      next: resp => this.product = resp,
      error: error => console.log("error: ", error)
    });
  }
}
