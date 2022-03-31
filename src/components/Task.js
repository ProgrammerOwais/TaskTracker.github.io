import { FaTimes } from "react-icons/fa";

const Task = ({ task, onD, onToggle }) => {
  return (
    <div
      onDoubleClick={() => {
        onToggle(task.id);
      }}
      className={`task ${task.reminder == true ? "reminder" : ""}`}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onD(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
