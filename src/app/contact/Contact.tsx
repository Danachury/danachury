import React from 'react'

import './Contact.css'

export default function () {

  const onSubmit = (event: { code: string, ctrlKey: boolean }) => {
    if (event.code === 'Enter' && event.ctrlKey)
      console.log('yes is here!')
  }

  const sendMessage = () => console.log('Your message have been sent.')

  return <>
    You can contact with any of next channels:
    <ul>
      <li>+57 350 764-6399</li>
      <li>danachury@gmail.com</li>
    </ul>

    or if you wish typing a direct message:
    <form>
      <input type="text" placeholder="Your name"/>
      <input type="email" placeholder="Your email"/>
      <textarea placeholder="Type your message" onKeyUp={onSubmit}/>
      <button type="button" onClick={sendMessage}>Send</button>
    </form>
  </>
}
