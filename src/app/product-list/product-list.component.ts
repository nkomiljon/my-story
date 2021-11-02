// @ts-ignore
import { Component } from '@angular/core';
import { products } from "../products";

// @ts-ignore
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products = products;

  share() {
    window.alert('The product has been shared!');
  }

}
