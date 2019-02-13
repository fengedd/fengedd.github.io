import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubprojectsService {
  
  githubRepoUrl = 'https://api.github.com/users/fengedd/repos?sort=updated';
  // githubReadmeUrl = 'https://api.github.com/users/fengedd/repos/readme';
  constructor(private http: HttpClient) {
    console.log('GithubProjectsService running...');
  }

  getGithubProjectsList() {
    // TODO , sorted?: string, direction?: string, type?: string
    console.log('Getting github projects list...');
    return this.http.get(this.githubRepoUrl);
  }
}
