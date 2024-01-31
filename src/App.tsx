import { Overview } from './overview/pages'
import { Navbar } from './shared/components'
import { Route, Routes } from 'react-router-dom'
import { ContactModal } from './contact/components'

const App = () => {

  return (
    <>
      <Navbar/>
      <div className="container d-flex justify-content-center">
        <Routes>
          <Route path="/" element={<Overview/>}/>
        </Routes>
      </div>
      <ContactModal/>
    </>
  )
}

export default App
