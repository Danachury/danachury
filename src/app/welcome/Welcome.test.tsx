import { render, screen } from '@testing-library/react'
import Welcome from './Welcome'
import React from 'react'

test('renders welcome message', () => {
  render(<Welcome/>)
  const linkElement = screen.getByText(/to my humble web page!/i)
  expect(linkElement).toBeInTheDocument()
})
