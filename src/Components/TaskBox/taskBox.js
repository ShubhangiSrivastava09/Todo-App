import React, { useContext } from "react";
import styles from "./taskBox.module.css";

import { Box, Typography } from "@mui/material";

import { TaskContext } from "../../context/TaskContext";
import Task from "../Task/task";

function TaskBox() {
  const { taskList, setTaskList,completedTask, setCompleteTask } = useContext(TaskContext);

  

  return (
    <Box className={styles.container}>
      <Box>
        {taskList.length !== 0 ? (
          taskList.map((item, index) => (
            <Task
              key={index}
              index={index}
              name={item.name}
              email={item.email}
              phn={item.phn}
              checked={item.checked}
            />
          ))
        ) : (
          <Typography variant="h6" width={"100%"} className={styles.text}>
            You don't have any task left
          </Typography>
        )}
      </Box>
      <Box className={styles.completedTask}>
        <Typography variant="body1" className={styles.heading}>
          Completed tasks
        </Typography>
      </Box>
    </Box>
  );
}

export default TaskBox;
