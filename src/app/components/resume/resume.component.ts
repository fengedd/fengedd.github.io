import { Component, OnInit } from '@angular/core';
// import { readFileSync } from 'fs';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import resume from '../../../assets/resume/resume.json';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent implements OnInit {
  src = '/assets/resume/resume.pdf';
  fas: any;
  far: any;
  fab: any;
  summary = 'Summary';
  constructor() {
    library.add(fas, far, fab);
  }
  ngOnInit() {
    console.log(resume);
  }

}
