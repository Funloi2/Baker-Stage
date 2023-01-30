import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BusinessesComponent} from "./component/business/businesses/businesses.component";
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'business',
        component: BusinessesComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
