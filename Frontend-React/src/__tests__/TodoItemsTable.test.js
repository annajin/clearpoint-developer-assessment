import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import TodoItemsTable from '../components/TodoItemsTable'

describe('Add Item Content tests', () => {
  const items = [
    {
      id: '71249ab3-783e-4b42-a042-82ddfce6f56c',
      description: '123',
      isCompleted: false,
    },
    {
      id: '1795c086-967d-43de-8e05-4c5c08be5da9',
      description: 'grocery',
      isCompleted: false,
    },
    {
      id: '442052e4-b76d-4859-a4da-a5fa987fc9ab',
      description: 'gym',
      isCompleted: false,
    },
  ]

  test('renders table correctly', () => {
    render(<TodoItemsTable items={items} setItems={() => {}} />)

    const tableElement = screen.getByRole('table')
    expect(tableElement).toBeInTheDocument()

    const item1Id = screen.getByText('71249ab3-783e-4b42-a042-82ddfce6f56c')
    expect(item1Id).toBeInTheDocument()
    const item2Description = screen.getByText('grocery')
    expect(item2Description).toBeInTheDocument()
    const item3Description = screen.getByText('gym')
    expect(item3Description).toBeInTheDocument()
  })

  test('renders buttons correctly', () => {
    render(<TodoItemsTable items={[]} setItems={() => {}} />)
    expect(screen.getByTestId('refresh-button')).not.toBeDisabled()
  })

  test('click on mark as completed button, item should be removed', async () => {
    const mockSetItems = jest.fn()
    render(<TodoItemsTable items={items} setItems={mockSetItems} />)

    const markAsCompletedButton = screen.getByTestId('complete-button-0')
    fireEvent.click(markAsCompletedButton)
    await waitFor(() => {
      expect(mockSetItems).toHaveBeenCalledTimes(1)
    })

    // the first item 123 should be removed
    await waitFor(() => {
      expect(mockSetItems).toHaveBeenCalledWith([
        {
          id: '1795c086-967d-43de-8e05-4c5c08be5da9',
          description: 'grocery',
          isCompleted: false,
        },
        {
          id: '442052e4-b76d-4859-a4da-a5fa987fc9ab',
          description: 'gym',
          isCompleted: false,
        },
      ])
    })
  })
})
