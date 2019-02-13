import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'githubProjects'
})
export class GithubProjectsPipe implements PipeTransform {

  transform(json: any): Object {
    const name = json.name;
    const html_url = json.html_url;
    const description = json.description;
    const created_at = new Date(json.created_at);
    const updated_at = new Date(json.updated_at);
    const git_url = json.git_url;
    const language = json.language;
    // TODO: Add date pipe short for created_at and updated_at
    
    const result =
    `
    <div class="media">
  <img src="..." class="mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0" href=><a href="${html_url}">${name}</a> ${updated_at}</h5>
    ${description}
    ${git_url}
    ${language}
  </div>
  </div>
    
    
    `;
   /* 
   const result = {
     name,
     html_url,
     description,
     created_at,
     updated_at,
     git_url,
     language
   };
   */

    return result;
  }
}

