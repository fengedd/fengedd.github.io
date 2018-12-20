import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class AppComponent {
  author = 'Edd Feng';
  content: String;
  footnotes: String;

  public constructor(content: String, footnotes: String) {
    this.content = content;
    this.footnotes = footnotes;
  }

  

}
