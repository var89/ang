import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer ) {}
  currentLanguage = "English";

  ngOnInit() {
    this.matIconRegistry.addSvgIcon("search-icon", this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/svg/search-icon.svg"));
    this.matIconRegistry.getNamedSvgIcon("search-icon");
  }




}
