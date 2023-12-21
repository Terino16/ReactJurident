import InfoCard from '../Components/InfoCard';
import '../Pages/Home.css'
import { TbPhoneCalling } from "react-icons/tb";

const Information=[
  {
    key:1,
    image:"https://1000logos.net/wp-content/uploads/2017/05/Pepsi-logo.png",
    name:"Dentures",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex reprehenderit"
  },
  {
    key:2,
    image:"https://1000logos.net/wp-content/uploads/2017/05/Pepsi-logo.png",
    name:"Implants",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex reprehenderit"
  },
  {
    key:3,
    image:"https://1000logos.net/wp-content/uploads/2017/05/Pepsi-logo.png",
    name:"Whitening",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex reprehenderit"
  },
  {
    key:4,
    image:"https://1000logos.net/wp-content/uploads/2017/05/Pepsi-logo.png",
    name:"Root Canal",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex reprehenderit"
  },
 
]
const Home = () => {
  return (
    <div className='Home'>
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

    <div className='Services'>
      <div className='Services-section-1'>
        <h4>Services</h4>
        <h1>Feel amazing about your oral health</h1>
      </div>
      <div  className='Services-section-2'>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio id assumenda perspiciatis ad nobis, excepturi aspernatur facilis labore magni at!</p>
      </div>
    </div>

    <div className='Information'>
      {Information.map((info)=>{
        return(
            <InfoCard name={info.name}  image={info.image} description={info.description} key={info.key}/>
          );
      })}
    </div>

    </div>
   
  )
}

export default Home