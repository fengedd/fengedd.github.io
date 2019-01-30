import { Component, OnInit } from '@angular/core';
// import { readFileSync } from 'fs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent implements OnInit {
  pdfSrc = 'http://kmmc.in/wp-content/uploads/2014/01/lesson2.pdf';
  constructor() { }
  ngOnInit() {
    /*
    const buf: Buffer = readFileSync('./resume.pdf');
    console.log(buf.readUInt8(0));
    */
//    console.log('hey');
  }

}
