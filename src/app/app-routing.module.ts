import { EditGameBoothComponent } from './Component/GameBooth/edit-game-booth/edit-game-booth.component';
import { AddCustomerComponent } from './Component/add-customer/add-customer.component';
import { ViewGameBoothsComponent } from './Component/view-game-booths/view-game-booths.component';
import { AddGameBoothComponent } from './Component/GameBooth/add-game-booth/add-game-booth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'game-booth/add',
    component:AddGameBoothComponent
  },
  {
    path:'game-booth/view',
    component:ViewGameBoothsComponent
  }
  ,{
    path:'cusotmer/add',
    component: AddCustomerComponent
  },
  {
    path:'game-booth/edit/:id',
    component: EditGameBoothComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
