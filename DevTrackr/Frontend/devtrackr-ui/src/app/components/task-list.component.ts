import { Component, OnInit } from '@angular/core';
import { TaskItem, TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  tasks: TaskItem[] = [];
  newTask: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(data => this.tasks = data);
  }

  addTask() {
    const task: TaskItem = { title: this.newTask, isComplete: false };
    this.taskService.addTask(task).subscribe(t => this.tasks.push(t));
    this.newTask = '';
  }
}