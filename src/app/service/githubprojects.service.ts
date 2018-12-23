import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubprojectsService {

  githubUrl = 'https://api.github.com/users/fengedd/repos'
  constructor(private http: HttpClient) { 
    console.log('GithubProjectsService running...')
  }
  
  getGithubProjectsList() {
    // TODO , sorted?: string, direction?: string, type?: string
    console.log('Getting github projects list...')
    return this.http.get(this.githubUrl)
  }

}
