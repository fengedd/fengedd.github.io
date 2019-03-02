import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalConfig } from '../../GlobalConfig';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private globalConfig: GlobalConfig
    ) {
    this.matIconRegistry.addSvgIconSet(
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/program_languages.svg')
    );

    this.domSanitizer.bypassSecurityTrustResourceUrl(globalConfig.githubPagesLink + 'assets/icons/program_languages.svg');
  }
}
