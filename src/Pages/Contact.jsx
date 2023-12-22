
import './Contact.css'
import { TbPhoneCalling } from "react-icons/tb";

const Contact = () => {
  return (
    <div className='main-container-new'>
        <div className="container-1-new">
            <div className="main-heading-new">
                <h1>Contact Us</h1>
            </div>
            <div className="sub-heading-new">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptatum sequi. Nostrum, nesciunt soluta voluptatum aliquam corrupti vitae dolor voluptate!</p>
            </div>
        </div>
        <div className="container-2-new">
            <div className="sub-container-1-new">
                <div className="name">
                    <h3>NAME</h3>
                    <input type='text' placeholder='Enter your name...' className='inp'></input>
                </div>
                <div className="email">
                    <h3>E-MAIL ADDRESS</h3>
                    <input type='email' placeholder='Enter email address...' className='inp'></input>
                </div>
                <div className="service">
                    <h3>SERVICE</h3>
                    <input type='text' placeholder='Teeth Whitening' className='inp'></input>
                </div>
                <div className="dept">
                    <h3>DEPARTMENT</h3>
                    <input type='text' placeholder='Select Department' className='inp'></input>
                </div>
                <div className="messages">
                    <h3>MESSAGES</h3>
                    <input type='text' placeholder='Enter your messages...' className='inp'></input>
                </div>
            </div>
            <div className="sub-container-2-new">
                <div>
                    <button className='contact-button-new'>Book and appointment</button>
                </div>
                <div className="calling-logo">
                    <TbPhoneCalling color='purple' size={35} />
                </div>
                <div className="contact-details">
                    <div className="emergency-text">
                        <p>DENTAL 24H EMERGENCY</p>
                    </div>
                    <div className="phone-no">
                        <p>03 482 394 123</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Contact