import { Component, OnInit } from '@angular/core';
import * as fs from 'fs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent implements OnInit {
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';
  constructor() { }
  ngOnInit() {

  }

}
