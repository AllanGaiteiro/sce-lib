import shell from "shelljs";

export class FileLib {
  static createFile(repoDirPath, repoFileName, repoStr) {
    shell.mkdir("-p", repoDirPath);
    shell.touch(`${repoDirPath}${repoFileName}`);
    shell.ShellString(repoStr).to(`${repoDirPath}${repoFileName}`);
  }
}
