import React from "react";
import styles from "./home.module.css";

import { Button, Typography } from "@mui/material";
import {useNavigate} from "react-router-dom" 

import TaskBox from "../../Components/TaskBox/taskBox";

function Home() {

  let navigate = useNavigate() 

  return (
    <div className={styles.mainContainer}>
      <Typography variant="h4" className={styles.text}>
        YOUR TODO LIST
      </Typography>
      <div className={styles.container}>
        <TaskBox />
      </div>
      <Button 
      variant="contained" 
      className={styles.buton}
      onClick={()=>{ navigate("/add")}}>
        Add Tasks
      </Button>
    </div>
  );
}

export default Home;
