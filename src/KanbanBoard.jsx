import React from 'react'
import List from './List'

const KanbanBoard = ( {cards} ) => {
    return (
        <div classname="app">
            <List
                id='todo'
                title="To Do"
                cards={
                    cards.filter((card) => card.status === "todo")
                }
            />

            <List
                id='in-progress'
                title="In Progress"
                cards={
                    cards.filter((card) => card.status === "in-progress")
                }
            />

            <List
                id='done'
                title="Done"
                cards={
                    cards.filter((card) => card.status === "done")
                }
            />
        </div>
    )
}

export default KanbanBoard