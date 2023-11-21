import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import "./modal.css"


const Test = ({children}) => {

  return ReactDOM.createPortal(
    <>
        <div className='modal-overlay'>
            <div className="modal-default">
                {children}
            </div>
        </div>
    </>,
    document.getElementById("modal")
  )
}

export default Test