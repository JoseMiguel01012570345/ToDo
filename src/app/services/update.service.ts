import { Injectable } from '@angular/core';
import { ResourcesService } from './resources/resources.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private readonly resourceService: ResourcesService) { }

  public selectedItems:boolean[]=this.resourceService.selectedItems


  udpateTask(){

    let selectedTag:boolean[]=this.resourceService.selectedItems.filter(item=>item==true)

    if(selectedTag.length>1 )
    {
      alert("can't update more than one task at a time")

    }
    else if(selectedTag.length==0){

      alert("please select a task to update")

    }
    else {

      if(this.resourceService.auxiliarTask=="")
      {

      this.resourceService.doneTask.pop()
      this.resourceService.taskList.pop()

      this.resourceService.doneTask[this.resourceService.selectedItems.indexOf(true)]=false

      }
      else alert("insert the task you have")
    }
  }

  selectedELements(id:string){

    this.resourceService.selectedItems[Number(id)]=true

  }
  removeSelectedItem(id:string){

    this.resourceService.selectedItems[Number(id)]=false

  }

}
