import { Route, Routes } from 'react-router-dom'
import BlissList from './components/BlissList/BlissList'

function App() {

  return (
    <Routes>
      <Route path='/' element={<BlissList />}></Route>
    </Routes>
  )
}

export default App
