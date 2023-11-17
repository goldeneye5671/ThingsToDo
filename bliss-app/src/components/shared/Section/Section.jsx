import React from 'react'
import Header from './headers/Header'
import ListContainer from './listContainer/ListContainer'
import PageNavigation from './pageNav/PageNavigation'

function Section({
  HeaderContent,
  ListContent,
  PageNavContent
}) {
  return (
    <div>
        <Header 
          title={<h1>Lorem Ipusm</h1>}
          description={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corporis ut quis at distinctio expedita corrupti placeat laboriosam voluptates nam optio aliquam sint, minus porro saepe impedit temporibus. Aperiam, obcaecati!</p>}
          actionButtons={undefined}
          searchBar={undefined}
        />
        <ListContainer />
        <PageNavigation />
    </div>
  )
}

export default Section
