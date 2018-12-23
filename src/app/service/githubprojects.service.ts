import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubprojectsService {

  // TODO: include option to query the service with different parameters for github API
  githubUrl = 'https://api.github.com/users/fengedd/repos?sort=updated'
  constructor(private http: HttpClient) { 
    console.log('GithubProjectsService running...')
  }
  
  getGithubProjectsList() {
    // TODO , sorted?: string, direction?: string, type?: string
    console.log('Getting github projects list...')
    return this.http.get(this.githubUrl)
  }

}
