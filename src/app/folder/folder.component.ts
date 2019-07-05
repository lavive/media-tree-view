import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})

export class FolderComponent implements OnInit {

  @Input() folderNode: any;
  private last: boolean;

  constructor() {
  }

  ngOnInit() {
    this.last = this.isFolder() && this.folderNode.isLast();
  }


  isFolder() { return this.folderNode.isAFolder(); }
  getName() { return this.folderNode.getName(); }
  getChilds() { return this.folderNode.childs(); }
  isClicked() { return this.folderNode.isClicked(); }
  isLast() { return this.last; } /* it's a folder and it is the last child (class css is different)*/
  isLeaf() { return this.folderNode.childs().length === 0; } /* no child */

  /* call when mouse click */
  onActiveFolder(event: Event) {
    if (!this.isLeaf()) {
      this.folderNode.setClicked(!this.folderNode.isClicked());
    }
  }

}


