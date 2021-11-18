import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transaction-date-picker',
  templateUrl: './transaction-date-picker.component.html',
  styleUrls: ['./transaction-date-picker.component.css'],
})
export class TransactionDatePickerComponent implements OnInit {
  dates: Date[] = [];
  selectedDate = this.transactionService.selectedDate;
  constructor(private transactionService: TransactionsService) {}

  ngOnInit(): void {
    for (let i = -3; i <= 3; i++) {
      this.dates.push(
        new Date(this.selectedDate.setDate(this.selectedDate.getDate() + i))
      );
    }
    console.log(this.dates);
  }
}
