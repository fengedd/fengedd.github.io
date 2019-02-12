import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { GlobalConfig } from '../../GlobalConfig';
import { GithubprojectsService} from '../../service/githubprojects.service';


@Component({
  selector: 'app-githubprojectlist',
  templateUrl: './githubprojectlist.component.html',
  styleUrls: ['./githubprojectlist.component.css']
})
export class GithubprojectlistComponent implements OnInit {

  githubLink: String;
  githubService: GithubprojectsService;
  projectData: any;
  // tslint:disable-next-line:max-line-length
  constructor(private globalconfig: GlobalConfig, private githubProjectsService: GithubprojectsService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons8-java-filled.svg'));
  }

  ngOnInit() {
    this.githubLink = this.globalconfig.githubLink + this.globalconfig.githubId;
    this.githubService = this.githubProjectsService;
    this.showProjectsList();
  }

  // TODO: See testing guide to test Dependency Injection (e.g. mock service)
  showProjectsList() {
    this.githubService.getGithubProjectsList()
      .subscribe((data) => {
        this.projectData = data;
      });
  }


}
