import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriveComponent } from './drive.component';
import { DriveRoutingModule } from './drive-routing.module';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    DriveComponent
  ],
  imports: [
    CommonModule,
    DriveRoutingModule,
    SharedModule
  ]
})
export class DriveModule { }
