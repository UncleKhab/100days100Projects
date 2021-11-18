import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionAddComponent } from './transactions/transaction-add/transaction-add.component';
import { TransactionDatePickerComponent } from './transactions/transaction-date-picker/transaction-date-picker.component';
import { TransactionsHistoryComponent } from './transactions/transactions-history/transactions-history.component';
import { FormsModule } from '@angular/forms';
import { CapitalizePipe } from './capitalize.pipe';
import { ShortenDayPipe } from './shorten-day.pipe';

@NgModule({
  declarations: [
    ShortenDayPipe,
    CapitalizePipe,
    AppComponent,
    SideBarComponent,
    TransactionsComponent,
    TransactionAddComponent,
    TransactionDatePickerComponent,
    TransactionsHistoryComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
