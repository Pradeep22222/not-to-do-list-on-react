import { Container } from "react-bootstrap";
import { ListArea } from "./Components/ListArea";
import { TaskForm } from "./Components/TaskForm";
import { useState } from "react";
import { Button } from "react-bootstrap";
const weeklyHours = 7 * 24;
function App() {
  const [taskList, setTaskList] = useState([]);
  const [ids, setIds] = useState([]);
  const totalHours = taskList.reduce((acc, item) => acc + +item.hr, 0);

  const addTask = (task) => {
    if (totalHours + +task.hr > weeklyHours) {
      return alert("Sorry, you donot have enough time to fit this task");
    }
    setTaskList([...taskList, task]);
  };
  const switchTask = (id, type) => {
    const switchArg = taskList.map((item, index) => {
      if (item.id === id) {
        item.type = type;
      }
      return item;
    });
    setTaskList(switchArg);
  };
  const handleOnCheck = (e) => {
    const { checked, value, name } = e.target;
    console.log(checked, value);

    if (value === "entry" || value === "bad") {
      let toDeleteIds = [];
      taskList.forEach((item) => {
        if (item.type === value) {
          toDeleteIds.push(item.id);
        }
      });
      if (checked) {
        // if ticked add all ids in ids otherwise take them out
        //add all entry list ids
        setIds([...ids, ...toDeleteIds]);
      } else {
        // else remove all entry list ids
        const tempArg = ids.filter((id) => !toDeleteIds.includes(id));
        setIds(tempArg);
      }
      return;
    }
    if (checked) {
      setIds([...ids, value]);
    } else {
      const tempArg = ids.filter((id) => id !== value);
      setIds(tempArg);
    }
  };
  const handleOnDelete = () => {
    if (
      !window.confirm("Are you sure, you want to delete the seleted items?")
    ) {
      return;
    }
    const tempArg = taskList.filter((item) => !ids.includes(item.id));
    setTaskList(tempArg);
    setIds([]);
  };

  return (
    <div className="wrapper">
      <Container>
        <h1 className="text-center py-5">My to do list</h1>
        {/* form comp */}
        <TaskForm addTask={addTask}></TaskForm>

        {/* list component */}
        <ListArea
          taskList={taskList}
          switchTask={switchTask}
          total={totalHours}
          handleOnCheck={handleOnCheck}
          ids={ids}
        ></ListArea>
        <div className="mt-3">
          {ids.length > 0 && (
            <Button variant="danger" onClick={handleOnDelete}>
              Delete Selected task
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
}

export default App;
