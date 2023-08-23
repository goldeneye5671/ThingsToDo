import React from 'react'
import { Link } from 'react-router-dom'

function ListCard({list}) {
  const listComponents = list.ThingsToDos.length ? list.ThingsToDos.map(bliss => <li>{bliss.thingName}</li>) : <h3>Nothing...yet...</h3>
  
    return (
    <Link className='card' to={`/lists/${list.id}`}>
        <div>
            {/* Name, User */}
            <h1>{list.listName}</h1>
            <h3>by {list.User.username}</h3>
        </div>
        <div>
            {/* Body: Desc, Some ToDos */}
            <p>{list.listDescription}</p>
            <ul>
                {listComponents}
            </ul>
        </div>
    </Link>
  )
}

export default ListCard
