import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

  @Input() headFiles: any[];

  constructor() {
  }

  ngOnInit() {
  }

  /* get all folders and files without parent */
  getHeadFiles(): File[] {
    return this.headFiles;
  }

}
