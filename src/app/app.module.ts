import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { FolderComponent } from './folder/folder.component';
import { FormsModule } from '@angular/forms';
import { FoldersService } from './services/folders.service';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    FolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FoldersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
