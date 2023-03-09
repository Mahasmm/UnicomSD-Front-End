import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { AddGameBoothComponent } from './Component/GameBooth/add-game-booth/add-game-booth.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Component/home/home.component';
import { ViewGameBoothsComponent } from './Component/view-game-booths/view-game-booths.component';
import { AddCustomerComponent } from './Component/add-customer/add-customer.component';
import { EditGameBoothComponent } from './Component/GameBooth/edit-game-booth/edit-game-booth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddGameBoothComponent,
    HomeComponent,
    ViewGameBoothsComponent,
    AddCustomerComponent,
    EditGameBoothComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
