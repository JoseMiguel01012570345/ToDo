import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtomsComponent } from './buttoms.component';
import { DeleteComponent } from './delete/delete.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    InsertComponent,
    UpdateComponent,
    DeleteComponent,
    ButtomsComponent,

  ],
  imports: [
    CommonModule
  ],
  // providers:[CrudService],
  exports: [ButtomsComponent]
})
export class ButtomsModule { }
