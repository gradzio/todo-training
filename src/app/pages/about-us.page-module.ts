import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
import {
  EmployeeCardsComponentModule,
  FirebaseEmployeesServiceModule,
} from '@employees';

@NgModule({
  imports: [
    CommonModule,
    EmployeeCardsComponentModule,
    FirebaseEmployeesServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutUsPage,
      },
    ]),
  ],
  declarations: [AboutUsPage],
  providers: [],
  exports: [],
})
export class AboutUsPageModule {}
