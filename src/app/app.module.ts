import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { ClientInfoCardComponent } from './components/client-info-card/client-info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceCardComponent,
    CreditCardComponent,
    DebitCardComponent,
    ClientInfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
