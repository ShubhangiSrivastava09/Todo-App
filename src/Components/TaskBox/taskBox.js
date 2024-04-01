import React from "react";
import styles from "./taskBox.module.css";

import {Typography } from "@mui/material";

function TaskBox() {
  return (
      <div className={styles.container}>
        <Typography variant="h5" width={"100%"} className={styles.text}>
          You don't have any task left
        </Typography>
      </div>
  );
}

export default TaskBox;
