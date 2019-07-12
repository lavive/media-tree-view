import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BuildFoldersComponent } from '../build-folders/build-folders.component';

@Component({
  selector: 'app-single-folder',
  templateUrl: './single-folder.component.html',
  styleUrls: ['./single-folder.component.scss']
})
export class SingleFolderComponent implements OnInit {

  private name: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.params['id'];
    this.name = BuildFoldersComponent.get().getFolderService().getFile(id).getName();
  }

  getName(): string {
    return this.name;
  }

}
