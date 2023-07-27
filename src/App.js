
import './index.css'
import About from "./routes/About"
import  Contact  from './routes/Contact';
import Home from './routes/Home';

import Treat from './routes/Treat';



import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Treat" element={<Treat/>}/>
          <Route path="/Contact" element={<Contact/>} />
</Routes>


   </>
  );
}

export default App;
