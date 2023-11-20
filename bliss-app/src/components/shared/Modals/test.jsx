import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const styles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: 'blue',
    padding: "50px",
    zIndex: 1000,
    width: "80%",
    height: "80svh"
}

const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0, 0.05)",
    zIndex: 1000
}

const Test = ({open, children, onClose}) => {
    if (!open) return null;

  return ReactDOM.createPortal(
    <>
        <div style={overlay}>
            <div style={styles}>
                {children}
                <button onClick={onClose}>close</button>
            </div>
        </div>
    </>,
    document.getElementById("modal")
  )
}

export default Test