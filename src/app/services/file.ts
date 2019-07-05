import { Folders } from './folders';

/* depict a data which can be a folder or a file */
export class File {
  private name: string;
  private files: File[] = new Array(); /* list of folder childs */
  private isFolder: boolean; /* folder or a file */
  private head: boolean; /* true if no parent */
  private last: boolean; /* true if it is the last child */
  private clicked: boolean; /* true if collapsed */

  /* how to sort two file */
  private static sortFiles(file1: File, file2: File): number {
    if (file1.isAFolder() && !file2.isAFolder()) {
      return -1;
    } else if (!file1.isAFolder() && file2.isAFolder()) {
      return 1;
    } else if (file1.getName() < file2.getName() ) {
      return -1;
    } else if (file1.getName() > file2.getName()) {
      return 1;
    }
    return 0;
  }

  constructor(theName: string, isAFolder: boolean) {
    this.name = theName;
    this.isFolder = isAFolder;
    this.head = true;
    this.last = true;
    this.clicked = false;
    Folders.getFiles().push(this);
    Folders.getFiles().sort(File.sortFiles);
  }

  /* add a file or folder to the array and sort it */
  addFile(file: File) {
    if (this.isAFolder()){
      file.head = false;
      this.files.push(file);
      this.files.sort(File.sortFiles);
      if (this.files.length > 1) {
        const lastFile: File = this.files.pop();
        lastFile.last = true;
        const beForeLastFile: File = this.files.pop();
        beForeLastFile.last = false;
        this.files.push(beForeLastFile);
        this.files.push(lastFile);
      }
    }
  }

  /* getters */
  isAFolder(): boolean { return this.isFolder; }
  getName(): string { return this.name; }
  childs(): File[] { return this.files; }
  isHead(): boolean { return this.head; }
  isLast(): boolean { return this.last; }
  setLast(isALast: boolean) { this.last = isALast; }
  isClicked(): boolean { return this.clicked; }
  setClicked(isClick: boolean) {this.clicked = isClick; }

}
