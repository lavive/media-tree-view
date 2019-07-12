import { Folders } from './folders';
import { File } from './file';
import { IdFiles } from './id_files';
import { IdFile } from './id_files';
import data from './folders.json';

/* service treating files and folders */
export class FoldersService {

    /*private filesId: IdFiles = new IdFiles();*/

    /* build the folders tree from json file */
    buildFolders() {
        const allFiles = (<any>data).head;
        /*const idFiles: IdFiles = new IdFiles();*/
        const idFiles: File[] = new Array();
        while (allFiles.length > 0) {
            const file = allFiles.pop();
            let fileNode: File = null;
            /*if (idFiles.getFile(file.id) != null) {*/
            const fileTmp: File = idFiles.filter((f) => f.getId() === file.id).pop();
            if (fileTmp != null) {
                /*fileNode = idFiles.getFile(file.id);*/
                fileNode = fileTmp;
            } else {
                fileNode = new File(file.id, file.name, file.isAFolder);
            }
            for (const child of file.files) {
                const fileNodeChild: File = new File(child.id, child.name, child.isAFolder);
                if (child.isAFolder) {
                    allFiles.push(child);
                    /*idFiles.add(new IdFile(child.id, fileNodeChild));*/
                    idFiles.push(fileNodeChild);
                }
                fileNode.addFile(fileNodeChild);
                /*this.filesId.add(new IdFile(child.id, fileNodeChild));*/
            }
        }
        for (const file of Folders.getFiles()) {
            if (file.isAFolder()) {
                file.setClicked(false);
            }
        }
    }

    /* get folders and files without parent */
    getHeadFiles(): File[] {
      return Folders.getHeadFiles();
    }

    /* check if all folders are collapsed or tuck */
    isAllCollapsed(): boolean { return Folders.isAllCollapsed(); }
    isAllTuck(): boolean { return Folders.isAllTuck(); }

    /* collapse all folders */
    onCollapse() {
        for (const file of Folders.getFiles()) {
            if (file.isAFolder()) {
                file.setClicked(true);
            }
        }
    }

    /* uncollapse all folders */
    onUnCollapse() {
        for (const file of Folders.getFiles()) {
            if (file.isAFolder()) {
                file.setClicked(false);
            }
        }
    }

    /* get files with id */
    getFile(id: number): File {
        /*return this.filesId.getFile(id);*/
        return Folders.getFileById(id);
    }

}
