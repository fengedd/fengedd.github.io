import { Component, OnInit } from '@angular/core';
// import { readFileSync } from 'fs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent implements OnInit {
  src = '/assets/resume/resume.pdf';
  constructor() { }
  ngOnInit() {
  }

}
