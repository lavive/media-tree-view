import { File } from './file';

/* array of folders and files sorted */
export class Folders {

  private static folders: File[] = new Array();

  static getFiles(): File[] { return this.folders; }

  /* check if all folders are collapsed */
  static isAllCollapsed(): boolean {
    for (const file of Folders.getFiles()) {
      if (file.isAFolder()) {
        if (!file.isClicked()) {
          return false;
        }
      }
    }
    return true;
  }

  /* check if all folders are tuck */
  static isAllTuck(): boolean {
    for (const file of Folders.getFiles()) {
      if (file.isAFolder()) {
        if (file.isClicked()) {
          return false;
        }
      }
    }
    return true;
  }

  /* get all folders and files without parent */
  static getHeadFiles(): File[] {
    const tmpFiles: File[] = new Array();
    for(const file of this.folders){
      if (file.isHead()){
        file.setLast(false);
        tmpFiles.push(file);
      }
    }
    if (tmpFiles.length > 1) {
      const lastFile: File = tmpFiles.pop();
      lastFile.setLast(true);
      const beForeLastFile: File = tmpFiles.pop();
      beForeLastFile.setLast(false);
      tmpFiles.push(beForeLastFile);
      tmpFiles.push(lastFile);
    }

    return tmpFiles;
  }

}
