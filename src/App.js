import { Button, Container, IconButton, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Table } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import NewForm from "./NewForm";
const useStyles = makeStyles({
  root: {
    "& .MuiTextField-root": {
      margin: "10px",
    },
  },
  buttonsend: {
    margin: "10px",
  },
  formContainer: {
    maxWidth: "870px",
    margin: "auto",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <NewForm />
      </Container>
    </div>
  );
}

export default App;
