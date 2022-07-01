import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { TaskList } from "./TaskList";
import { Table } from "react-bootstrap";
export const ListArea = ({
  taskList,
  switchTask,
  total,
  handleOnCheck,
  ids,
}) => {
  const entryList = taskList.filter(({ type }) => type === "entry");
  const badList = taskList.filter(({ type }) => type === "bad"); // ({type}=>type==="type") here we can destructure to access the value as in the comment
  const badHours = badList.reduce((acc, item) => acc + +item.hr, 0);
  return (
    <div>
      <Row>
        <Col>
          <TaskList
            title="Entry List"
            name="entry"
            arrow="right"
            className="entry_list"
            list={entryList}
            switchTask={switchTask}
            handleOnCheck={handleOnCheck}
            ids={ids}
          ></TaskList>
        </Col>
        <Col>
          <TaskList
            title="Bad Task list"
            name="bad"
            className="bad_list"
            switchTask={switchTask}
            list={badList}
            handleOnCheck={handleOnCheck}
            ids={ids}
          ></TaskList>
          <div className="text-end text-danger fw-bold">
            You could have saved {badHours}hr
          </div>
        </Col>
      </Row>
      <p className="fw-bold">Total time allocated is {total} hr/per week</p>
    </div>
  );
};
