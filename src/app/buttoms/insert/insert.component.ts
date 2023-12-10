import { Component, EventEmitter } from '@angular/core';
import { BottomInsertService } from 'src/app/services/service-insert/bottom-insert.service';


@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css'],
})
export class InsertComponent {

  constructor(private readonly insert: BottomInsertService){}

  Insert(){
    this.insert.insertTaskValidator()

  }

}
