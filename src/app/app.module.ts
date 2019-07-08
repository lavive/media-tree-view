import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { FolderComponent } from './folder/folder.component';
import { FormsModule } from '@angular/forms';
import { FoldersService } from './services/folders.service';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { SingleFolderComponent } from './single-folder/single-folder.component';
import { BuildFoldersComponent } from './build-folders/build-folders.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    FolderComponent,
    AuthComponent,
    SingleFolderComponent,
    BuildFoldersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FoldersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
