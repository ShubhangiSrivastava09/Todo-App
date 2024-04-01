import React from "react";
import styles from "./home.module.css";

import { Button, Typography } from "@mui/material";

import TaskBox from "../../Components/TaskBox/taskBox";

function Home() {
  return (
    <div className={styles.mainContainer}>
      <Typography variant="h4" className={styles.text}>
        YOUR TODO LIST
      </Typography>
      <div className={styles.container}>
        <TaskBox />
      </div>
      <Button variant="contained" className={styles.button}>
        Add Tasks
      </Button>
    </div>
  );
}

export default Home;
