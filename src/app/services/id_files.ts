import { File } from './file';

/* map a file to an id */
export class IdFile {

  private id: number;
  private file: File;

  constructor(theId: number, theFile: File) {
    this.id = theId;
    this.file = theFile;
  }

  getId(): number {
    return this.id;
  }

  getFile(): File {
    return this.file;
  }

}

export class IdFiles {

  private idfiles: IdFile[];

  constructor() {
    this.idfiles = new Array();
  }

  add(theIdFile: IdFile) {
    if(theIdFile != null) {
      this.idfiles.push(theIdFile);
    }
  }

  getFile(id: number): File {
    for (const idfile of this.idfiles) {
      if (idfile.getId() === id) {
        return idfile.getFile();
      }
    }
    return null;
  }

}





