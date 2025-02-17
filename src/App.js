import React from "react";

import UserProfile from "./components/user-profile/user-profile.component";
import UserList from "./components/user-list/user-list.component";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <UserList />
      <UserProfile />
    </div>
  );
}

export default App;
