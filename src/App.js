import React from "react";
import {NewsProvider} from "./NewsApi";
import News from "./Component/News";
import './app.css';

function App() {
  return (
   <NewsProvider>
     <News/>
   </NewsProvider>
  );
}

export default App;
