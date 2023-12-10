import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  taskList:[string,string][] = [];
  doneTask:boolean[]         = []
  auxiliarTask:string        = ''
  selectedItems:boolean[]    = []


  show(list:number){

    if(list==0)
      console.log(this.taskList)
    if(list== 1)
      console.log(this.doneTask)
    if(list== 2)
      console.log(this.selectedItems)
  }
}
