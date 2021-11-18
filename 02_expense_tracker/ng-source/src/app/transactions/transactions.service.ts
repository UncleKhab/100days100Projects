import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Transaction } from './transactions.models';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  transactions: Transaction[] = [
    { date: new Date('11-18-2021'), category: 'groceries', amount: 45 },
    { date: new Date('11-18-2021'), category: 'groceries', amount: 50 },
    { date: new Date('11-18-2021'), category: 'groceries', amount: 22 },
    { date: new Date('11-18-2021'), category: 'groceries', amount: 18 },
    { date: new Date('11-18-2021'), category: 'groceries', amount: 80 },
  ];
  selectedDate = new Date();
  categories: string[] = [
    'groceries',
    'takeout food',
    'household',
    'utilities',
    'rent',
  ];
  notifyTransactionsChange = new Subject<Transaction[]>();
  constructor() {}

  onAddTransaction(transaction: Transaction) {
    this.transactions.unshift(transaction);
    this.notifyTransactionsChange.next(this.transactions.slice());
  }
  onRemoveTransaction(id: number) {
    this.transactions = this.transactions.slice(id, 1);
    this.notifyTransactionsChange.next(this.transactions.slice());
  }
  onSelectDate(date: string) {
    this.selectedDate = new Date(date);
  }
  getTransactions() {
    return this.transactions.slice();
  }
  getCategories() {
    return this.categories.slice();
  }
}
