import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transaction } from '../transactions.models';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.css'],
})
export class TransactionAddComponent implements OnInit {
  @ViewChild('addForm', { static: true }) form!: NgForm;
  categories: string[] = this.transactionsService.categories;
  date = this.transactionsService.selectedDate.toISOString().substr(0, 10);
  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.transactionsService.notifyDateChange.subscribe(() => {
      this.date = this.transactionsService.selectedDate
        .toISOString()
        .substr(0, 10);
    });
  }

  handleSubmit() {
    const transaction: Transaction = {
      date: new Date(this.form.value.date),
      amount: this.form.value.amount,
      category: this.form.value.category,
    };
    this.transactionsService.onAddTransaction(transaction);
  }
}
