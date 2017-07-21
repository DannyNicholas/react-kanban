import React from 'react'

const CheckList = ( {cardId, tasks} ) => {

    let taskList = tasks.map((task) => (
        <li className="checklist__task">
            <input type="checkbox" defaultChecked={task.done} />
            {task.name}
            <a href="#" className="checklist__task--remove" />
        </li>
    ))

    return (
        <div className="checklist">
            <ul>{taskList}</ul>
        </div>
    )
}

export default CheckList