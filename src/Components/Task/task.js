import React, { useContext, useState } from "react";
import styles from "./task.module.css";

import { Box, Checkbox, Typography } from "@mui/material";
import { TaskContext } from "../../context/TaskContext";

function Task(props) {

  const {taskList, setTaskList, completedTask, setCompleteTask} = useContext(TaskContext)

  const handleChange = (e) =>{
    const filterTask = taskList.map((item, index) => {
        if(index === props.index  ){
          if(e.target.checked){
            item.checked = true
          }
        }
        return item;
    })
    console.log(filterTask)
  }

  return (
    <Box className={styles.container}>
      <Checkbox checked={props.checked} onChange={(e) => handleChange(e)}/>
      <Box className={styles.detailContainer}>
        <Typography variant="body1">{props.name}</Typography>
        <Typography variant="body1">{props.email}</Typography>
        <Typography variant="body1">{props.phn}</Typography>
      </Box>
    </Box>
  );
}

export default Task;
