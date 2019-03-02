import { Component, OnInit } from '@angular/core';
import { faMobileAlt, faGlobe, faFileDownload} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {faLinkedinIn, faGithubAlt} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import resume from '../../../assets/resume/resume.json';
import { GlobalConfig } from '../../GlobalConfig';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent implements OnInit {
  src: string;
  summary = 'Summary';
  resume = resume;
  constructor(private globalConfig: GlobalConfig) {
    library.add(faMobileAlt, faEnvelope, faLinkedinIn, faGithubAlt, faGlobe, faFileDownload);
  }
  ngOnInit() {
    this.src = this.globalConfig.githubPagesLink + 'assets/resume/resume.pdf';
  }

}
