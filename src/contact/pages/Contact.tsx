import { SubmitHandler } from 'react-hook-form'
import { ContactForm, Inputs } from '../components'
import { Card } from 'react-bootstrap'

import './Contact.css'

const Contact = () => {

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.table(data)
  }

  return (
    <Card>
      <h1>Contact</h1>
      <ContactForm onSubmit={onSubmit}/>
    </Card>
  )
}

export default Contact
