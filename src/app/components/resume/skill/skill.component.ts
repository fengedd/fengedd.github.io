import { Input, Component, OnInit } from '@angular/core';
import {Skill} from './skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['../resume.component.css']
})
export class SkillComponent implements OnInit {

  width: string;
  constructor() { }
  @Input() skill: Skill;
  
  ngOnInit() {
    this.width = this.skill.level;
  }

}
