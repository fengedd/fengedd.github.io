import { Component, OnInit } from '@angular/core';
import { GlobalConfig } from '../../GlobalConfig';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name: string;
  githubId: string;
  linkedinId: string;
  email: string;
  globalConfig: GlobalConfig;
  constructor(private globalconfig: GlobalConfig) {
    this.globalconfig = globalconfig;
  }

  ngOnInit() {
    this.name = this.globalconfig.name;
    this.email = this.globalconfig.email;

  }

}
