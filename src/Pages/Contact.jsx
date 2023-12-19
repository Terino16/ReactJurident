
import '../Pages/Contact.css'
const Contact = () => {
  return (
    <div>
    <h1>Contact Us</h1>
    <div className="container">
        <form action="#" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required/>

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <input type="submit" value="Submit"/>
        </form>
    </div>
    </div>

  )
}

export default Contact