import { Component } from '@angular/core';
import { rawData } from './components/data';
import { RawProductData } from './components/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'humber-assignment-1';
  showModal = false;
  public products = rawData;
  public productModal: RawProductData = {
    id:0,
    item_name: '',
    item_description: '',
    storage_location: '',
    inventory_level: 0,
    image: ''
  }

  onCardClick() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  showProductModal(product: RawProductData): void {
    this.showModal = true;
    this.productModal = product;
  }
}
