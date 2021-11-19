import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// PIPES
import { CapitalizePipe } from './capitalize.pipe';
import { ShortenDayPipe } from './shorten-day.pipe';

// COMPONENTS
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionAddComponent } from './transactions/transaction-add/transaction-add.component';
import { TransactionDatePickerComponent } from './transactions/transaction-date-picker/transaction-date-picker.component';
import { TransactionsHistoryComponent } from './transactions/transactions-history/transactions-history.component';
import { SummaryComponent } from './summary/summary.component';

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
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
