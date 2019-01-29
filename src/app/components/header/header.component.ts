import { Component, OnInit } from '@angular/core';
import { GlobalConfig } from '../../GlobalConfig';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: String;
  constructor(private globalconfig: GlobalConfig) {
  }

  ngOnInit() {
    this.name = this.globalconfig.name;
  }

}
