import "./contact.css"
const Contact = () => {
  return (
    <div className="contact-form-container">
      <h1>CONTACT OUR FRIENDLY TEAM</h1>
      <p>Let Us Know How Can We Help</p>
      <form className="contact-form">
        <input type="text" name="firstName" placeholder="First Name" required />
        <input type="text" name="lastName" placeholder="Last Name" required />
        <input type="phone" name="phone" placeholder="Your Phone" required />
        <input type="email" name="email" placeholder="Your Email" required />
        
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Contact