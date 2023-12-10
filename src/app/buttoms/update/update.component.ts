import { Component } from '@angular/core';
import { UpdateService } from '../../services/update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  constructor(private readonly udpateService: UpdateService){}

  updateTask(){

    this.udpateService.udpateTask()

  }

}
