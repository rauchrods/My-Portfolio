import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

function Contact() {
  const [contactInfo, setContactInfo] = useState({
    user_name: "",
    user_email: "",
    user_company: "",
    message: "",
  });

  const [isloader, setIsloader] = useState(false);

  const contactInfoHandler = (e) => {
    setContactInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsloader(true);
    emailjs
      .sendForm("service_y60pu9i", "template_zsrdem9", form.current, {
        publicKey: "O6UI3T8H7rfh27YuD",
      })
      .then(
        () => {
          setIsloader(false);
          setContactInfo(() => ({
            user_name: "",
            user_email: "",
            user_company: "",
            message: "",
          }));
          alert("Form Submitted Successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className={styles.contacts_page}>
      <h2>Contact Me (Available For Hire)</h2>
      <p>
        If you have any feedback for me or incase you want to hire me then you
        can fill this form{" "}
      </p>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <div>
          <label>Name:*</label>
          <input
            type="text"
            name="user_name"
            placeholder="your name"
            required
            value={contactInfo.user_name}
            onChange={contactInfoHandler}
          />
        </div>
        <div>
          <label>Email:*</label>
          <input
            type="email"
            name="user_email"
            placeholder="your email-id"
            required
            value={contactInfo.user_email}
            onChange={contactInfoHandler}
          />
        </div>
        <div>
          <label>Organisation/Company Name:</label>
          <input
            type="text"
            name="user_company"
            placeholder="Company or any Organistion name if exists"
            value={contactInfo.user_company}
            onChange={contactInfoHandler}
          />
        </div>
        <div>
          <label>Message:*</label>
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={contactInfo.message}
            onChange={contactInfoHandler}
          />
        </div>
        <button type="submit" value="Send">
          Send
        </button>
      </form>
      <div className={styles[`loader_container_${isloader ? "show" : "hide"}`]}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
}

export default Contact;
