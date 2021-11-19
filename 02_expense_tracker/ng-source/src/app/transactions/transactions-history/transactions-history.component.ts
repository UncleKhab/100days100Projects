import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Transaction } from '../transactions.models';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transactions-history',
  templateUrl: './transactions-history.component.html',
  styleUrls: ['./transactions-history.component.css'],
})
export class TransactionsHistoryComponent implements OnInit {
  transactions: Transaction[] = [];
  transactionsServiceSub: Subscription | undefined;
  transactionsTotal: number = 0;
  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.transactions = this.transactionsService
      .getTransactions()
      .filter(
        (transaction: Transaction) =>
          transaction.date.getDate() ===
          this.transactionsService.selectedDate.getDate()
      );
    this.transactionsTotal = this.transactions.reduce(
      (acc: number, item: Transaction) => {
        return (acc += item.amount);
      },
      0
    );

    this.transactionsService.notifyTransactionsChange.subscribe(
      (transactions: Transaction[]) => {
        this.transactions = transactions.filter(
          (transaction: Transaction) =>
            transaction.date.getDate() ===
            this.transactionsService.selectedDate.getDate()
        );
        this.transactionsTotal = this.transactions.reduce(
          (acc: number, item: Transaction) => {
            return (acc += item.amount);
          },
          0
        );
      }
    );
  }
}
