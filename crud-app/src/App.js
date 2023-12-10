import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import Login from "./Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/edit/:id" element={<EditUser />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/createUser" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
