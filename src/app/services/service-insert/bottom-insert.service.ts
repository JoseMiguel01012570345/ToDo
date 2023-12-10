import { Injectable } from '@angular/core';
import { ResourcesService } from '../resources/resources.service';

@Injectable({
  providedIn: 'root'
})
export class BottomInsertService {

  constructor(private readonly resources:ResourcesService ) { }

  insertTaskValidator(){

    if(this.resources.taskList.length>0)
    {
      if(this.resources.auxiliarTask !='')// if we do not have a task empty, we insert
      {
          this.resources.taskList[this.resources.taskList.length-1][0]=this.resources.auxiliarTask
          this.resources.doneTask[this.resources.taskList.length-1]=true

          this.resources.taskList.push(['',(this.resources.taskList.length-1).toString()]) //insert empty task
          this.resources.doneTask.push(false)
          this.resources.selectedItems.push(false)
          this.resources.auxiliarTask=''

       }

      else alert('enter a task')
    }
      else{
        this.resources.taskList.push(['',(this.resources.taskList.length-1).toString()]) //insert empty task
        this.resources.doneTask.push(false)
        this.resources.selectedItems.push(false)
      }
  }
}
