import { program } from "commander";
import { RepositoryLib } from "./lib/repository/repository.lib.js";
import { ServiceLib } from "./lib/service/service.lib.js";
import { ControllerLib } from "./lib/controller/controller.lib.js";
// Comandos da linha de comando
program.version("1.0.0");

program
  .command("create-repository <class-name>")
  .description("Cria um repositório para a classe especificada.")
  .action((className) => {
    RepositoryLib.createRepository(className);
  });

program
  .command("create-service <class-name>")
  .description("Cria um service para a classe especificada.")
  .action((className) => {
    ServiceLib.createService(className);
  });

program
  .command("create-controller <class-name>")
  .description("Cria um controller para a classe especificada.")
  .action((className) => {
    ControllerLib.createController(className);
  });

  program
  .command('validate-repository <class-name>')
  .description('Valida o repositório e atualiza o serviço com os métodos encontrados.')
  .action((className) => {
    const methods = RepositoryLib.validateRepositoryAndGenerateMethods(className);
    ServiceLib.updateServiceWithRepositoryMethods(className, methods);
  });

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
