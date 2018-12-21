import { Component, OnInit } from '@angular/core';
import { GlobalConfig } from 'src/app/GlobalConfig';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name: String;
  githubLink: String;
  linkedinLink: String;
  globalConfig: GlobalConfig;
  constructor(private globalconfig: GlobalConfig) { 
    this.globalconfig = globalconfig    
  }

  ngOnInit() {
    this.name = this.globalconfig.name;
    this.githubLink = this.globalconfig.githubLink;
    this.linkedinLink = this.globalconfig.linkedinLink;  
  }

}
