import { Button, Form } from 'react-bootstrap'
import { SubmitHandler, useForm } from 'react-hook-form'

export interface Inputs {
  name: string
  email: string
  message: string
}

const ContactForm = ({ onSubmit }: { onSubmit: SubmitHandler<Inputs> }) => {

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <Form onSubmit={handleSubmit(onSubmit)} className="contact-form">

      <Form.Group controlId="Contact.Name" className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Name" {...register('name', { required: true })}/>
        {errors.name && <small className="text-danger">Please enter your name</small>}
      </Form.Group>

      <Form.Group controlId="Contact.Email" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="Enter email" {...register('email', {
          required: true,
          pattern: /(.+)@(.+){2,}\.(.+){2,}/
        })} />
        {errors.email?.type === 'required' && <small className="text-danger">Please enter your email</small>}
        {errors.email?.type === 'pattern' &&
            <small className="text-danger">Please make sure your email is valid</small>}
      </Form.Group>

      <Form.Group controlId="Contact.Message" className="mb-3">
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" rows={6}
                      placeholder="Enter a message" {...register('message', { required: true })} />
        {errors.message && <small className="text-danger">Leave a message</small>}
      </Form.Group>

      <Button variant="primary" type="submit">Send Message</Button>

    </Form>
  )
}

export default ContactForm
