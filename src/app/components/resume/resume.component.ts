import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent implements OnInit {
  src: string = "/resume.pdf";
  constructor() { }
  
  ngOnInit() {
  }

}
