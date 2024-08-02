import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IProductApi, IProductUi } from '../models/inka-medic.model';

@Injectable({
  providedIn: 'root'
})
export class InkaMedicService {
  private http = inject(HttpClient);
  company = "IKF";
  channel = "WEB";
  urlProduct = `product/`;

  getProduct(codProduct: string): Observable<IProductUi> {
    return this.http.get<IProductApi>(`${this.urlProduct}${codProduct}`, {
      params: { companyCode: this.company, saleChannel: this.channel }
    }).pipe(map(data => this.adpaterProductApiToUi(data)));
  }

  adpaterProductApiToUi(dataAPi: IProductApi): IProductUi {
    return {
      id: dataAPi.id,
      codeEan: dataAPi.eanCode,
      codeSap: dataAPi.sapCode,
      sku: dataAPi.skuMifarma,
      name: dataAPi.name,
      stock: dataAPi.stock,
      imageUrl: dataAPi.imageList?.length ? (dataAPi.imageList?.length > 1 ? dataAPi.imageList[1].url : dataAPi.imageList[0].url) : "",
      statusId: dataAPi.productStatusId,
      statusDes: dataAPi.productStatus,
      price: dataAPi.price,
      pricePromoPay: dataAPi.priceAllPaymentMethod,
      priceOhPay: dataAPi.priceWithpaymentMethod,
      priceHighDiscount: dataAPi.priceHighDiscount,
      pricePack: dataAPi.pricePack,
    }
  }
}
