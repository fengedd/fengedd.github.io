import { Component, OnInit } from '@angular/core';
import { GlobalConfig } from '../../GlobalConfig';
import { GithubprojectsService} from '../../service/githubprojects.service';
import { IconService } from '../../service/icon/icon.service';


@Component({
  selector: 'app-githubprojectlist',
  templateUrl: './githubprojectlist.component.html',
  styleUrls: ['./githubprojectlist.component.css']
})
export class GithubprojectlistComponent implements OnInit {

  githubLink: String;
  githubService: GithubprojectsService;
  iconService: IconService;
  projectData: any;
  constructor(private globalconfig: GlobalConfig, private ghService: GithubprojectsService, private icService: IconService) {}

  ngOnInit() {
    this.githubLink = this.globalconfig.githubLink + this.globalconfig.githubId;
    this.githubService = this.ghService;
    this.iconService = this.icService;
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
