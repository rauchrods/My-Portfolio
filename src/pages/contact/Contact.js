import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence } from "framer-motion";
import { FiSend, FiUser, FiMail, FiBriefcase, FiMessageSquare } from "react-icons/fi";
import Toast from "../../components/ui/Toast/Toast";
import styles from "./Contact.module.css";

function Contact() {
  const [contactInfo, setContactInfo] = useState({
    user_name: "",
    user_email: "",
    user_company: "",
    message: "",
  });

  const [isloader, setIsloader] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

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
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY },
      )
      .then(
        () => {
          setIsloader(false);
          setContactInfo({
            user_name: "",
            user_email: "",
            user_company: "",
            message: "",
          });
          showToast("Message sent successfully! I'll get back to you soon.", "success");
        },
        (error) => {
          setIsloader(false);
          console.log("FAILED...", error.text);
          showToast("Something went wrong. Please try again.", "error");
        },
      );
  };

  return (
    <div className={styles.contacts_page}>
      <div className={styles.page_header}>
        <h2>Get In Touch</h2>
        <p>
          Have a project in mind or want to hire me? Fill out the form below and
          I'll get back to you as soon as possible.
        </p>
      </div>

      <div className={styles.form_card}>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <div className={styles.form_row}>
            <div className={styles.field}>
              <label>
                <FiUser className={styles.field_icon} />
                Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Your full name"
                required
                value={contactInfo.user_name}
                onChange={contactInfoHandler}
              />
            </div>

            <div className={styles.field}>
              <label>
                <FiMail className={styles.field_icon} />
                Email <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="your@email.com"
                required
                value={contactInfo.user_email}
                onChange={contactInfoHandler}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label>
              <FiBriefcase className={styles.field_icon} />
              Organisation / Company
            </label>
            <input
              type="text"
              name="user_company"
              placeholder="Company or organisation name (optional)"
              value={contactInfo.user_company}
              onChange={contactInfoHandler}
            />
          </div>

          <div className={styles.field}>
            <label>
              <FiMessageSquare className={styles.field_icon} />
              Message <span className={styles.required}>*</span>
            </label>
            <textarea
              name="message"
              placeholder="Tell me about your project or leave a message..."
              required
              rows={5}
              value={contactInfo.message}
              onChange={contactInfoHandler}
            />
          </div>

          <button type="submit" disabled={isloader} className={styles.submit_btn}>
            {isloader ? (
              <span className={styles.btn_loader}></span>
            ) : (
              <>
                <FiSend />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>

      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Contact;
