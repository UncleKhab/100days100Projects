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
    this.createDatesArray();
    this.transactionService.notifyDateChange.subscribe((n) => {
      console.log(n);
      this.selectedDate = this.transactionService.selectedDate;
      this.createDatesArray();
    });
  }

  onSelectNewDate(date: Date) {
    this.transactionService.onSelectDate(date);
  }
  private createDatesArray() {
    this.dates = [];
    for (let i = -3; i <= 3; i++) {
      let newDate = new Date(this.selectedDate);
      this.dates.push(
        new Date(newDate.setDate(this.selectedDate.getDate() + i))
      );
    }
  }
}
