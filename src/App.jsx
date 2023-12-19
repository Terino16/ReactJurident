
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import {Routes,Route} from "react-router-dom";
function App() {
 return(
   <>
     <Layout>
     <Routes>
      <Route element={<Home/>} index></Route>
        {/* <Route path="/about" element={<About/>}></Route> */}
      </Routes>
       
     </Layout>
   </> 
 )
}

export default App
