import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/App/Sidebar/Sidebar";
import { Container } from "react-bootstrap";

import Main from "./Pages/Main";

import { useSelector } from "react-redux";
import Error from "./Components/UI/Error/Error";
import Notfound from "./Pages/Notfound/Notfound";


function App() {
  const user = useSelector((state) => state.home.user);

 
  return (
    <Container fluid className="App p-0 m-0">
      <header className="max-h100vh  App-header">
        <Sidebar user={user} />
      </header>
      <main className="mainContainer">
        <Routes>
       
          <Route path="/:userid" element={<Main user={user} />} />
          <Route path="/" element={<Notfound/>} />
       
        </Routes>
      </main>
    </Container>
  );
}

export default App;
