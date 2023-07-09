import logo from "./logo.svg";
import "./App.css";
import UserInput from "./components/users/UserInput";
import Card from "./components/UI/Card";
import UsersList from "./components/users/UsersList";
import { useState, Fragment } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: userName, age: userAge, key: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <UserInput onAddUser={addUserHandler} />
      <UsersList users={usersList} />

      {/* <section id="user-list">&nbmp</section> */}
    </Fragment>
  );
}

export default App;
