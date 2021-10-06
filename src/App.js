import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "bootstrap/dist/css/bootstrap.min.css";

import NewForm from "./NewForm";
import ArrayWithState from "./HooksTest/ArrayWithState";
import UseStateWithObject from "./HooksTest/UseStateWithObject";
import ToDoList from "./HooksTest/ToDoList";
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
        <ArrayWithState />
        <UseStateWithObject />
        <ToDoList />
      </Container>
    </div>
  );
}

export default App;
