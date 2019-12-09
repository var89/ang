import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from 'events';
import {MatDrawer, MatDrawerContent} from '@angular/material';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  items = [
    { icon : '',
      name:  'Subjects',
      values: ['Mathematics', 'Statistics', 'Computer science', 'Natural science', 'Social science', 'Humanities']
    },
    { icon : '',
      name: 'Languages',
      values: ['Русский', 'English']
    },
    { icon : '',
      name: 'Categories',
      values: ['Trending', 'Editors\' choice']
    }
  ];
  displaySideBar: boolean = false;
  @Output() sideBarStateChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  openClose(drawer: MatDrawer){
    drawer.toggle();
    this.displaySideBar=!this.displaySideBar;
    this.sideBarStateChange.emit(this.displaySideBar ? "true" : "false");
  }

}
