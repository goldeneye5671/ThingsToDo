import React from 'react'

function Header({title, description, searchBar, actionButtons}) {
  return (
    <div className='home-main-header'>
      <div className='home-content'>
        {title}
        
        {searchBar && (
          <div>
            {searchBar}
          </div>
        )}
        {description && [description]}
        {actionButtons && [actionButtons]}

      </div>
    </div>
  )
}

export default Header
