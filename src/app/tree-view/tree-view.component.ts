import { Component, Input, OnInit } from '@angular/core';
import { BuildFoldersComponent } from '../build-folders/build-folders.component';


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
    this.headFiles = BuildFoldersComponent.get().getHeadFiles();
  }

  /* get all folders and files without parent */
  getHeadFiles(): File[] {
    return this.headFiles;
  }

  /* check if all folders are collapsed or tuck */
  isAllCollapsed(): boolean { return BuildFoldersComponent.get().getFolderService().isAllCollapsed(); }
  isAllTuck(): boolean { return BuildFoldersComponent.get().getFolderService().isAllTuck(); }

  /* collapse all folders */
  onCollapse() {
    BuildFoldersComponent.get().getFolderService().onCollapse();
  }

  /* uncollapse all folders */
  onUnCollapse() {
    BuildFoldersComponent.get().getFolderService().onUnCollapse();
  }
}
