import '../Pages/Home.css'
import { TbPhoneCalling } from "react-icons/tb";
const Home = () => {
  return (
    <div className='Hero-section'>
    <div className='Hero-section-1'>
      <h1>Entrust your smile to professionals</h1>
      <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex reprehenderit eum placeat impedit quam, numquam mollitia magni, animi, modi libero expedita consequatur excepturi cupiditate eaque </p>
      <div className='hero-section-1-div'>
      <button className='nav-button'>Book Appointment</button>
      <span className='calling-logo'>
      <TbPhoneCalling color='purple' size={35} />
      </span>
      <span>
        <p className='emergency-text'>Dental emergency</p>
        <p className='phone-number'>4984382892</p>
      </span>
      </div>

    </div>
    <div>
      <img
      src="https://dentalist.netlify.app/static/media/1.f2649a478388d6ec5cf7.png"
      width={400}
      />
    </div>
   
    </div>
   
  )
}

export default Home