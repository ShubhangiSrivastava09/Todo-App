import React from "react";
import styles from "./addTask.module.css";
import { Button, TextField, Typography } from "@mui/material";

export default function AddTask() {
  return (
    <div className={styles.container}>
      <Typography variant="subtitle1" display="block" fontSize={20} className={styles.heading} >
        ADD YOUR TASK
      </Typography>
      <TextField
        id="outlined-multiline-static"
        label="Note"
        multiline
        rows={4}
        fullWidth
        color="success"
      />
      <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth color="success"/>
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth color="success"/>
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" fullWidth color="success"/>
      <div className={styles.buttonContainer}>
      <Button variant="contained" className={styles.button}>CANCEL</Button>
      <Button variant="contained" className={styles.button}>ADD</Button>
      </div>
    </div>
  );
}
