import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'githubProjects'
})
export class GithubProjectsPipe implements PipeTransform {
  
  transform(json: any): any {
    const name = json.name;
    const html_url = json.html_url;
    const description = json.description;
    const created_at = json.created_at;
    const updated_at = json.updated_at;
    const git_url = json.git_url;
    const language = json.language;
    const result = 
    `
    <ul>
    <li><b>${name}</b> </li>
    <li><b>${html_url}</b> </li>    
    <li><b>${created_at}</b> </li>
    <li><b>${updated_at}</b> </li>
    <li><b>${git_url}</b> </li>
    <li><b>${language}</b> </li>
    </ul>
    `
    
    return result;
    
  }
}

