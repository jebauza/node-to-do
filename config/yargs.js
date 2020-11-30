const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of task for to do'
}

const completed = {
    alias: 'c',
    default: true,
    desc: 'Mark the task as completed or pending'
}

const argv = require('yargs')
    .command('create', 'Create to do', {
        description
    })
    .command('list', 'Show all task for to do', {
        description,
        completed
    })
    .command('update', 'Update a task for to do', {
        description,
        completed
    })
    .command('delete', 'Delete a task for to do', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
};