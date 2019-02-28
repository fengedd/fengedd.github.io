import { Component, OnInit } from '@angular/core';
import { GlobalConfig } from '../../GlobalConfig';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  name: string;
  public isCollapsed = true;

  constructor(private globalConfig: GlobalConfig) { }

  ngOnInit() {
    this.name = this.globalConfig.name;
  }

}
