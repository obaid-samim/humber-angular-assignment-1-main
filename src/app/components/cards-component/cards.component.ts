import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RawProductData } from '../modal';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  @Input() products: RawProductData[] | any;
  @Output() productClicked: EventEmitter<RawProductData> = new EventEmitter<RawProductData>();

  constructor() { }

  ngOnInit(): void {
  }

  onCardClick(product: RawProductData) {
    this.productClicked.emit(product);
  }
}
