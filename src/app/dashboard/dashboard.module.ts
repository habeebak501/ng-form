import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
  ],
  declarations: []
})
export class DashboardModule { }
