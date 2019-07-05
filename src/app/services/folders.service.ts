import { Folders } from './folders';
import { File } from './file';
import { IdFiles } from './id_files';
import { IdFile } from './id_files';
import data from './folders.json';

/* service treating files and folders */
export class FoldersService {

    /* build the folders tree from json file */
    buildFolders() {
        const allFiles = (<any>data).head;
        const idFiles: IdFiles = new IdFiles();
        while (allFiles.length > 0) {
            const file = allFiles.pop();
            let fileNode: File = null;
            if (idFiles.get(file.id) != null) {
                fileNode = idFiles.get(file.id);
            } else {
                fileNode = new File(file.name, file.isAFolder);
            }
            for (const child of file.files) {
                const fileNodeChild: File = new File(child.name, child.isAFolder);
                if (child.isAFolder) {
                    allFiles.push(child);
                    idFiles.add(new IdFile(child.id, fileNodeChild));
                }
                fileNode.addFile(fileNodeChild);
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

}
