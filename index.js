import { program } from 'commander';
import { EntityCreator } from './lib/entity/entity-creator.js';
import { RepositoryCreator } from './lib/repository/repository-creator.js';
// Comandos da linha de comando
program.version('1.0.0');

program
  .command('create-repository <class-name>')
  .description('Cria um repositório para a classe especificada.')
  .action((className) => {
    RepositoryCreator.createRepository(className);
    EntityCreator.createEntity(className);
  });

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
