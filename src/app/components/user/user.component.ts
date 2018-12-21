import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:String = 'Edd Feng'
  email:String = 'fengedd@gmail.com'
  githubLink:String = 'https://github.com/fengedd'
  linkedinLink:String = 'https://linkedin.com/in/fengedd'

  constructor() { }

  ngOnInit() {
  }

}
