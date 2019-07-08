import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BuildFoldersComponent } from '../build-folders/build-folders.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})

export class FolderComponent implements OnInit {

  @Input() folderNode: any;
  private last: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.last = this.isFolder() && this.folderNode.isLast();
  }


  isFolder() { return this.folderNode.isAFolder(); }
  getName() { return this.folderNode.getName(); }
  getChilds() { return this.folderNode.childs(); }
  isClicked() { return this.folderNode.isClicked(); }
  isLast() { return this.last; } /* it's a folder and it is the last child (class css is different)*/
  isLeaf() { return this.folderNode.isLeaf(); } /* no child */

  /* call when mouse click */
  onActiveFolder(event: Event) {
    if (!this.isLeaf()) {
      this.folderNode.setClicked(!this.folderNode.isClicked());
    }
  }

  /* call when mouse click */
  onShowFolder(event: Event) {
    BuildFoldersComponent.get().getFolderService();
    this.router.navigate(['single-folder/5']);
  }

}


