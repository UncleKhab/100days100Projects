import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SummaryComponent implements OnInit {
  single = [
    {
      name: 'Groceries',
      value: 120,
    },
    {
      name: 'Household',
      value: 400,
    },
    {
      name: 'Rent',
      value: 1800,
    },
    {
      name: 'Utilities',
      value: 500,
    },
  ];

  view: any[] = [700, 400];

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor() {}

  ngOnInit() {}
}
