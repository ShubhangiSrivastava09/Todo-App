import React, { useContext, useState } from "react";
import styles from "./addTask.module.css";

import { Button, TextField, Typography } from "@mui/material";
import {useNavigate} from "react-router-dom" 

import { TaskContext } from "../../context/TaskContext";

export default function AddTask() {

  let navigate = useNavigate() 

  const [note, setNote] = useState(" ");
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [phn, setPhn] = useState(" ");

  const {taskList, setTaskList} = useContext(TaskContext)

  // const isValidEmail =(email) =>{
  //   const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   return emailReg.test(email)
  // }

  // const isValidPhoneNumber=(phn)=>{
  //   const phnReg = /^[0-9]{10}$/g;
  //   return phnReg.test(phn)
  // }


  
  // const validateForm =() =>{
  //   if(!note){
  //     note.error = "Note is required"
  //   }
  //   if(!name){
  //     name.error = "Name is required"
  //   }
  //   if(!email){
  //     email.error = "email is required"
  //   }else if (!isValidEmail(email)){
  //     email.error = "invalid email format"
  //   }
  //   if(!phn){
  //     phn.error = "Phone number is required"
  //   }else if(isValidPhoneNumber(phn)){
  //     phn.error = "Invalid phone number"
  //   }
  // }

  const handleSubmit =(e)=>{
    e.preventDefault();
    // const isValid = validateForm();

    // if(isValid){
    //   console.log("Form submitted")
    //   navigate("/")
    // }
    // else{
    //   console.log("form validation failed");
    // }

    const taskDetails = [...taskList,{note:note, name:name, email:email, phn:phn, checked:false} ]

    setTaskList(taskDetails)
    navigate('/')
  }

  return (
    <div className={styles.container}>

      <Typography
        variant="subtitle1"
        display="block"
        fontSize={20}
        className={styles.heading}
      >
        ADD YOUR TASK
      </Typography>
      <TextField
        id="outlined-multiline-static"
        label="Note"
        value={note}
        multiline
        rows={4}
        fullWidth
        color="success"
        onChange={(e) => setNote(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Name"
        value={name}
        variant="outlined"
        fullWidth
        color="success"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={email}
        fullWidth
        color="success"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        value={phn}
        fullWidth
        color="success"
        onChange={(e) => setPhn(e.target.value)}
      />
      <div className={styles.buttonContainer}>
        <Button variant="contained" className={styles.buton} onClick={()=>{ navigate("/")}}>
          CANCEL
        </Button>
        <Button variant="contained" className={styles.buton} onClick={handleSubmit}>
          ADD
        </Button>
      </div>
    </div>
  );
}
