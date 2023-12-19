import '../Pages/Home.css'
import { useState } from 'react';
import { useEffect } from 'react';
const Home = () => {
    const [name, setname] = useState("Anubhav");
    const [age, setage] = useState(0);

    const handleclick=()=>{
        console.log(name,age);
    }

   useEffect(()=>{
    console.log("Use Effect called");
   },[]);
    
  return (
    <div>
        <div className="hero">
        <div className="hero-heading">
           <h1>Welcome to Front End Development classNamees</h1>
           <p>
            Are you ready to embark on a journey into the dynamic world of web development? Look no further! Our Front-End Developer classNamees are your gateway to mastering the art of creating stunning, interactive, and user-friendly websites.
           </p>
           <button className="hover-button">Hover Me</button>
        </div>
     </div>

     <div className='hero2' >
       <h1> Enter your Name</h1>
      <input 
      className='input' 
      placeholder="Anubhav"
      type='string'
      value={name}
      onChange={(e)=>{setname(e.target.value)}}
      />
       <input 
      className='input' 
      placeholder="10"
      type='number'
      value={age}
      onChange={(e)=>{setage(e.target.value)}}
      />
      <button onClick={handleclick}>
        Click
      </button>
     </div>
    </div>
   
  )
}

export default Home