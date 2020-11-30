const fs = require('fs');

let listToDo = [];

const saveDB = () => {
    let data = JSON.stringify(listToDo);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('Dont save', err);
    });
};

const loadDB = () => {

    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
};

const create = (description) => {
    loadDB();

    let toDo = {
        description,
        completed: false
    };

    listToDo.push(toDo);
    saveDB();

    return toDo;
};

const getListTasks = () => {
    loadDB();

    return listToDo;
};

const update = (description, completed = true) => {
    loadDB();

    let index = listToDo.findIndex(task => task.description == description);

    if (index >= 0) {
        try {
            listToDo[index].completed = typeof completed !== 'string' ? completed : JSON.parse(completed.toLowerCase());
            saveDB();
            return true;
        } catch (error) {
            console.error(error.message);
            return false;
        }
    } else {
        return false;
    }
};

const destroy = (description) => {
    loadDB();

    let newlistToDo = listToDo.filter(task => task.description != description);
    if (newlistToDo.length === listToDo.length - 1) {
        listToDo = newlistToDo;
        saveDB();
        return true;
    } else {
        return false;
    }
};

module.exports = {
    create,
    getListTasks,
    update,
    destroy
};