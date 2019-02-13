import { Pipe, PipeTransform } from '@angular/core';
import {IconService} from '../service/icon/icon.service';

@Pipe({
  name: 'githubProjects'
})
export class GithubProjectsPipe implements PipeTransform {

  constructor(private icService: IconService) {}
  
  transform(json: any): Object {
    const name = json.name;
    const html_url = json.html_url;
    const description = json.description;
    const created_at = new Date(json.created_at);
    const updated_at = new Date(json.updated_at);
    const git_url = json.git_url;
    const language = json.language;
    // TODO: Add date pipe short for created_at and updated_at
    console.log('Transforming ' + name);
    const result =
    `
    <div class="media">
    <img src="..." class="mr-3" alt="...">
    <mat-icon svgIcon="${language}"></mat-icon>
    
    <div class="media-body">
    <h5 class="mt-0" href=><a href="${html_url}">${name}</a> ${updated_at}</h5>
    ${description}
    ${git_url}
  </div>
  </div>
    `; 
    return result;
  }
}

