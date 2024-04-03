import React, { useContext, useState } from "react";
import styles from "./task.module.css";

import { Box, Checkbox, Typography } from "@mui/material";
import { TaskContext } from "../../context/TaskContext";

function Task(props) {

  const {taskList, setTaskList, completedTask, setCompleteTask} = useContext(TaskContext)

  // const handleChange = () => {
  //   if(even.target.checked)
  // }

  return (
    <Box className={styles.container}>
      <Checkbox key={props.index} checked={props.checked} color="success" onChange={handleChange} />
      <Box className={styles.detailContainer}>
        <Typography variant="body1">{props.name}</Typography>
        <Typography variant="body1">{props.email}</Typography>
        <Typography variant="body1">{props.phn}</Typography>
      </Box>
    </Box>
  );
}

export default Task;
