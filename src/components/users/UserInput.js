import styles from "./UserInput.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { useState, Fragment, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [userNameInput, setUserNameInput] = useState("");
  // const [ageInput, setAgeInput] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age(>0).",
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setUserNameInput("");
    // setAgeInput("");
  };
  // const userNameChangeHandler = (e) => {
  //   setUserNameInput(e.target.value);
  // };
  // const ageChangeHandler = (e) => {
  //   setAgeInput(e.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.formcontrol}>
        <form onSubmit={addUserHandler}>
          <div className="form-control__username">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              ref={nameInputRef}
              // onChange={userNameChangeHandler}
              // value={userNameInput}
            ></input>
          </div>
          <div className="form-control__age">
            <label htmlFor="age">Age(Years)</label>
            <input
              type="number"
              id="age"
              ref={ageInputRef}
              // onChange={ageChangeHandler}
              // value={ageInput}
            ></input>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};
export default UserInput;
