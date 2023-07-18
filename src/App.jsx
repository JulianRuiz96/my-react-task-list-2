
import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";

function App() {
  const [tasksItems, setTaksItems] = useState([]);

  function createNewTask(taskName){
    if(!tasksItems.find(task => task.name === taskName)){
    setTaksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasksItems))
  }, [tasksItems]) 

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask}/>

      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems.map((task) => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
