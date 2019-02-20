import { Component, OnInit } from '@angular/core';
import { faMobileAlt, faGlobe,  } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {faLinkedinIn, faGithubAlt} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import resume from '../../../assets/resume/resume.json';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent implements OnInit {
  src = '/assets/resume/resume.pdf';
  summary = 'Summary';
  resume = resume;
  constructor() {
    library.add(faMobileAlt, faEnvelope, faLinkedinIn, faGithubAlt, faGlobe);
  }
  ngOnInit() {
  }

}
