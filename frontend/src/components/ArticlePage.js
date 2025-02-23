import React from "react";
import "./Navbar.css";

const ArticlePage = () => {
  const articles = [
    {
      title: "Sustainable Agriculture: An Overview",
      description:
        "Learn how sustainable farming practices contribute to environmental conservation and long-term food security.",
      link: "https://en.wikipedia.org/wiki/Sustainable_agriculture",
    },
    {
      title: "Top 10 High-Value Crops for Profitable Farming",
      description:
        "Discover which crops offer the best return on investment for farmers looking to maximize their profits.",
      link: "https://en.wikipedia.org/wiki/List_of_high-value_crops",
    },
    {
      title: "Organic Farming: Principles and Practices",
      description:
        "Understand the principles of organic farming, including soil health, biodiversity, and natural pest management.",
      link: "https://en.wikipedia.org/wiki/Organic_farming",
    },
    {
      title: "Technological Innovations in Modern Agriculture",
      description:
        "Explore how technology, including drones, IoT, and precision farming, is revolutionizing the agricultural industry.",
      link: "https://en.wikipedia.org/wiki/Agricultural_technology",
    },
    {
      title: "Soil Health and Its Impact on Agriculture",
      description:
        "Learn about the factors that affect soil health and strategies to improve soil fertility and crop productivity.",
      link: "https://en.wikipedia.org/wiki/Soil_health",
    },
  ];

  return (
    <div style={styles.container}>
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Explore the World of Agriculture</h1>
        <p style={styles.heroSubtitle}>
          Insights, tips, and trends to inspire and empower modern farmers.
        </p>
      </section>

      <div style={styles.articlesGrid}>
        {articles.map((article, index) => (
          <div key={index} style={styles.articleCard}>
            <h3 style={styles.articleTitle}>{article.title}</h3>
            <p style={styles.articleDescription}>{article.description}</p>
            <a
              href={article.link}
              style={styles.readMoreLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#d9f2d9",
    minHeight: "100vh",
  },
  heroSection: {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#d9f2d9",
  },
  heroTitle: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "10px",
  },
  heroSubtitle: {
    fontSize: "1.2rem",
    color: "#555",
  },
  articlesGrid: {
    display: "block",
    padding: "20px",
  },
  articleCard: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    textAlign: "center",
    padding: "20px",
    marginBottom: "20px",
  },
  articleTitle: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "10px",
  },
  articleDescription: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "15px",
  },
  readMoreLink: {
    color: "#007BFF",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
  },
};

export default ArticlePage;
