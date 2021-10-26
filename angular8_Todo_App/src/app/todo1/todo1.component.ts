import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component implements OnInit {

  todoText: string = "";
  todoList: any =[];
  isTodoListEmpty = false;

  constructor() { }

  ngOnInit() {
    this.isTodoListEmpty = true;
  }

  onAddToDo(){
    if(this.todoText !== ""){
      let todoObj = {todoId: this.todoList.length, text: this.todoText, isCompleted: false, buttonText:"Done"};

      this.todoList.push(todoObj);
      this.todoText = "";
      this.isTodoListEmpty = false;
    }
  }

  onClearTodo(){
    this.todoList=[];
    this.todoText="";
    this.isTodoListEmpty=true;
  }

  onCompletingTask(todoId: number){
    if(this.todoList[todoId].isCompleted){
      this.todoList[todoId].isCompleted = false;
      this.todoList[todoId].buttonText = "Done";
    }else{
      this.todoList[todoId].isCompleted = true;
      this.todoList[todoId].buttonText = "Undone";
    }
  }
}
