import React from 'react';
import { Button, Table } from 'react-bootstrap'

import ErrorHelper from '../helpers/ErrorHelper'
import TodoListService from '../services/TodoListService'

export default function TodoItemsTable({ items, setItems }) {
  const toDoService = new TodoListService()

  async function getItems() {
    try {
      const todoItems = await toDoService.getAllTodoItems()
      setItems(todoItems)
    } catch (error) {
      ErrorHelper.showError(error)
    }
  }

  async function handleMarkAsComplete(item) {
    try {
      item.isCompleted = true
      await toDoService.markTodoItemCompleted(item)
      setItems(items.filter((i) => i.id !== item.id))
    } catch (error) {
      ErrorHelper.showError(error)
    }
  }
  return (
    <>
      <h1>
        Showing {items.length} Item(s){' '}
        <Button variant="primary" className="pull-right" onClick={() => getItems()} data-testid="refresh-button">
          Refresh
        </Button>
      </h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.description}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleMarkAsComplete(item)} data-testid={"complete-button-" + index}>
                  Mark as completed
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
