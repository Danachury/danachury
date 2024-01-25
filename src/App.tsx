import { Overview } from './overview/pages'
import { Navbar } from './shared/components'
import { Route, Routes } from 'react-router-dom'
import { Contact } from './contact/pages'

const App = () => {

  return (
    <>
      <Navbar/>
      <div className="container d-flex justify-content-center">
        <Routes>
          <Route path="/" element={<Overview/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
