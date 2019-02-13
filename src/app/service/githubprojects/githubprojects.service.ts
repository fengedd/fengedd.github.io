import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubprojectsService {
  // TODO: Move project service into its own folder.
  githubRepoUrl = 'https://api.github.com/users/fengedd/repos?sort=updated';

  constructor(private http: HttpClient) {
    console.log('GithubProjectsService running...');
  }

  getGithubProjectsList() {
    console.log('Getting github projects list...');
    return this.http.get(this.githubRepoUrl);
  }
}
