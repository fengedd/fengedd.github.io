import { Component, OnInit, Input } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['../resume.component.css']
})
export class ProjectEntryComponent implements OnInit {

  organization: string;
  position: string;
  website: string;
  startDate: Date;
  endDate: Date;
  summary: string;
  highlights: string[];
  technologies: string[];
  @Input() project: Project;
  constructor() { }

  ngOnInit() {
    this.organization = this.project.organization;
    this.position = this.project.position;
    this.website = this.project.website;
    this.startDate = new Date(this.project.startDate);
    this.endDate = new Date(this.project.endDate);
    this.summary = this.project.summary;
    this.highlights = this.project.highlights;
    this.technologies = this.project.technologies;
  }

}
