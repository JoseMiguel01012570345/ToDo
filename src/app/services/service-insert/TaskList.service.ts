import { Injectable } from '@angular/core';
import { ResourcesService } from '../resources/resources.service';

@Injectable({
  providedIn: 'root'
})
export class InsertService {


 public taskList:[string,string][]=this.resources.taskList;


 constructor(private readonly resources: ResourcesService){ }


  done:boolean[]=this.resources.doneTask

   recieveTaskEmition(taskID:string){

    //debugger

    //if(Number(taskID)==this.resources.taskList.length-1 && this.resources.auxiliarTask!='') this.resources.selectedItems.push(false) // add an none selected item

    this.resources.taskList[Number(taskID)][0]=this.resources.auxiliarTask // set the last task done
    this.resources.doneTask[(Number(taskID))]=true //mark as done

    this.resources.taskList.push(['',(this.resources.taskList.length).toString()]) //insert empty task
    this.resources.doneTask.push(false) // mark as undone

    this.resources.selectedItems[Number(taskID)]=false
    console.log(this.resources.selectedItems)

    this.resources.auxiliarTask=''

    }

    typeTask(task:[string,string]){

      if( task[1]== (this.resources.taskList.length-1).toString())
           this.resources.auxiliarTask=task[0]
    }
}
