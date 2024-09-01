import React from "react";

import styles from "./Projects.module.css"

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <ul>
        <li>Porject 1</li>
        <li>Porject 2</li>
        <li>Porject 3</li>
      </ul>
    </section>
  );
};
