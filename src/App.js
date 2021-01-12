import React from 'react';
import Home from './pages/home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';

import theme  from "./theme";
import SingIn from './pages/SingIn';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sing-in" element={<SingIn />}/>
            <Route path="*" element={<Home />}/>
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
