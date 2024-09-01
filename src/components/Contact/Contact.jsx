import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img 
            src={getImageUrl("contact/emailIcon.png")} 
            alt="Email icon" 
            className={styles.contactImg}
          />
          <a href="mailto:suryanshus.1512@gmail.com">suryanshus.1512@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
            className={styles.contactImg}
          />
          <a href="https://www.linkedin.com/in/suryanshu-9a91a2249/">linkedin.com/in/suranshu</a>
        </li>
        <li className={styles.link}>
          <img 
            src={getImageUrl("contact/githubIcon.png")} 
            alt="Github icon"
            className={styles.contactImg} 
          />
          <a href="https://github.com/Alcyone47">github.com/alcyone47</a>
        </li>
      </ul>
    </footer>
  );
};
