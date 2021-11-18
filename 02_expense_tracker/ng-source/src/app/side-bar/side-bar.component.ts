import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions/transactions.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: 'side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  title: string = 'My Expense';
  categories = this.transactionsService.categories;
  constructor(private transactionsService: TransactionsService) {}

  ngOnInit() {}
}
