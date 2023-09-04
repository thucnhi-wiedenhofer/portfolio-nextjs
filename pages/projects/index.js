import React from "react";
import GalleryCard from "./../../components/GalleryCard/GalleryCard";
import styles from "./../../styles/projets.module.css";

export default function index({ props }) {
  console.log(props);

  return (
    <>
      <section className={styles.banner} data-aos="fade-right">
        <h1 className={styles.title}>Projets</h1>
      </section>

      <section id="projects" className={styles.container}>
        <div className={styles.row}>
          {props.map((project, index) => (
            <GalleryCard key={index} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const data = await import(`./../../data/projects.json`);
  const array = data.projects;
  return {
    props: {
      array,
    },
  };
}
