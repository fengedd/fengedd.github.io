import { Component, OnInit } from '@angular/core';
import { GlobalConfig } from '../../GlobalConfig';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  name: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  currentYear: number;
  constructor(private globalconfig: GlobalConfig) {
    library.add(faLinkedinIn, faGithub, faEnvelope);
  }

  ngOnInit() {
    this.name = this.globalconfig.name;
    this.email = this.globalconfig.email;
    this.githubUrl = this.globalconfig.githubLink + this.globalconfig.githubId;
    this.linkedinUrl = this.globalconfig.linkedinLink + this.globalconfig.linkedinId;
    this.currentYear = new Date(Date.now()).getFullYear();
  }

}
