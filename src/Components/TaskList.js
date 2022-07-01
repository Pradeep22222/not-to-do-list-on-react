import React from "react";
import { Form, Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
export const TaskList = ({
  title,
  arrow,
  className,
  list = [],
  switchTask,
  handleOnCheck,
  name,
  ids,
}) => {
  console.log(list);
  return (
    <div className="mt-3">
      <h2 className="text-center ">{title}</h2>

      <Table striped className={className}>
        <thead>
          <tr>
            <th>
              <Form.Check
                type="checkbox"
                value={name}
                onChange={handleOnCheck}
              />
            </th>
            <th>Task</th>
            <th>Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, i) => {
            return (
              <tr>
                <td>
                  <Form.Check
                    type="checkbox"
                    checked={ids.includes(item.id)}
                    onChange={handleOnCheck}
                    value={item.id}
                  />
                </td>
                <td>{item.task}</td>
                <td>{item.hr}</td>
                <td>
                  {arrow === "right" ? (
                    <Button
                      variant="success"
                      onClick={() => switchTask(item.id, "bad")}
                    >
                      <i class="fa-solid fa-arrow-right"></i>
                    </Button>
                  ) : (
                    <Button
                      variant="danger"
                      onClick={() => switchTask(item.id, "entry")}
                    >
                      <i class="fa-solid fa-arrow-left"></i>
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
