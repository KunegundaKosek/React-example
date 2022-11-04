import React, { Component } from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'

class ToDoApp extends Component {

    state = {
        tasks: [
            {
                id: 0,
                text: 'Zagrać w minectafta',
                date: '2022-12-31',
                important: false,
                active: true,
                finishDate: null
            },
            {
                id: 1,
                text: 'Posprzątać w domu',
                date: '2022-11-10',
                important: false,
                active: true,
                finishDate: null
            },
            {
                id: 2,
                text: 'Naprawić samochód',
                date: '2022-11-25',
                important: true,
                active: true,
                finishDate: null
            },
            {
                id: 3,
                text: 'Schudnąć 5kg',
                date: '2023-03-07',
                important: true,
                active: true,
                finishDate: null
            },
            {
                id: 4,
                text: 'Nauczyć się React',
                date: '2022-11-29',
                important: true,
                active: true,
                finishDate: null
            },
            {
                id: 5,
                text: 'Napisać stronę internetową',
                date: '2022-12-15',
                important: true,
                active: true,
                finishDate: null
            },
            {
                id: 6,
                text: 'Kupić kwiaty',
                date: '2022-05-11',
                important: false,
                active: true,
                finishDate: null
            },
            {
                id: 7,
                text: 'Pomalować ściany',
                date: '2022-05-11',
                important: false,
                active: true,
                finishDate: null
            },
        ]
    }

    deleteTask = (id) => {
        console.log("delete elementu od id: " + id);
    }
    changeTaskStatus = (id) => {
        console.log("change elementu od id: " + id);
    }

    render() {
        return (
            <div className='app'>
                <hr />
                <h2 className='project'>Projekt 17</h2>
                TODO app
                <AddTask />
                <TaskList
                    tasks={this.state.tasks}
                    delete={this.deleteTask}
                    change={this.changeTaskStatus}
                />
            </div>
        )
    }
}
export default ToDoApp