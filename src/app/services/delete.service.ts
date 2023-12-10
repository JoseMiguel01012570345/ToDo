import { Injectable } from '@angular/core';
import { ResourcesService } from './resources/resources.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private readonly deleteResources: ResourcesService) { }

  deleteTask(){


    this.deleteResources.taskList.pop()
    this.deleteResources.doneTask.pop()


    for(let i=0;i<this.deleteResources.taskList.length;i++){

      if(this.deleteResources.selectedItems[i]){

        for(let j=i;j<this.deleteResources.taskList.length;j++){

          if(j==this.deleteResources.taskList.length-1)
          {

            this.deleteResources.taskList.pop()
            this.deleteResources.doneTask.pop()
            this.deleteResources.selectedItems.pop()

            break
          }

          this.deleteResources.taskList[j][0]=this.deleteResources.taskList[j+1][0]
          this.deleteResources.taskList[j][1]=this.deleteResources.taskList[j+1][1]

          this.deleteResources.doneTask[j]=this.deleteResources.doneTask[j+1]
          this.deleteResources.selectedItems[j]=this.deleteResources.selectedItems[j+1]

        }

        i=-1

      }

    }

    this.deleteResources.taskList.push([this.deleteResources.auxiliarTask,(this.deleteResources.taskList.length-1).toString()])
    this.deleteResources.doneTask.push(false)
    this.deleteResources.selectedItems.push(false)

    debugger

  }

}
