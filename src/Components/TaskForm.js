import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  task: "",
  hr: "",
  type: "entry",
};
export const TaskForm = ({ addTask }) => {
  const [form, setForm] = useState(initialState);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTask({ ...form, id: uuidv4() });
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row className="g-3">
          <Col md="7">
            <Form.Control
              name="task"
              placeholder="Task"
              required
              onChange={handleOnChange}
            />
          </Col>
          <Col md="3">
            <Form.Control
              name="hr"
              placeholder="hrs"
              type="number"
              required
              onChange={handleOnChange}
            />
          </Col>
          <Col md="2">
            <Button variant="success" type="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
