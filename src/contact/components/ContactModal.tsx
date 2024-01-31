import { Modal } from 'react-bootstrap'
import { useState } from 'react'
import { ContactForm, Inputs } from './index.ts'
import { SubmitHandler } from 'react-hook-form'
import { IconButton } from '../../shared/components'

import './ContactModal.css'

const ContactModal = () => {

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.table('Todo: Connect to mailing service')
    console.table(data)
  }

  const [show, setShow] = useState(false)

  const onClose = () => setShow(false)
  const onShow = () => setShow(true)

  return (
    <>
      <IconButton iconName={'ChatRightTextFill'} onClick={onShow}/>

      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ContactForm onSubmit={onSubmit}/>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ContactModal
