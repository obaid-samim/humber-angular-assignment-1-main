import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onInput($event: KeyboardEvent | any): void {
    console.log('$event => key', $event.key)
    console.log('$event => value', $event.target.value)
  }
}
