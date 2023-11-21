import React from 'react'
import Header from '../Section/headers/Header'

function BaseForm({title, description, children, onSubmit, onSumbitText, onClose, onCloseText}) {
  return (
    <form onSubmit={onSubmit}>
        <Header title={title} description={description}/>
        {children}
        <button type='submit'>{onSumbitText}</button>
        <button onClick={onClose}>{onCloseText}</button>
    </form>
  )
}

export default BaseForm