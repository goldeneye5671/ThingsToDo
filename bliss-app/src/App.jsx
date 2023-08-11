import { useState } from 'react'
import './App.css'
import BusinessForm from './components/business/business-create-form'
import BusinessList from './components/business/business-list'

function App() {

  const [blVisibe, setBlVisible] = useState(false)
  const [addFormVisible, setAddFormVisible] = useState(false)

  const onBlVisibleButtonClick = (e) => {
    e.preventDefault()
    setBlVisible(!blVisibe)
  }
  const onAddButtonClick =(e) => {
    e.preventDefault()
    setAddFormVisible(!addFormVisible)
  }

  return (
    <>
      <button onClick={onAddButtonClick}>{addFormVisible ? "cancel":"Add Business" }</button>
      {addFormVisible && <BusinessForm />}

      <button onClick={onBlVisibleButtonClick}>{blVisibe ? "hide Businesses" : "Show Businesses"}</button>
      {blVisibe && <BusinessList />}
    </>
  )
}

export default App
