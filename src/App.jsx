import React from 'react';
import { Container } from "react-bootstrap";
import Header from "./components/Header.jsx";
function App() {
  return (
    <div>
      <Header/>
      <main>
        <Container>
          <h1>Welcome</h1>
        </Container>
      </main>
    </div>
  );
}

export default App;
