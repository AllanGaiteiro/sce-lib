import shell from "shelljs";

export class FileLib {
  static createFile(repoDirPath, repoFileName, repoStr) {
    const filePath = `${repoDirPath}${repoFileName}`;

    if (shell.test("-f", filePath)) {
      const existingContent = shell.cat(filePath).toString();
      if (existingContent === repoStr) {
        console.warn(
          `O arquivo ${filePath} já existe e é igual ao conteúdo que seria criado.`
        );
        return;
      }
    } else {
      shell.mkdir("-p", repoDirPath);
    }

    shell.touch(filePath);
    shell.ShellString(repoStr).to(filePath);
    console.log(`Arquivo ${filePath} criado com sucesso!`);
  }
}
