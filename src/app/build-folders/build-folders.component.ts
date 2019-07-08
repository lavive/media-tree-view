import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { FoldersService } from '../services/folders.service';

@Component({
  selector: 'app-build-folders',
  templateUrl: './build-folders.component.html',
  styleUrls: ['./build-folders.component.scss']
})

/* build the tre view */
export class BuildFoldersComponent implements OnInit {

  private static instance: BuildFoldersComponent;
  private headFiles: any[];

  static get(): BuildFoldersComponent {
    return BuildFoldersComponent.instance;
  }

  constructor(private foldersService: FoldersService, private router: Router) {
    if (BuildFoldersComponent.instance == null) {
      BuildFoldersComponent.instance = this;
    }
  }

  ngOnInit() {
  }

  /* build the tree view */
  onBuild() {
    this.foldersService.buildFolders();
    this.headFiles = this.foldersService.getHeadFiles();
    this.router.navigate(['tree-view']);
  }

  /* get the files and folders without parent */
  getHeadFiles() {
    return this.headFiles;
  }

  /* get the folder service */
  getFolderService(): FoldersService {
    return this.foldersService;
  }

}
