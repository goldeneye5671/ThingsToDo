import React from 'react'

function Header({title, description, searchBar, actionButtons}) {
  return (
    <div style={{
      position: "sticky",
      top: 0,
      zIndex: 1
    }} className='home-main-header'>
      <div className='home-content'>
        {title}
        
        {searchBar && (
          <div>
            {searchBar && searchBar}
          </div>
        )}
        {description && [description]}
        {actionButtons && [actionButtons]}

      </div>
    </div>
  )
}

export default Header
