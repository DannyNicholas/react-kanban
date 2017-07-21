import React from 'react'
import CheckList from './CheckList'

const Card = ( {id, title, description, tasks} ) => {
    return (
        <div className="card">
            <div className="card__title">{title}</div>
            <div className="card__details">
                {description}
                <CheckList
                    cardId={id}
                    tasks={tasks}
                />
            </div>
        </div>
    )
}

export default Card