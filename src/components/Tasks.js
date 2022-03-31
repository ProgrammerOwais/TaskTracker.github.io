import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task key={task.id} task={task} onD={onDelete} onToggle={onToggle} />
        );
      })}
    </div>
  );
};

// tasks.propTypes = {};

export default Tasks;
