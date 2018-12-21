import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name: String;
  githubLink: String;
  linkedinLink: String;
  constructor() { }

  ngOnInit() {
    this.name = 'Edd Feng'    
    this.githubLink = 'https://github.com/fengedd'
    this.linkedinLink = 'https://linkedin.com/in/fengedd'
  }

}
