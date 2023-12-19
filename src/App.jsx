
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import {Routes,Route} from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';
function App() {
 return(
   <>
     <Layout>
     <Routes>
      <Route element={<Home/>} index></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
     </Layout>
   </> 
 )
}

export default App
