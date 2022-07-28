// import react 
import React from "react";
// additional imports
import '../styling/main.css'
import '../styling/Header.css'
// import '../styling/pgOne.css'
import Header from "./Header";
import PgOneContainer from "./PgOneContainer";

// create component
const App = () => {
    return (
      <>
            <Header/>
            <PgOneContainer/>
            
      </>
  )
}

export default App