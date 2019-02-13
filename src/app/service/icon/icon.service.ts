import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    console.log('Starting Icon Service...');
    this.matIconRegistry.addSvgIconSet(
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/program_languages.svg')
    );

    this.matIconRegistry.addSvgIconSet(
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/media.svg')
    );
  }
}
