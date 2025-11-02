import React from "react";

const TaskCard = ({task,onEdit, onDelete}) => {
  return (
    <ul>
    <div>
      <li><p style={{fontWeight:"bold"}}>Task Name :{task.name}</p>
     <p> Deadline :{task.deadline}</p>
      <p>Status :{task.status}</p>
      Action :<button onClick={onEdit}>Edit Task</button> &nbsp;
      <button onClick={onDelete}>Delete Task</button>
      </li>
    </div>
    </ul>
  );
};

export default TaskCard;
