import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeadComponent } from './head/head.component';




@NgModule({
  declarations: [
    HeadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeadComponent]
})
export class HeadModule { }
