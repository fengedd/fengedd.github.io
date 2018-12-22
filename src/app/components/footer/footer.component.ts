import { Component, OnInit } from '@angular/core';
import { GlobalConfig } from 'src/app/GlobalConfig';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  githubLink: String;
  linkedinLink: String;
  name:String;  
  constructor(private globalconfig: GlobalConfig) {     
  }

  ngOnInit() {
    this.name = this.globalconfig.name;
    this.githubLink = this.globalconfig.githubLink;
    this.linkedinLink = this.globalconfig.linkedinLink;  
  }

}