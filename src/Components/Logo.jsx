import React from "react";

export default function Logo() {
  // Styles définis en interne pour garantir l'affichage
  // sur votre fond beige (#DEB887) sans dépendance CSS externe.
  const styles = {
    link: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      textDecoration: "none",
      color: "#1e3a8a", // Bleu très foncé pour le contraste
      transition: "opacity 0.2s",
      cursor: "pointer",
    },
    icon: {
      color: "#1d4ed8", // Bleu roi (blue-700) pour l'icône
      display: "flex",
      alignItems: "center",
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      lineHeight: "1",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "800",
      color: "#0f172a", // Presque noir pour une lisibilité maximale
      letterSpacing: "-0.02em",
      fontFamily: "sans-serif",
    },
    subtitle: {
      fontSize: "0.75rem",
      textTransform: "uppercase",
      letterSpacing: "0.15em",
      fontWeight: "700",
      color: "#374151", // Gris foncé (gray-700)
      marginTop: "2px",
      fontFamily: "sans-serif",
    },
  };

  return (
    <a
      href="/"
      style={styles.link}
      onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
      onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {/* Icône Livre */}
      <div style={styles.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      </div>

      {/* Texte */}
      <div style={styles.textContainer}>
        <span style={styles.title}>ENSAF</span>
        <span style={styles.subtitle}>Bibliothèque</span>
      </div>
    </a>
  );
}
