import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routingModule } from "./routing.module";
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AtelierComponent } from './atelier/atelier.component'
import { CardComponent } from './card/card.component';
import { MultiCardsComponent } from './multi-cards/multi-cards.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { CollinesComponent } from "./collines/collines.component";
import { BassinsComponent } from "./bassins/bassins.component";
import { BotNavbarComponent } from "./bot-navbar/bot-navbar.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AtelierComponent,
    CollinesComponent,
    BassinsComponent,
    CardComponent,
    MultiCardsComponent,
    TopNavbarComponent,
    BotNavbarComponent
  ],
  imports: [
    BrowserModule,
    routingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
