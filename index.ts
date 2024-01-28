import knexFactory from 'knex';
import { program } from 'commander';
import { todoController } from './main';

function main() {
  // init db
  // init cli

  program
    .name('Todo CLI')
    .description(
      'Simple application for creating and deleting Todos via a CLI'
    );

  program
    .command('create <title> <desc> <priority>')
    .description('Create a new todo')
    .action(async (title, description, priority) => {
      try {
        const result = await todoController.handleCreateTodo({
          description,
          priority,
          title,
        });
        console.log(`Inserted todo: ${JSON.stringify(result)}`);
      } catch (error: any) {
        console.error(`Error inserting todo: ${error.message}`);
      }
    });

  program.parse();
}

main();
