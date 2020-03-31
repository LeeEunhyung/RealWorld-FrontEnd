import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders elements', () => {
    const { getAllByText } = render(<App />)
    const element = getAllByText(/Conduit/i)
    expect(element).not.toBeNull()
})
