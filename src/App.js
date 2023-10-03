import React from "react";
import "./App.css";
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>

      <Route exact path='/' Component={Home} />
      <Route exact path='/rooms' Component={Rooms} />
      <Route exact path='/single-room' Component={SingleRoom} />
      <Route path="*" element={<Error />} />

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
