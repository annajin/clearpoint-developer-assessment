/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import renderer, { act } from 'react-test-renderer'
import App from '../App'

describe('App tests', () => {
  const renderElement = async() => {
    await act(async () => render(<App />))
  }

  test('renders static text', async () => {
    await renderElement();

    const footerElement = screen.getByText(/clearpoint.digital/i)
    expect(footerElement).toBeInTheDocument()
    const requirementText = screen.getByText("Add the ability to add (POST) a Todo Item by calling the backend API")
    expect(requirementText).toBeInTheDocument()
    const addItemTitle = screen.getAllByText("Add Item")
    expect(addItemTitle.length).toBeGreaterThan(0)
  })

  test('should match snapshot', () => {
    const component = renderer.create(<App />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
