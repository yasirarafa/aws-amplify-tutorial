import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const cards = [
  { id: 1, title: "React Basics", description: "Learn the foundations of React." },
  { id: 2, title: "Hooks & Context", description: "Understand useState, useEffect, and Context API." },
  { id: 3, title: "UI Design", description: "Build modern, responsive user interfaces." },
];

const Home = ({ user }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Welcome, {user.email} 👋</h1>
      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
