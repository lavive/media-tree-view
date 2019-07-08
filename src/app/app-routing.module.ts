import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeViewComponent } from './tree-view/tree-view.component';
import { FolderComponent } from './folder/folder.component';
import { AuthComponent } from './auth/auth.component';
import { SingleFolderComponent } from './single-folder/single-folder.component';
import { BuildFoldersComponent } from './build-folders/build-folders.component';

const routes: Routes = [
  { path: 'tree-view', component: TreeViewComponent },
  { path: 'single-folder/:id', component: SingleFolderComponent },
  { path: 'build-folder', component: BuildFoldersComponent },
  { path: '', component: AuthComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
