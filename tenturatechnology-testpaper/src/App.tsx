import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {User} from "./view/common/pages/UserLogin/User";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" Component={DefaultLayout} > </Route>
          <Route path="/user" Component={User}> </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
