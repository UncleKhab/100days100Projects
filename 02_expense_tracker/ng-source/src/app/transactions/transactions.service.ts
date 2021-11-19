import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Transaction } from './transactions.models';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  transactions: Transaction[] = [
    { date: new Date('11-18-2021'), category: 'takeout food', amount: 45 },
    { date: new Date('11-18-2021'), category: 'utilities', amount: 50 },
    { date: new Date('11-18-2021'), category: 'groceries', amount: 22 },
    { date: new Date('11-19-2021'), category: 'groceries', amount: 18 },
    { date: new Date('11-19-2021'), category: 'household', amount: 80 },
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
  notifyDateChange = new Subject<any>();
  constructor() {}

  onAddTransaction(transaction: Transaction) {
    this.transactions.unshift(transaction);
    this.notifyTransactionsChange.next(this.transactions.slice());
  }
  onRemoveTransaction(id: number) {
    this.transactions = this.transactions.slice(id, 1);
    this.notifyTransactionsChange.next(this.transactions.slice());
  }
  getTransactions() {
    return this.transactions.slice();
  }

  onSelectDate(date: Date) {
    this.selectedDate = date;
    this.notifyDateChange.next(date);
    this.notifyTransactionsChange.next(this.transactions.slice());
  }
  onAddCategory(name: string) {
    this.categories.push(name);
  }
  getCategories() {
    return this.categories.slice();
  }
}
