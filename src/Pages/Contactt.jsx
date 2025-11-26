import Nav_bare from "../Components/NavBare";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contactt">
      <h1>Contact Us</h1>
      <div className="contact">
        <div className="contact_left">
          <img src="./conatact.jpg" alt="contact" />
        </div>

        <div className="contact_right">
          <p>Feel free to reach out to us anytime. We are here to help!</p>
          <form className="contact_form">
            <div className="input_group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="input_group">
              <label>Your Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="input_group">
              <label>Your Message</label>
              <textarea placeholder="Write your message..." rows="4"></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
