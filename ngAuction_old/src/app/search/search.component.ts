import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nga-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  categories: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
