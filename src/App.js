import axios from "axios";
import React from "react";
import UserList from "./UserList";
import 'bootstrap/dist/css/bootstrap.min.css';

const baseURL = "https://jsonplaceholder.typicode.com/Users/1";

export default function App() {
  const [listOfUsers, setListOfUsers] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  if (!listOfUsers) return null;

  return (
    <div>
      <UserList listOfUsers={listOfUsers}></UserList>
    </div>
  );
}