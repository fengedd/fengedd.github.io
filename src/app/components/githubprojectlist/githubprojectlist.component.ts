import { Component, OnInit } from '@angular/core';
import { GlobalConfig } from 'src/app/GlobalConfig';
import { GithubprojectsService} from 'src/app/service/githubprojects.service';


@Component({
  selector: 'app-githubprojectlist',
  templateUrl: './githubprojectlist.component.html',
  styleUrls: ['./githubprojectlist.component.css']
})
export class GithubprojectlistComponent implements OnInit {

  githubLink: String;
  githubService: GithubprojectsService;
  projectData: any;
  constructor(private globalconfig: GlobalConfig, private githubProjectsService: GithubprojectsService) {     
  }

  ngOnInit() {
    this.githubLink = this.globalconfig.githubLink;
    this.githubService = this.githubProjectsService;
    this.showProjectsList();
  }

  showProjectsList() {
    this.githubService.getGithubProjectsList()
      .subscribe((data) => {        
        this.projectData = data
      });
      
  }

}
