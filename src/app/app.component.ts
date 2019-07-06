import { Component, OnInit } from '@angular/core';

import { FoldersService } from './services/folders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   private auth = false;
   private headFiles: any[];

   constructor(private foldersService: FoldersService) {
    setTimeout(
      () => {
        this.auth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.foldersService.buildFolders();
    this.headFiles = this.foldersService.getHeadFiles();
  }

  /* get the files and folders without parent */
  getHeadFiles() {
    return this.headFiles;
  }

  isAuth(): boolean { return this.auth; }

  /* check if all folders are collapsed or tuck */
  isAllCollapsed(): boolean { return this.foldersService.isAllCollapsed(); }
  isAllTuck(): boolean { return this.foldersService.isAllTuck(); }

  /* collapse all folders */
  onCollapse() {
    this.foldersService.onCollapse();
  }

  /* uncollapse all folders */
  onUnCollapse() {
    this.foldersService.onUnCollapse();
  }


}
