
import './About.css';

const About = () => {
  return (
    <div className="container">
      <div className='container-1'>
        <div className="main-heading">
          <h1>About Us</h1>
        </div>
        <div className="main-sub-heading">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam blanditiis nisi assumenda eius esse enim, cumque odit    optio nam dolorem rerum fuga quaerat at tempore, reprehenderit aliquam, modi deleniti!</p>
        </div>
        <div>
          <button className='contact-button'>Contact Us</button>
        </div>
      </div>
      <div className="container-2">
        <div className="card-1">
          <img src = "https://dentalist.netlify.app/static/media/banner_1.9e7ce5cd85273d5458c9.png"></img>
        </div>
        <div className="card-2">
          <img src = "https://dentalist.netlify.app/static/media/banner_2.13a0b9b4236e02e2ea04.png"></img>
        </div>
      </div>
    </div> 
  )
}

export default About