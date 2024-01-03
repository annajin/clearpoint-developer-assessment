import { Button, Container, Row, Col, Form, Stack } from 'react-bootstrap'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import TodoListService from '../services/TodoListService'
import ErrorHelper from '../helpers/ErrorHelper'

export default function AddItemContent({ items, setItems }) {
  const [description, setDescription] = useState('')
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }
  const toDoService = new TodoListService()

  async function handleAdd() {
    try {
      const res = await toDoService.postTodoItem({ id: uuidv4(), description: description })
      // add the new item into the list
      setItems([...items, res])
    } catch (error) {
      ErrorHelper.showError(error)
    }
  }

  function handleClear() {
    setDescription('')
  }

  return (
    <Container>
      <h1>Add Item</h1>
      <Form.Group as={Row} className="mb-3" controlId="formAddTodoItem">
        <Form.Label column sm="2">
          Description
        </Form.Label>
        <Col md="6">
          <Form.Control
            type="text"
            placeholder="Enter description..."
            value={description}
            onChange={handleDescriptionChange}
            data-testid="text-input"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 offset-md-2" controlId="formAddTodoItem">
        <Stack direction="horizontal" gap={2}>
          <Button variant="primary" disabled={description === ''} onClick={() => handleAdd()} data-testid="add-button">
            Add Item
          </Button>
          <Button variant="secondary" onClick={() => handleClear()} data-testid="clear-button">
            Clear
          </Button>
        </Stack>
      </Form.Group>
    </Container>
  )
}
