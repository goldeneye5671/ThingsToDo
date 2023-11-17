import React from 'react'

function ListContainer({content, home}) {
  
    return (
		<div className={!home ? "main-card-container" : "main-card-container-horizontal"}>
			{content}
		</div>
    )
}

export default ListContainer
