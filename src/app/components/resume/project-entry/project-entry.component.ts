import { Component, OnInit, Input } from '@angular/core';
import { Project } from './project';
import { MOCK } from './mock';

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['../resume.component.css']
})
export class ProjectEntryComponent implements OnInit {


  @Input() project: Project;
  constructor() { }

  ngOnInit() {
    this.project = MOCK;
    console.log(MOCK);
  }

}
