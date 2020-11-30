const argv = require('./config/yargs').argv;
const colors = require('colors');
const toDo = require('./to-do/to-do');

let command = argv._[0];

switch (command) {
    case 'create':
        let task = toDo.create(argv.description);
        break;

    case 'list':
        let list = toDo.getListTasks();

        for (const task of list) {
            console.log('============Por Hacer============'.green);
            console.log(task.description);
            console.log('Estado: ', task.completed);
            console.log('================================='.green);
        }
        break;

    case 'update':
        let updated = toDo.update(argv.description, argv.completed);
        break;

    case 'delete':
        let destroy = toDo.destroy(argv.description);
        console.log(destroy);
        break;

    default:
        console.log('Command is not valid');
        break;
}