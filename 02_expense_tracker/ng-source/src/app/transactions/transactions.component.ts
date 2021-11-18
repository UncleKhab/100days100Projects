import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  todayDate = this.transactionsService.selectedDate;
  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {}
}
