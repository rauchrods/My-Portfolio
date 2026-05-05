import { motion } from "framer-motion";
import { MdCheckCircle, MdErrorOutline, MdClose } from "react-icons/md";
import styles from "./Toast.module.css";

function Toast({ message, type, onClose }) {
  return (
    <motion.div
      className={`${styles.toast} ${styles[`toast_${type}`]}`}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <span className={styles.toast_icon}>
        {type === "success" ? <MdCheckCircle /> : <MdErrorOutline />}
      </span>
      <span className={styles.toast_message}>{message}</span>
      <button className={styles.toast_close} onClick={onClose}>
        <MdClose />
      </button>
    </motion.div>
  );
}

export default Toast;
