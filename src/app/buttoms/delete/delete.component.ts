import { Component } from '@angular/core';
import { DeleteService } from 'src/app/services/delete.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(private readonly deleteService: DeleteService){}

  deleteTask(){
      this.deleteService.deleteTask()
  }

}
