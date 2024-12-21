import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";

import "./App.css";
import ContactHeader from "./components/ContactHeader/ContactHeader";

function App() {
  return (
    <div>
      <Navigation />
      <ContactHeader />
    </div>
  );
}

export default App;
