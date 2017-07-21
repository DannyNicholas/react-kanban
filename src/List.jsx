import React from 'react'
import Card from './Card'

const List = ( {id, title, cards} ) => {

    let cardList = cards.map((card) => {
        return <Card id={card.id}
            title={card.id}
            description={card.description}
            tasks={card.tasks} />
    })

    return (
        <div className="list">
            <h1>{title}</h1>
            {cardList}
        </div>
    )
}

export default List