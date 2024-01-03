import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import AddItemContent from '../components/AddItemContent'

describe('Add Item Content tests', () => {
  test('renders Add Item heading', () => {
    render(<AddItemContent items={[]} setItems={() => {}} />)

    const headingElement = screen.getAllByText('Add Item')
    expect(headingElement.length).toBeGreaterThan(0)
  })

  test('renders buttons correctly', () => {
    render(<AddItemContent items={[]} setItems={() => {}} />)

    expect(screen.getByTestId('add-button')).toBeDisabled()
    expect(screen.getByTestId('clear-button')).not.toBeDisabled()
  })

  test('adds item and clears input correctly', async () => {
    const mockSetItems = jest.fn()
    render(<AddItemContent items={[]} setItems={mockSetItems} />)

    const descriptionInput = screen.getByTestId('text-input')
    const addButton = screen.getByTestId('add-button')
    const clearButton = screen.getByTestId('clear-button')

    fireEvent.change(descriptionInput, { target: { value: 'Test' } })

    expect(screen.getByTestId('add-button')).not.toBeDisabled()
    fireEvent.click(addButton)

    await waitFor(() => {
        expect(mockSetItems).toHaveBeenCalled();
    });

    fireEvent.click(clearButton)
    expect(descriptionInput.value).toBe('')
  })
})
